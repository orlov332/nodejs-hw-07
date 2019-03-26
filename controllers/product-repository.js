import Repository from './repository';

export default class ProductRepository extends Repository {

    constructor() {
        super('products');
    }

    async findById(id) {
        return (await this.getCollection()).findOne({'id': id});
    }
}