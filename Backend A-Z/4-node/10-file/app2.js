const fs = require('fs').promises;

// reading a file
// 파일을 읽어올 때 인코딩을 따로 지정하지 않으면 버퍼의 내용을 그대로 읽어 옴
fs.readFile('./text.txt', 'utf8') //
    .then(data => console.log(data))
    .catch(console.error);

// writing a file
fs.writeFile('./file.txt', 'Hello, Dream Coders! :)') //
    .catch(console.error);

/**
 * 프로미스는 비동기적으로 처리되기 때문에 순서가 보장이 되지 않음
 * 순서가 중요한 경우라면 then을 사용해야 함
 * 프로미스는 catch를 이용해서 에러를 잡는 것이 중요함
 */
fs.appendFile('./file.txt', 'Yo!, Dream Coders! :)') //
    .then(() => {
        // copy
        fs.copyFile('./file.txt', './file2.txt') //
            .catch(console.error);
    })
    .catch(console.error);

// folder
fs.mkdir('sub-folder') //
    .catch(console.error);

// 현재 경로에 있는 파일과 폴더의 이름을 읽어 옴
fs.readdir('./') //
    .then(console.log)
    .catch(console.error);
