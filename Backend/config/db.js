const mongoose = require("mongoose");

const connectingDB = async () => {
    try{
        const connection = await mongoose.connect(
            "mongodb+srv://juan09:mintic2022@cluster0.bzwqpoz.mongodb.net/?retryWrites=true&w=majority", {
                useNewUrlParser: true,
                useUnifiedTopology: true,

            });
            const url = `${connection.connection.host}:${connection.connection.port}`;
            console.log(`MogoDB conectado en: ${url}`);
    }catch(error){
        console.log(`error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectingDB;