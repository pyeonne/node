const bcrypt = require('bcrypt');

// Salt 길이가 지나치게 길어지면 서버의 성능에 영향을 줌
// 10 ~ 12 추천
const password = 'abcd1234';
const hashed = bcrypt.hashSync(password, 15);
console.log(`password" ${password}, hashed: ${hashed}`);

const result = bcrypt.compareSync('abcd1234', hashed);
console.log(result);
