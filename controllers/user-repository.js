import Repository from './repository';

export default class UserRepository extends Repository {

    constructor() {
        super('users');
    }
}