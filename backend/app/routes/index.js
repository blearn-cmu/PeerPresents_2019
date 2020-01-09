const Router = require('koa-router'),
      KoaBody = require('koa-body'),
      {index, getId, list, createItem, updateItem, removeItem} = require('../controllers/indexController');

const router = new Router();

router.get('/model',		list)
router.get('/model/:id',	getId)
router.post('/model/',		KoaBody(), createItem)
router.put('/model/:id',	KoaBody(), updateItem)
router.delete('/model/:id',	removeItem)

module.exports = {
    routes () { return router.routes() },
    allowedMethods () { return router.allowedMethods() }
};
