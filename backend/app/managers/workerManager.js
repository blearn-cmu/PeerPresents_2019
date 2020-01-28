const request = require('request-promise-native')

async function somefunc (ctx, next){
    var options = {
        uri: "test",
        json: true
    };
    request(options)
        .then(function (arg){
            console.log('test');
        })

        .catch(function (err){
            console.log(err);
        });
}

module.exports = {
    somefunc
}
