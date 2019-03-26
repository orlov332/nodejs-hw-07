import http from 'http';
import mongoConnection from '../db/mongo-connection';

http.createServer()
    .on('request', (req, res) => {
        mongoConnection.getDb()
            .then((db) => {
                const cityCollection = db.collection('cities');
                return cityCollection.find({}).toArray();
            })
            .then((cities) => {
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify(cities));
            });
    })
    .listen(3000);