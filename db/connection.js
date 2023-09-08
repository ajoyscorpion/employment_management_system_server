const mongoose = require('mongoose')
const connectionString = process.env.DATABASE

mongoose.connect(connectionString,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("Mongo db Atlas Connected Successfully");
}).catch((err)=>{
    console.log(`Mongo db Connection Failed : ${err}`);
})