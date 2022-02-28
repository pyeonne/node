import express from 'express';
import fsAsync from 'fs/promises';

const app = express();

app.get('/', (req, res, next) => {
    return fsAsync.readFile('/file2.txt').catch(next);
});

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
    next();
});

//github.com/expressjs/express/issues/2259#issuecomment-433586394
//github.com/blakeembrey/async-middleware

app.listen(8080);

// 에러 처리는 해당하는 곳에서 처리하도록 해야 함
// 아래의 에러 핸들러는 안전망으로 쓸 것 !
