const mongoose =require("mongoose");
const bcrypt=require("bcrypt");
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },

    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    age:{
        type:String,
        require:true,
    },
    DOB:{
        type:String,
        require:true,
    },
    mobile:{
        type:String,
        require:true,
    }

})


// another method to bcrypt password  


userSchema.pre("save", async function (next){

    const user=this;

    if(!user.isModified("password")){
        next();
    }

    try{
        const salt=await bcrypt.genSalt(10);
        const hash_password=await bcrypt.hash(user.password,salt);
        user.password=hash_password;
    }
    catch(error){
        next(error);
    }

})

userSchema.methods.generateToken=async function (){

    try {
        return jwt.sign({
            userId:this._id.toStirng(),
            email:this.email,
            isAdmin:this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,{
            expiresIn:"30d",
        }
    );
    } catch (error) {
        console.error(error);
    }

};


// define the user schema or the collection name

const User= new mongoose.model("User",userSchema);

module.exports=User;