const process = require('process');

// 현재 동작하고 있는 노드 프로세스의 정보를 얻을 수 있음
console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

/**
 * 현재 수행되고 있는 코드가 다 완료된 다음에
 * 내가 등록한 콜백함수를 task Que에 넣었다가 수행해줘
 */
setTimeout(() => {
    console.log('setTimeout');
}, 0);

// nextTick은 우선 순위가 높아서 task Que에 항상 제일 앞부분에서 수행함
process.nextTick(() => {
    console.log('nextTick');
});

// for loop를 많이 도는 작업은 노드에서 수행하면 안됨
for (let i = 0; i < 100; i++) {
    console.log('for loop');
}
