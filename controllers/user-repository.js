import userData from '../data/users.json';

export default class UserRepository {

    fetchAll() {
        return userData;
    }
}