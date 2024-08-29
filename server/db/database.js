const mongoose =require("mongoose");

const URL=process.env.MONGO_URL;


const database= async ()=>{
    try {
        await mongoose.connect(URL);
        console.log("connection create");
    } catch (error) {
        console.error("connection failed");
        process.exit(0);
    }
}

module.exports=database;