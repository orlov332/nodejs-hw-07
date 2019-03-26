import mongoose from '../db/mongoose';

export default mongoose.model('User', new mongoose.Schema({
    name: {type: String, required: true},
    login: {type: String, required: true},
    lastModifiedDate: {type: Date, default: Date.now}
}));