
//jshint esversion:6
var express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));




app.get("/", function(req, res){
    res.sendFile(__dirname + "/home.html");
    
});
app.get("/home.html", function(req, res){
    res.sendFile(__dirname + "/home.html");
    
});
app.get("/stud.html", function(req, res){
    res.sendFile(__dirname + "/stud.html");
    
});
app.get("/novel.html", function(req, res){
    res.sendFile(__dirname + "/novel.html");
    
});


app.get("/css", function(req, res){
    res.sendFile(__dirname + "/home.css");
    
});
app.get("/a", function(req, res){
    res.sendFile(__dirname + "/node_modules/bootstrap/dist/css/bootstrap.min.css");
    
});
app.get("/b", function(req, res){
    res.sendFile(__dirname + "/node_modules/font-awesome/css/font-awesome.min.css");
    
});
app.get("/c", function(req, res){
    res.sendFile(__dirname + "/node_modules/bootstrap-social/bootstrap-social.css");
    
});
app.get("/d", function(req, res){
    res.sendFile(__dirname + "/C:\Users\Krishna\Desktop\public\node_modules\fontawesome-free-5.13.1-web");
    
});
app.get("/e", function(req, res){
    res.sendFile(__dirname + "/node_modules/jquery/dist/jquery.slim.min.js");

});
app.get("/f", function(req, res){
    res.sendFile(__dirname + "/node_modules/popper.js/dist/umd/popper.min.js");

});
app.get("/g", function(req, res){
    res.sendFile(__dirname + "/node_modules/bootstrap/dist/js/bootstrap.min.js");

});
app.get("/logo", function(req, res){
    res.sendFile(__dirname + "/book.ico");

});

app.use(express.static(__dirname + 'public')); 
//Serves all the request which includes /images in the url from Images folder
app.use('/images', express.static(__dirname + '/Images'));
app.use('/css', express.static(__dirname + '/home.css'));
app.use('/node_modules', express.static(__dirname + '/node_modules'))
app.use('/comics', express.static(__dirname + '/comics'));
app.use('/novels', express.static(__dirname + '/novels'));
app.use('/study', express.static(__dirname + '/study'));
app.use('/noimages', express.static(__dirname + '/noimages'));
app.use('/acimages', express.static(__dirname + '/acimages'));




var server = app.listen(9000);
console.log("server started on port 9000");

