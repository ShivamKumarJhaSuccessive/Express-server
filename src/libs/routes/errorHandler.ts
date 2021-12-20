import { Request, Response, NextFunction } from 'express';

export default(err: any, req: Request, res: Response, next: NextFunction) => {
  console.log('Error Handled.', res.headersSent);

  if (res.headersSent) {
    console.log('Invalid Route');
    return next(err);
  }

  const { message, status, error } = err;

  const result = {
    error: error || 'Not Found',
    message: message || 'error',
    status: status || 500,
    timestamp: new Date()
  };

  res.status(result.status).json(result);
};