import express from 'express';
import cookieParser from './middlewares/cookie-parser';
import queryParser from './middlewares/query-parser';
import productsRouter from './routes/products';
import usersRouter from './routes/users';
import citiesRouter from './routes/cities';

const app = express();

app.use(cookieParser());
app.use(queryParser());
app.use(express.json());

app.use('/api', productsRouter);
app.use('/api', usersRouter);
app.use('/api', citiesRouter);


export default app;