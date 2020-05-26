const mongoose = require('mongoose');

// Newer Version
//const mongoURI = "mongodb+srv://Pabs1314:Dtgfu1314@testdb-sf2bp.mongodb.net/test?retryWrites=true&w=majority";
const mongoURI = "mongodb://Pabs1314:Dtgfu1314@testdb-shard-00-00-sf2bp.mongodb.net:27017,testdb-shard-00-01-sf2bp.mongodb.net:27017,testdb-shard-00-02-sf2bp.mongodb.net:27017/test?ssl=true&replicaSet=TestDB-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, { useNewUrlParser: true}).then(() => {
    console.log("Connected to MongoDB successfully");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);


module.exports = {
    mongoose
};
