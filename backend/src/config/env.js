require('dotenv').config();

const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: Number(process.env.PORT) || 3000,
  DATABASE_URL: process.env.DATABASE_URL,
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:5173',
};

if (!env.DATABASE_URL) {
  throw new Error('환경변수 DATABASE_URL이 설정되지 않았습니다. backend/.env를 확인하세요.');
}

module.exports = env;
