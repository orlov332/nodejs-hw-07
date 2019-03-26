import City from '../models/city';
import ModelRepository from './model-repository';

export default class CityRepository extends ModelRepository {

    constructor() {
        super(City);
    }
}