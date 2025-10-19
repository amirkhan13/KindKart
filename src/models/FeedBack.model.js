import mongoose, { Schema } from "mongoose";

const FeedBackSchema = new Schema({

    donationId:{
        type: Schema.Types.ObjectId,
        ref: 'Donation',
        required: true,
    },
    message:{
        type: String,
        required: true,
    },
    feedbackBy:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true, 
    }


},{ timestamps: true });

export const FeedBack = mongoose.model('FeedBack', FeedBackSchema);