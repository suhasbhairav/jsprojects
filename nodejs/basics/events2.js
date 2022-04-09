var events = require('events');

var eventEmitter = new events.EventEmitter();

var handler1 = function simpleFunction(){
    console.log('Line1');
    eventEmitter.emit('event2');
}

eventEmitter.on('event1', handler1);

eventEmitter.on('event2', function(){
    console.log('Another line');
});

eventEmitter.emit('event1');