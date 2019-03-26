export default class ModelRepository {

    constructor(model) {
        this.Model = model;
    }

    async fetchAll() {
        return this.Model.find();
    }

    async findById(id) {
        return this.Model.findById(id);
    }

    async deleteById(id) {
        return this.Model.findOneAndDelete(id);
    }

    async save(obj) {
        return (new this.Model(obj)).save();
    }

}
