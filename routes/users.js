import express from 'express';
import UserRepository from '../controllers/user-repository';

const router = express.Router();
const repository = new UserRepository();

router.get('/users', (req, res) => {
    repository.fetchAll()
        .then((users) => {
            res.status(200).json(users);
        });
});

export default router;