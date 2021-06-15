const mongoose = require('mongoose')

class Connection {
    constructor() {
        this.dataBaseConnectionMongoDB();
    }

    dataBaseConnectionMongoDB() {
        this.mongoDBConnection = mongoose.connect("mongodb://localhost/nodejs", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        .then(() => {
            console.log("Success MongoDB connection.")
        })
        .catch((error) => {
            console.log(`Error MongoDB connection: ${error}`)
        })
    }
}

module.exports = new Connection();