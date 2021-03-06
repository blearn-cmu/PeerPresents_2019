const http = require('http'),
      serve = require('koa-static'),
      Koa = require('koa'),
      cors = require('koa2-cors'),
      config = require('config'),
      err = require('./helpers/error'),
      {routes, allowedMethods} = require('./routes')
      app = new Koa();

app.use(cors());
app.use(err);
app.use(serve('./public'));
app.use(routes());
app.use(allowedMethods());

const server = http.createServer(app.callback()).listen(config.server.port, function (){
    console.log('%s listing at port %d', config.app.name, config.server.port);
})

module.exports = {
    closeServer() {
        server.close()
    }
}
