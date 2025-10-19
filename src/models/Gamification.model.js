import mongoose, { Schema } from "mongoose";

const GamificationSchema = new Schema({

    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    points_earned:{
        type: Number,
        default: 0,
    },
    streak:{
        type: Number,
        default: 0,
    },
    badges_earned:{
        type: [String],
    },
    last_activity:{
        type: Date,
    }

},{ timestamps: true });


export const Gamification = mongoose.model('Gamification', GamificationSchema);