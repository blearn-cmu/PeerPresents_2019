const Router = require('koa-router'),
      KoaBody = require('koa-body'),
      {index, readItem, list, createItem, updateItem, removeItem} = require('../controllers/indexController');

const router = new Router();

router.get('/:entity',		list)
router.get('/:entity/:id',	readItem)
router.put('/:entity/:id',	KoaBody(), updateItem)
router.delete('/:entity/:id',	removeItem)

module.exports = {
    routes () { return router.routes() },
    allowedMethods () { return router.allowedMethods() }
};
