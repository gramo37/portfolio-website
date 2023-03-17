const mongoose = require("mongoose");

const connectToDatabase = async () => {
    console.log("Connection requested")
    await mongoose.connect(process.env.URI).then(()=>{
        console.log("Db connected");
    })
}

module.exports = connectToDatabase;

// mongodb://127.0.0.1:27017/prasanna-gramopadhye