import mongoose from '../db/mongoose';

export default mongoose.model('City', new mongoose.Schema({
    name: {type: String, required: true},
    country: {type: String, required: true},
    capital: {type: Boolean, required: true},
    location: {
        lat: {type: Number, required: true},
        long: {type: Number, required: true}
    },
    lastModifiedDate: {type: Date, default: Date.now}
}));