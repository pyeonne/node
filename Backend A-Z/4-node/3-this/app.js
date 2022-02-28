// this는 문맥에 따라서 달라질 수 있음
function hello() {
    console.log(this);
    console.log(this === global); // true
}

hello();

class A {
    constructor(num) {
        this.num = num;
    }
    memberFunction() {
        console.log('----- class -----');
        console.log(this); // A { num: 1 }
        console.log(this === global); // false
    }
}

const a = new A(1);
a.memberFunction();

console.log('--- global scope ---');
console.log(this);
console.log(this === module.exports); // true
