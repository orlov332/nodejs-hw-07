import User from '../models/user';
import ModelRepository from './model-repository';

export default class UserRepository extends ModelRepository {

    constructor() {
        super(User);
    }
}