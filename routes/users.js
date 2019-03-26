import UserRepository from '../controllers/user-repository';
import baseRouter from './base-router';

const router = baseRouter('/users', new UserRepository());

export default router;