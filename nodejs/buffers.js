var buffer = new Buffer.alloc(10);
buffer.write("1");
buffer.write("2");
console.log(buffer.length);


var buffer2 = new Buffer.alloc(20);
buffer2.write("20");
buffer2.write("30");
console.log(buffer2.length);