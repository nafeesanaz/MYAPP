var express = require("express");
var app = express();
var fs = require('fs');


app.get('/getUsers', function (req, res) {
        fs.readFile(__dirname + "/" + "WebInterface.v1.json", 'utf8', function (err, data){
        console.log(data);
        res.end(data); 
    });
});

app.get('/getUserid', function (req, res) {
    fs.readFile(__dirname + "/" + "WebInterface.v1.json", 'utf8', function (err, data){
    console.log(data);
    res.end(data); 
});
});

app.delete('/deleteUsersproducts', function (req, res) {
    fs.readFile(__dirname + "/" + "WebInterface.v1.json", 'utf8', function (err, data){
    console.log(data);
    res.end(data); 
});

app.patch('/patchUsersproducts', function (req, res) {
    fs.readFile(__dirname + "/" + "WebInterface.v1.json", 'utf8', function (err, data){
    console.log(data);
    res.end(data); 
});

app.update('/updateUsersproducts', function (req, res) {
    fs.readFile(__dirname + "/" + "WebInterface.v1.json", 'utf8', function (err, data){
    console.log(data);
    res.end(data); 
});

app.trace('/traceUsersproducts', function (req, res) {
    fs.readFile(__dirname + "/" + "WebInterface.v1.json", 'utf8', function (err, data){
    console.log(data);
    res.end(data); 
});
});

});
});
});





var server = app.listen(3000, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API", host, port)
})

