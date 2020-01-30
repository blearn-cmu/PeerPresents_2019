"use strict";

const db_conf = require('../../ppdb_conf.js')
const MongoClient = require('mongodb').MongoClient;
const user = encodeURIComponent(db_conf.mongo.user)
const pwd = encodeURIComponent(db_conf.mongo.pwd)
const authMechanism = 'DEFAULT'
const url = `mongodb://${user}:${pwd}@${db_conf.mongo.ip}:${db_conf.mongo.port}/${db_conf.mongo.name}?authMechanism=${authMechanism}`;

// Create a new MongoDB client instance
const client = new MongoClient(url);

function connect_auth() {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(db_conf.name);
        return dbo;
    });
}

function createDB(){
    console.log(url);
    console.log(db_conf);
    client.connect(function(err, db) {
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
