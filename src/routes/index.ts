import { Router } from 'express';
import { authRouter } from './auth';
import { userRouter } from './user';
import { productRouter } from './product';

const v1Router = Router();

v1Router.use('/auth', authRouter);
v1Router.use('/user', userRouter);
v1Router.use('/product', productRouter);
// All routes go here

export { v1Router };
