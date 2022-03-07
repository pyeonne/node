import * as tweetRepository from '../data/tweet.js';

export async function getTweets(req, res) {
    const username = req.query.username;
    const data = await (username
        ? tweetRepository.getAllByUsername(username)
        : tweetRepository.getAll());
    res.status(200).json(data);
}

export async function getTweet(req, res) {
    const id = req.params.id;
    const tweet = await tweetRepository.getById(id);
    if (tweet) {
        res.status(200).json(tweet);
    } else {
        res.status(404).json({ message: `Tweet id(${id}) not found` });
    }
}

export async function createTweet(req, res) {
    const { text, name, username } = req.body;
    const tweet = await tweetRepository.create(text, req.userId);
    res.status(201).json(tweet);
}

export async function updateTweet(req, res) {
    const id = req.params.id;
    const text = req.body.text;
    const tweet = await tweetRepository.getById(id);
    if (!tweet) {
        return res.sendStatus(404);
    }
    // 401은 로그인이 필요한 서비스인데 로그인을 하지 않았을 때
    // 403 로그인된 사용자지만 특별한 권한이 없을 때
    if (tweet.userId !== req.userId) {
        return res.sendStatus(403);
    }
    const updated = await tweetRepository.update(id, text);
    res.status(200).json(updated);
}

export async function deleteTweet(req, res) {
    const id = req.params.id;
    const tweet = await tweetRepository.getById(id);
    if (!tweet) {
        return res.sendStatus(404);
    }
    if (tweet.userId !== req.userId) {
        return res.sendStatus(403);
    }
    await tweetRepository.remove(id);
    res.sendStatus(204);
}
