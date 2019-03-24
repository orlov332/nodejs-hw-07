import mongoConnection from './mongo-connection';
import userData from '../data/users.json';
import productData from '../data/products.json';
import cityData from '../data/cities.json';

mongoConnection().then(async (db) => {

    const userCollection = db.collection('users');
    await userCollection.deleteMany();
    userCollection.insertMany(userData);

    const prodCollection = db.collection('products');
    await prodCollection.deleteMany();
    prodCollection.insertMany(productData);

    const cityCollection = db.collection('cities');
    await cityCollection.deleteMany();
    cityCollection.insertMany(cityData);

}).finally((db) => db.connection.close());