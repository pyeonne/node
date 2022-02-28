const EventEmitter = require('events');
const emitter = new EventEmitter();
const callback1 = args => {
    console.log('first callback -', args);
};
emitter.on('pyeonne', callback1);

emitter.on('pyeonne', args => {
    console.log('second callback -', args);
});

emitter.emit('pyeonne', { message: 1 });
emitter.emit('pyeonne', { message: 2 });
// emitter.removeListener('pyeonne', callback1); // 특정한 콜백 함수를 제거함
emitter.removeAllListeners(); // 모든 콜백 함수를 제거함
emitter.emit('pyeonne', { message: 3 });
