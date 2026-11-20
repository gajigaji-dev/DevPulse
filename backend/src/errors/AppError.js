class AppError extends Error {
  constructor(message, statusCode, code) {
    super(message); // 부모 클래스(Error)의 constructor에 message 전달
    this.statusCode = statusCode;
this.code = code;
this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    
    // 에러 발생 시 스택 트레이스(Stack Trace) 유지
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;