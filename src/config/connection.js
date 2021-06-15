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
                console.log("Sucesso ao conectar no MongoDB")
            })
            .catch((error) => {
                console.log(`Erro ao conectar no mongoDB: ${error}`)
            })
    }
}

module.exports = new Connection();