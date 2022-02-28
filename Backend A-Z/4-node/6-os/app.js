const os = require('os');

// 줄바꿈 문자열
console.log(os.EOL === '\n'); // Mac OS
console.log(os.EOL === '\r\n'); // Window

// 서버가 동작하는 환경에 대한 정보를 가져올 때 os 모듈을 사용
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.type());
console.log(os.userInfo());
console.log(os.cpus());
console.log(os.homedir());
console.log(os.hostname());
