import express from 'express';

const router = express.Router();

router.use((req, res, next) => {
    console.log('middleware for posts!');
    next();
});

// 상위 루트는 app3.js에서 지정해두었으므로 생략 가능
router.get('/', (req, res) => {
    res.status(201).send('GET: /posts');
});

router.post('/', (req, res) => {
    res.status(201).send('POST: /posts');
});

router.put('/:id', (req, res) => {
    res.status(201).send('PUT: /posts/:id');
});

router.delete('/:id', (req, res) => {
    res.status(201).send('DELETE: /posts/:id');
});

export default router;
