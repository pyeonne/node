const jwt = require('jsonwebtoken');

const secret = 'b^bm3Jr$hOMMN*ho@#T&3HH6^J7ktFD5';
const token = jwt.sign(
    {
        id: 'pyeonne',
        isAdmin: false,
    },
    secret,
    { expiresIn: 2 },
);

setTimeout(() => {
    jwt.verify(token, secret, (error, decoded) => {
        console.log(error, decoded);
    });
}, 3000);

console.log(token);
