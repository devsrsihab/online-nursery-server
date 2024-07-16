import express, { Application } from 'express';
import cors from 'cors';
import globalErrHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/router';
const app: Application = express();

// express parse
app.use(express.json());
app.use(cors({ origin: ['https://client-4.vercel.app'], credentials: true }));
// application routes
app.use('/api/v1', router);

// globa err handler
app.use(globalErrHandler)

// not found route
app.use(notFound)

export default app;
