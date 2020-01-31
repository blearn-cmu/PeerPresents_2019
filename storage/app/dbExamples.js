const {createDB, writeEntity, readEntity} = require('./managers/mongodbManager');

var userModel = {
    _id: 2,
    firstName: "Bryan",
    lastName: "Learn",
    roles: ["presenter", "listener"]
}

writeEntity("user", userModel)
    .then((res) => {
        //console.log(res);
    }).catch((err) => {
        console.error(err);
    })

//readEntity("user", 1)
//    .then((res) => {
//        console.log(JSON.stringify(res))
//    }).catch((err) => {
//        console.error(err);
//    })
