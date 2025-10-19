import mongoose, { Schema } from "mongoose";


const ImpactSchema = new Schema({
    UserId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    total_donations:{
        type: Number,
        default: 0,
    },
    total_claims:{
        type: Number,
    },
    foodSaved:{
        type: Number,
    },
    carbonSaved:{
        type: Number,
    },
    peopleFed:{
        type: Number,
    }

},{ timestamps: true });

export const Impact = mongoose.model('Impact', ImpactSchema);