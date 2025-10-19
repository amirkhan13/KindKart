import mongoose, { Schema } from "mongoose";


const RatingsSchema = new Schema({
    donationId:{
        type: Schema.Types.ObjectId,
        ref: 'Donation',
        required: true,
    },
    rating_value:{
        type: Number,
    },
    feedback:{
        type: String,
    },
    ratedBy:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    ratedTo:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }

}, { timestamps: true });



export const Ratings = mongoose.model('Ratings', RatingsSchema);