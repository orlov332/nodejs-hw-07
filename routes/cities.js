import CityRepository from '../controllers/city-repository';
import baseRouter from './base-router';

const router = baseRouter('/cities', new CityRepository());

export default router;