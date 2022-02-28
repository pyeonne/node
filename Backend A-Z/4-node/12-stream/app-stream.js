const fs = require('fs');

/**
 * on()은 자기자신을 return하므로 체이닝으로 연결해서 사용 가능
 * on()은 data가 발생할 때마다 콜백함수가 수행됨
 * once()는 처음에 받은 data만 출력됨
 */
const data = [];
fs.createReadStream('./file.txt', {
    // 스트림이 한 번에 처리할 수 있는 내용을 결정함
    highWaterMark: 8, // 기본값은 64 kbytes
    // encoding: 'utf-8',
})
    .once('data', chunk => {
        // console.log(chunk);
        data.push(chunk);
        console.count('data');
    })
    .on('end', () => {
        console.log(data.join(''));
    })
    .on('error', error => {
        console.log(error);
    });
