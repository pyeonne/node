const fs = require('fs');

// π©
const beforeMem = process.memoryUsage().rss;
fs.readFile('./file.txt', (_, data) => {
    fs.writeFile('./file2.txt', data, () => {});
    // calculate
    const afterMem = process.memoryUsage().rss;
    const diff = afterMem - beforeMem;
    const consumed = diff / 1024 / 1024;
    // μλͺ¨λλ λ©λͺ¨λ¦¬λ κ³ μ κ°μ΄ μλλ―λ‘ λ¬λΌμ§ μ μλ€.
    console.log(diff);
    console.log(`Consumed Memory: ${consumed}MB`);
});

