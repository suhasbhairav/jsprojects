var events = require('events');

var eventEmitter = new events.EventEmitter();


var eventHandler = function simpleFunction(){
    console.log('This is a line');
    eventEmitter.emit('eventReceiver');
}

eventEmitter.on('eventReceiver', function(){
    console.log('Event Received');
});

eventEmitter.on('eventName', eventHandler);

eventEmitter.emit('eventName');