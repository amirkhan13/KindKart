import mongoose, { Schema } from "mongoose";


const ClaimSchema = new Schema({
    status:{
        type:String,
        enum:['pending','approved','picked Up','delivered','rejected','cancelled'],
        default:'pending'
    },
     qr_code: { 
    type: String, 
    required: true,
    ref: "Donation" 
  },
    pickupTime:{
        type:Date,
    },
    pickUpLocation:{
        type:String,
        trim:true
    },
    claimedAt:{
        type:Date,
    },
    verifiedAt:{
        type:Date,
    },
    donationId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Donation',
        required:true
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }

},{timestamps:true});


export const Claim = mongoose.model('Claim',ClaimSchema);