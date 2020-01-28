"use strict";

const db_conf = require('../../ppdb_conf.js')
const MongoClient = require('mongodb').MongoClient;
const url = `mongodb://${db_conf.mongo.ip}:${db_conf.mongo.port}/${db_conf.mongo.name}`;
//const url = "mongodb://"+db_conf.ip+":"+db_conf.port+"/"+db_conf.name;

console.log(url);

function createDB(){
    console.log(url);
    console.log(db_conf);
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(db_conf.name);
        dbo.createCollection("init", function(err, res){
            if (err) throw err;
            console.log(`Created database: ${db_conf.mongo.name}`);
            db.close();
        });
    });
}

module.exports = {
    createDB
};
