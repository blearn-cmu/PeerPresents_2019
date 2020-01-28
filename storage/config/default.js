let package = require('../package')
module.exports = {
    app: {
        name: package.name,
        version: package.version
    },
    server: {
        port: 3030
    }
};
