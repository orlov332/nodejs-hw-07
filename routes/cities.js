import express from 'express';
import CityRepository from '../controllers/city-repository';

const router = express.Router();
const repository = new CityRepository();

router.get('/cities', (req, res) => {
    repository.fetchAll()
        .then((cities) => {
            res.status(200).json(cities);
        });
});

export default router;