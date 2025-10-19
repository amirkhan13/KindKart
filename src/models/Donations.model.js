import mongoose, { Schema } from 'mongoose';

const DonationSchema = new Schema({

    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        
    },
    category:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        default:1
    },
    unit:{
        type:String,
        required:true
    },
    expiryDate:{
        type:Date,
        required:true
    },
    latitue:{
        type:Number,
        required:true
    },
    longitude:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        enum:['available','claimed','collected','expired'],
        default:'available'
    },

    donorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        
    }



},{timestamps:true});

export const Donation = mongoose.model('Donation',DonationSchema);