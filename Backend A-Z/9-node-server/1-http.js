const http = require('http');
const fs = require('fs');
// const http2 = require('http2'); // https

// console.log(http.STATUS_CODES);
// console.log(http.METHODS);

const server = http.createServer((req, res) => {
    console.log('incoming...');
    console.log(req.headers);
    console.log(req.httpVersion);
    console.log(req.method);
    console.log(req.url);
    const url = req.url;
    res.setHeader('Content-Type', 'text/html');
    if (url === '/') {
        fs.createReadStream('./html/index.html').pipe(res);
    } else if (url === '/course') {
        fs.createReadStream('./html/courses.html').pipe(res);
    } else {
        fs.createReadStream('./html/not-found.html').pipe(res);
    }
    /**
     * pipe는 비동기적인 함수이므로,
     * 호출만 해놓고 (작업이 끝나길 기다리지 않고) 다음 코드 라인으로 넘어감
     * 그래서 piping이 되고 있는 중간에 res.end를 호출하게 되면 piping이 멈춤
     * pipe가 끝나면 자동으로 end() 처리가 되므로, 수동적으로 호출해줄 필요 없음
     */
    // res.end();
});

server.listen(8080);
