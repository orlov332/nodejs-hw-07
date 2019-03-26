import mongoConnection from './mongo-connection';
import userData from './data/users.json';
import productData from './data/products.json';
import cityData from './data/cities.json';

(async function () {

    const db = await mongoConnection.getDb();

    const userCollection = db.collection('users');
    await userCollection.deleteMany();
    await userCollection.insertMany(userData);

    const prodCollection = db.collection('products');
    await prodCollection.deleteMany();
    await prodCollection.insertMany(productData);

    const cityCollection = db.collection('cities');
    await cityCollection.deleteMany();
    await cityCollection.insertMany(cityData);

    mongoConnection.close();
})();
