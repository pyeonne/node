/** 
 * EventEmitter는 한번 객체를 만들면 그 객체 내에서 발생하는 이벤트에 한해서 들을 수 있음
 * 다른 emitter에서 발생하는 event는 다른 emitter에서 들을 수 없음
 */ 
const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(callback) {
        this.emit('log', 'started...');
        callback();
        this.emit('log', 'ended!');
    }
}

module.exports.Logger = Logger;
