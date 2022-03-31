import Mongoose from 'mongoose';
import { config } from '../config.js';

export async function connectDB() {
    return Mongoose.connect(config.db.host);
}

// TODO(Ellie): Delete blow

let db;
export function getUsers() {
    return db.collection('users');
}

export function getTweets() {
    return db.collection('tweets');
}
