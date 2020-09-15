var express = require("express");

var app = express();

app.set('view engine', 'jade');

app.get('/',function(req,res){

    console.log("OK path");

});

var server = app.listen(3000, function(){

    console.log("server is already running.");
    
});