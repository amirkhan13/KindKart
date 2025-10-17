import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        enum:['donor','admin','receiver'],
        default:'donor'
    },
    user_type:{
        type:String,
        enum:['individual','organization'],
        default:'individual'
    },
    location:{
        address:{
            type:String,
            trim:true

        },
        city: String,
        state: String,
        pincode:String,
        coordinates:{
            type:[Number], // [longitude, latitude]
            index: '2dsphere'
        }
    },
    verification_status:{
        type:String,
        enum:['pending','verified','rejected'],
        default:'pending'
    },
    avatar:{
        type:String
    },
    points:{
        type:Number,
        default:0
    },
    badges:{
        type:[String],
    },
    refreshToken:{
        type:String
    }

},{timestamps: true});


userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
})

userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function() {
   return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            name:this.name,
            role:this.role
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function() {
     return jwt.sign(
        {
            _id:this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}




export const User = mongoose.model("User", userSchema);