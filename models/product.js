import mongoose from '../db/mongoose';

export default mongoose.model('Product', new mongoose.Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    brand: {type: String, required: true},
    price: {type: Number, required: true, min: 0},
    reviews: [{
        author: {type: String},
        review: {type: String}
    }],
    lastModifiedDate: {type: Date, default: Date.now}
}));