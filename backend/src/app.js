const express = require('express');
const cors = require('cors');
const env = require('./config/env');
const routes = require('./routes');
const AppError = require('./errors/AppError');
const errorHandler = require('./middlewares/error.middleware');

const app = express();

app.use(cors({ origin: env.CORS_ORIGIN.split(',').map((origin) => origin.trim()) }));
app.use(express.json());

// API 라우터 연결
app.use('/', routes);

// 테스트용 에러 발생 라우트 (개발 환경에서만 활성화)
if (env.NODE_ENV !== 'production') {
  app.use('/test', (req, res) => {
    // query string으로 에러 종류 분기 테스트
    if (req.query.type === 'project-not-found') {
      throw new AppError('프로젝트를 찾을 수 없습니다.', 404, 'PROJECT_NOT_FOUND');
    }
    if (req.query.type === 'server-error') {
      throw new Error('데이터베이스 연결 실패 등 예상치 못한 에러!'); // 500 처리 확인용
    }
    res.send('Test Router');
  });
}

// 존재하지 않는 경로 처리
app.use((req, res, next) => {
  next(new AppError('요청한 경로를 찾을 수 없습니다.', 404, 'ROUTE_NOT_FOUND'));
});

// 공통 에러 핸들러 미들웨어 연결
app.use(errorHandler);

module.exports = app;
