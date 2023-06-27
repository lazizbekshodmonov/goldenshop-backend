import mongoose from 'mongoose';
import config from '../config';
import { log } from 'console';

const db = async () => {
    await mongoose.connect(config.dbConfig.db);
}
export default db;