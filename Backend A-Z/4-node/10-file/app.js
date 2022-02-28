const fs = require('fs');

/**
 * 3
 * rename(..., callback(error, data))
 * try { renameSync(...) } catch(e) { }
 * promises.rename().then().catch(0)
 * renameSync는 사용하는 것이 좋지 않고,
 * 콜백 함수로 전달하거나 promise 형태로 사용하는 것이 좋음
 */

try {
    fs.renameSync('./text.txt', './text-new.txt');
} catch (error) {
    console.error(error);
}

// 아래의 두 가지 방식은 비동기적으로 처리되기 때문에
// 어느 것이 먼저 처리될지는 아무도 모름
fs.rename('./text-new.txt', './text.txt', error => {
    console.log(error);
});

fs.promises
    .rename('./text2.txt', './text-new.txt') //
    .then(() => console.log('Done!'))
    .catch(console.error);

console.log('hello');
