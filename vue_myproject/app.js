var express = require("express");
var mongoose = require("mongoose");
var url = require('url');
var app = express();


var Book = require('./schemas/book.js')
mongoose.connect("mongodb://127.0.0.1/bss");

app.get("/books",function(req,res){
    var page = url.parse(req.url,true).query.page || 1;
    var pagesize = url.parse(req.url,true).query.pagesize || 20;
    var sortby = url.parse(req.url,true).query.sortby || "price";
    var sortdirection = url.parse(req.url,true).query.sortdirection || 1;
     var searchobj = {};
    Book.count(searchobj,function(err,count){
        Book.find(searchobj).sort({[sortby]:sortdirection}).skip(pagesize * (page - 1)).limit(pagesize).exec(function(err,docs){
            res.json({
                "results":docs,
                "count":count
            })
        })
    })

    // Book.count(searchobj,function(err,count){
    //     Book.find(searchobj).sort({[sortby]:sortdirection}).skip(pagesize*(page-1)).limit(pagesize).exec(function(err,docs){
    //         res.json({
    //             "results":docs
    //         })
    //     })
    // })
})


app.listen(3000,function(){
    console.log("did")
})