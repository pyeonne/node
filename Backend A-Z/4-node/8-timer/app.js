/**
 * setInterval 함수는 취소해주지 않으면 무한으로 수행함
 */
let num = 1;
const interval = setInterval(() => {
    console.log(num++);
}, 1000);

setTimeout(() => {
    console.log('Timeout!');
    clearInterval(interval);
}, 6000);
