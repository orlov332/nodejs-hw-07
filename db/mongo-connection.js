import {MongoClient} from 'mongodb';
import config from '../config/mongo';

let client = null;

export default {
    getDb: async function () {
        if (client)
            return client.db(config.dbName);
        else {
            client = await (new MongoClient(config.url, {useNewUrlParser: true})).connect();
            return client.db(config.dbName);
        }
    },
    close: function () {
        if (client) client.close();
    }
};