var fs = require('fs');
var data = fs.readFileSync('f1.txt');
console.log(data.toString());

fs.readFile('f1.txt', function (err, data){
    if(err) return console.error(err);

    console.log(data.toString());
});

fs.readFile('f1.txt', function(err, data){
    if(err) return console.error(err);
    console.log(data.toString());
});

fs.readFile('f1.txt', function(err, data){
    if(err) return console.error(err);
    console.log(data.toString());
});

false.readFile('f1.txt', function(err, data){
    if(err) return console.error(err);

    console.log(data.toString());
})