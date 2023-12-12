const mongoose = require('mongoose');

async function connectToMongo() {
  await mongoose.connect('mongodb://127.0.0.1:27017/g27').
  then(()=>{console.log("connect to mongo")});
}

module.exports={connectToMongo}