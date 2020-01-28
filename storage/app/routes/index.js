const Router = require('koa-router'),
      KoaBody = require('koa-body'),
      //{index, readItem, list, createItem, updateItem, removeItem} = require('../controllers/indexController');
     { createEntity, readEntity, updateEntity, deleteEntity } = require('../managers/mongodbManager');

const router = new Router();

//router.put('/:entity/:id',	KoaBody(), updateItem)

router.post('/:entity',     createEntity)
router.get( '/:entity/:id',	readEntity)
router.put( '/:entity/:id', updateEntity)
router.del( '/:entity/:id',	deleteEntity)

module.exports = {
    routes () { return router.routes() },
    allowedMethods () { return router.allowedMethods() }
};
