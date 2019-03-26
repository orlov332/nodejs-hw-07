import mongoConnection from '../models/mongo-connection';

export default class Repository {

    constructor(collectionName){
        this.collectionName = collectionName;
    }

    async getCollection() {
        const db = await mongoConnection.getDb();
        return db.collection(this.collectionName);
    }

    async fetchAll() {
        return (await this.getCollection()).find({}).toArray();
    }

    async save(product) {
        return (await this.getCollection()).insertOne(product);
    }

}
