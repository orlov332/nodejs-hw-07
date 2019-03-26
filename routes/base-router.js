import express from 'express';

export default function baseRouter(uriPart, repository) {
    const router = express.Router();
    router.param('id', (req, res, next, idStr) => {
        req.entityId = idStr;
        repository.findById(idStr)
            .then((entity) => {
                req.entity = entity;
                if (req.entity === undefined) {
                    req.status(404)
                        .json({message: `Entity with id ${idStr} not found`});
                    console.error(`Entity with id ${idStr} not found`);
                }
                next();
            });
    });

    router.get(`${uriPart}`, (req, res) => {
        repository.fetchAll()
            .then((products) => {
                res.status(200).json(products);
            });
    });

    router.post(`${uriPart}`, (req, res) => {
        repository.save(req.body)
            .then((entity) => {
                res.status(200).json(entity);
            });
    });

    router.put(`${uriPart}`, (req, res) => {
        repository.save(req.body)
            .then((entity) => {
                res.status(200).json(entity);
            });
    });

    router.get(`${uriPart}/:id`, (req, res) => {
        res.status(200).json(req.entity);
    });

    router.delete(`${uriPart}/:id`, (req, res) => {
        repository.deleteById(req.entityId)
            .then((entity) => {
                res.status(200).json(entity);
            });
    });
    return router;
}
