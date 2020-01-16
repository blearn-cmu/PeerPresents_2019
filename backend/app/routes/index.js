const Router = require('koa-router'),
      KoaBody = require('koa-body'),
      {handle_work_request} = require('../controllers/indexController');

const router = new Router();

router.post('work_request', handle_work_request)

module.exports = {
    routes () { return router.routes() },
    allowedMethods () { return router.allowedMethods() }
};
