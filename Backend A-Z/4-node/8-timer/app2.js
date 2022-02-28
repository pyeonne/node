/**
 * setTimeout과 setImmediate는 거의 동일하게 동작
 * setTimeout은 콜스택이 다 비워져야 하는 시간을 고려하지 않으므로
 * 사실 설정한 0초보다 더 오래 걸릴 수 있음 (for loop가 있으면 더 길어짐)
 */
console.log('code1');
console.time('timeout 0');
setTimeout(() => {
    console.timeEnd('timeout 0');
    console.log('setTimeout 0');
}, 0);

console.log('code2');
setImmediate(() => {
    console.log('setImmediate');
});

console.log('code3');
process.nextTick(() => {
    console.log('process.nextTick');
});
