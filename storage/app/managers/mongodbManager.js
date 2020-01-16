"use strict";

const db_conf = require('../ppdb_conf.json')
const MongoClient = require('mongodb').MongoClient;
const url = `mongodb://${db_conf.ip}/${db_conf.name}`;


module.exports = {

    /**
     * Get all records from memory DB
     * @return {Promise}
     */
    getAll: function getAllFromDb(ent) {
        return new Promise((resolve, reject) => {
            /* TODO */
            MongoClient.connect(url, function(err, db){
                var cursor = db.collection(ent).find();
                
                cursor.each(function(err, item){
                    // do stuff on item
                });
            });
        });
    },

    /**
     * Get record by id from memory DB
     * @param id
     * @return {Promise}
     */
    getById: function getIdFromDb(ent, id) {
        return new Promise((resolve, reject) => {
            /* TODO */

        });
    },

    /**
     * Add new record to memory DB
     * @param name
     * @return {Promise}
     */
    setNewId: function setNewIdToDb(ent, name) {
        let length = db.length;
        db.push({id: length, name: name});
        return module.exports.getById(length);
    },

    /**
     * Update record into memory DB
     * @param id
     * @param name
     * @return {Promise}
     */
    updateId: function updateIdToDb(ent, id, name) {
        db[parseInt(id)] = {id: parseInt(id), name: name};
        return module.exports.getById(id);
    },

    /**
     * Remove record from memory DB
     * @param id
     * @return {Promise}
     */
    removeId: function removeIdInDb(ent, id) {
        return new Promise((resolve, reject) => {
            /* TODO */
        });
    }
};
