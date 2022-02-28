import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';
// require('express-async-errors'); // CommonJS module
import {} from 'express-async-errors';

const app = express();

app.use(express.json());

app.get('/file1', (req, res) => {
    // 1. 비동기
    // 내부적으로 에러가 발생하므로 외부에서 에러를 포착할 수 없음
    // 해당하는 콜백 함수 내에서 에러 처리를 해야 함
    // fs.readFile('/file1.txt', (err, data) => {
    //   if (err) {
    //     res.sendStatus(404);
    //   }
    // });

    // 2. 동기
    // 실수로 에러 처리를 하지 않으면 마지막 에러 처리 미들웨어가 포착함
    try {
        const data = fs.readFileSync('/file1.txt');
    } catch (error) {
        res.status(404).send('File not found');
    }
});

// 프로미스는 비동기
// 비동기는 try catch문으로 에러를 포착할 수 없음
app.get('/file2', (req, res, next) => {
    // fsAsync
    //     .readFile('/file2.txt') //
    //     .catch(error => {
    //         res.status(404).send('File not found');
    //     });
    return fsAsync.readFile('/file.txt');
});

// async로 감싸져 있기 때문에 프로미스를 리턴함
// 함수 안에서는 동기적으로 처리 가능하지만
// 함수 자체는 프로미스로 감싸져 있기 때문에
// 함수 안에서 에러가 발생하는 것은 프로미스 내부에서 에러가 발생하는 것과 같음
// catch를 이용해서만 에러를 잡을 수 있음
app.get('/file3', async (req, res) => {
    // try {
    //     const data = await fsAsync.readFile('/file2.txt');
    // } catch {
    //     res.sendStatus(404);
    // }
    const data = await fsAsync.readFile('/file2.txt');
});

// 버전 5 이하에서는: require('express-async-errors');

// Express 5 부터는 이렇게
app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
});

app.listen(8080);
