// import MongoDb from 'mongodb';
// import { getTweets } from '../database/database.js';
// import * as userRepository from '../data/auth.js';
// const ObjectId = MongoDb.ObjectId;

// // NoSQL (정보의 중복 > 관계)
// // 모든 사용자가 트윗을 쿼리하는 횟수 > 사용자가 사용자의 정보를 업데이트를 하는 횟수
// // 관계형 조인 쿼리의 성능이 좋지 않다.

// export async function getAll() {
//     return getTweets() //
//         .find()
//         .sort({ createdAt: -1 })
//         .toArray()
//         .then(mapTweets);
// }

// export async function getAllByUsername(username) {
//     return getTweets() //
//         .find({ username })
//         .sort({ createdAt: -1 })
//         .toArray()
//         .then(mapTweets);
// }

// export async function getById(id) {
//     return getTweets() //
//         .findOne({ _id: new ObjectId(id) })
//         .then(mapOptionalTweet);
// }

// export async function create(text, userId) {
//     const { name, username, url } = await userRepository.findById(userId);
//     const tweet = {
//         text,
//         createdAt: new Date(),
//         userId,
//         name,
//         username,
//         url,
//     };
//     return getTweets()
//         .insertOne(tweet)
//         .then(data =>
//             mapOptionalTweet({
//                 ...tweet,
//                 _id: data.insertedId,
//             }),
//         );
// }

// export async function update(id, text) {
//     return getTweets()
//         .findOneAndUpdate(
//             { _id: new ObjectId(id) },
//             { $set: { text } },
//             { returnDocument: 'after' },
//         )
//         .then(result => result.value)
//         .then(mapOptionalTweet);
// }

// export async function remove(id) {
//     return getTweets().deleteOne({ _id: new ObjectId(id) });
// }

// function mapOptionalTweet(tweet) {
//     return tweet ? { ...tweet, id: tweet._id.toString() } : tweet;
// }

// function mapTweets(tweets) {
//     console.log(tweets);
//     return tweets.map(mapOptionalTweet);
// }
