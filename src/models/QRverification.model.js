import mongoose from "mongoose";

const QRverificationSchema = new mongoose.Schema({

    claimId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Claim',
        required: true,
    },
    donationId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Donation',
        required: true,
    },
    qrId:{
        type: String,
        required: true,
    },
    qrCode:{
        type: String,
        required: true,
    },
    isScanned:{
        type: Boolean,
        default: false,
    },
    ScannedAt:{
        type: Date,
    },
    ScannedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',    
        required: true
    }

}, { timestamps: true });


export const QRverification = mongoose.model('QRverification', QRverificationSchema);