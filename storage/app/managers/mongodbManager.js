"use strict";

const db_conf = require('../../ppdb_conf.js')
const MongoClient = require('mongodb').MongoClient;
const user = encodeURIComponent(db_conf.mongo.user)
const pwd = encodeURIComponent(db_conf.mongo.pwd)
const authMechanism = 'DEFAULT'
const url = `mongodb://${user}:${pwd}@${db_conf.mongo.ip}:${db_conf.mongo.port}/${db_conf.mongo.name}?authMechanism=${authMechanism}`;

const options = { useUnifiedTopology: true };

// Create a new MongoDB client instance
const client = new MongoClient(url, options);

/* Creates the database named in db_conf, if not already created.
   An empty collection named "init" is created in the database.
*/
function createDB(){
    console.log(url);
    console.log(db_conf);
    var _pc = client.connect()
    _pc.then((db) => {
        const dbo = db.db(db_conf.name);

        // create collections
        dbo.createCollection('user')
            .catch((err) => {
                console.error(err);

            });
        dbo.createCollection('question')
            .catch((err) => {
                console.error(err);
            });
        dbo.createCollection('response')
            .catch((err) => {
                console.error(err);
            });
        dbo.createCollection('course')
            .catch((err) => {
                console.error(err);
            });
        dbo.createCollection('session')
            .catch((err) => {
                console.error(err);
            });
        dbo.createCollection('presentation')
            .catch((err) => {
                console.error(err);
            });
        dbo.createCollection('upvote')
            .catch((err) => {
                console.error(err);
            });
        dbo.createCollection('react')
            .catch((err) => {
                console.error(err);
            });
        dbo.createCollection('star')
            .catch((err) => {
                console.error(err);
            });
        dbo.createCollection('tag')
            .then((col) => {
                console.log("created all collections");
                db.close();
            })
            .catch((err) => {
                console.error(err);
                db.close();
            });

        //var _pu = userCol.insertOne({_id: 0})
        //_pu.then((col) => {
        //    console.log(col);
        //}).catch((err) => {
        //    console.error(err);
        //})
        
    }).catch((err) => {
        console.error(err);
        db.close();
    })
}

/* Takes a collection name (string) and model (json).
   Inserts the model into the collection
*/
async function writeEntity(collection, model){
    return new Promise((resolve, reject) => {
        // TODO
        // validate collection name
        // validate model
    
        var _pc = client.connect();
        _pc.then((db) => {
            // get collection
            var dbo = db.db(db_conf.name);
            const col = dbo.collection(collection)
        
            // insert model
            var _pInsert = col.insertOne(model)
            _pInsert.then((res) => {
                console.log(`Inserted model to ${collection}.`)
                db.close();
                resolve(res);
            }).catch((err) => {
                console.error(err);
                db.close();
                reject(err);
            })
        }).catch((err) => {
            console.error(err);
            db.close();
            reject(err);
        });
    })
}

async function readEntity(collection, id){
    return new Promise((resolve, reject) => {
        // TODO
        // validate collection name

        var _pConnect = client.connect();
        _pConnect.then((db) => {
            // get collection
            var dbo = db.db(db_conf.name);
            const col = dbo.collection(collection)

            // find model by id
            var _pInsert = col.findOne({_id: id})
            _pInsert.then((res) => {
                console.log(`Found model with id: ${res._id}`)
                db.close();
                resolve(res);
            }).catch((err) => {
                console.error(err);
                db.close();
                reject(err);
            })
        }).catch((err) => {
            console.error(err);
                db.close();
                reject(err);
        });
    })
}

module.exports = {
    createDB,
    writeEntity,
    readEntity
};
