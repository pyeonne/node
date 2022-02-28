const fs = require('fs');

// 💩
const beforeMem = process.memoryUsage().rss;
fs.readFile('./file.txt', (_, data) => {
    fs.writeFile('./file2.txt', data, () => {});
    // calculate
    const afterMem = process.memoryUsage().rss;
    const diff = afterMem - beforeMem;
    const consumed = diff / 1024 / 1024;
    // 소모되는 메모리는 고정값이 아니므로 달라질 수 있다.
    console.log(diff);
    console.log(`Consumed Memory: ${consumed}MB`);
});

