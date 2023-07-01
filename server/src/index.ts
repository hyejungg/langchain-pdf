import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import multer from 'multer';
import redis from './loaders/redis';
import routes from './routes';
const app = express();
dotenv.config();

redis.connectRedis();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

// error handler
interface ErrorType {
  message: string;
  status: number;
}

app.use(function (err: ErrorType, req: Request, res: Response, next: NextFunction) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'production' ? err : {};

  // multer 에러 확인용 log
  if (err instanceof multer.MulterError) {
    res.json({
      success: 0,
      message: err.message,
    });
  }

  console.error(err);
  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

app
  .listen(process.env.PORT, () => {
    console.log(`
    ################################################
          🛡️  Server listening on port 🛡️
    ################################################
  `);
  })
  .on('error', err => {
    console.error(err);
    redis.disConnectRedis();
    process.exit(1);
  });
