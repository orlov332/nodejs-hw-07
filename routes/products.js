import ProductRepository from '../controllers/product-repository';
import baseRouter from './base-router';

let uriPart = '/products';
const router = baseRouter(uriPart, new ProductRepository());

router.get(`${uriPart}/:id/reviews`, (req, res) => {
    res.status(200).json(req.entity.reviews);
});

export default router;