import mongoose, { Schema } from "mongoose";


const ReportSchema = new Schema({

    donationId:{
        type: Schema.Types.ObjectId,
        ref: 'Donation',
        required: true,
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    reason:{
        type: String,
        required: true,
    },
    description:{
        type: String,
    },
    status:{
        type: String,
        enum: ['Pending', 'Reviewed', 'Resolved'],
        default: 'Pending',
    }

},{timestamps: true});


export const Report = mongoose.model('Report', ReportSchema);