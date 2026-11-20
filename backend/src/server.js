const env = require('./config/env');
const app = require('./app');
const prisma = require('./config/prisma');

const server = app.listen(env.PORT, () => {
  console.log(`Server is running on http://localhost:${env.PORT}`);
});

const shutdown = async (signal) => {
  console.log(`${signal} 수신, 서버를 종료합니다.`);
  server.close(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
};

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
