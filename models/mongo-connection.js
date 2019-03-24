import {MongoClient} from 'mongodb';
import config from '../config/mongo';

export default async function () {
    const client = new MongoClient(config.url, {useNewUrlParser: true});

    await client.connect();
    return client.db(config.dbName);

}
