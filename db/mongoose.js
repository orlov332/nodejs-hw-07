import mongoose from 'mongoose';
import config from '../config/mongo';

mongoose.connect(config.url + '/' + config.dbName, {useNewUrlParser: true});

export default mongoose;