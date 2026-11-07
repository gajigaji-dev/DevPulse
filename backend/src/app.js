const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const AppError = require('./errors/AppError');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// API 라우터 연결
app.use('/', routes);

// 테스트용 에러 발생 라우트 (프로젝트 미존재 / 500 에러 테스트용)
app.use('/test', (req, res, next) => {
  // query string으로 에러 종류 분기 테스트
  if (req.query.type === 'project-not-found') {
    throw new AppError('프로젝트를 찾을 수 없습니다.', 404, 'PROJECT_NOT_FOUND');
  }
  if (req.query.type === 'server-error') {
    throw new Error('데이터베이스 연결 실패 등 예상치 못한 에러!'); // 500 처리 확인용
  }
  res.send('Test Router');
});

// 존재하지 않는 경로 처리
app.use((req, res, next) => {
  next(new AppError(
    '요청한 경로를 찾을 수 없습니다.',
    404,
    'ROUTE_NOT_FOUND'
  ));
});

// 공통 에러 핸들러 미들웨어 연결
const errorHandler = require('./middlewares/error.middleware');
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

module.exports = app;