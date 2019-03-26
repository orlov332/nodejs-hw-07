import Product from '../models/product';
import ModelRepository from './model-repository';

export default class ProductRepository extends ModelRepository {

    constructor() {
        super(Product);
    }

}