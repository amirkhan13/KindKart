import mongoose, { Schema } from "mongoose";

const ChatSchema = new Schema({

    messgae:{
        type: String,
        required: true,
    },
    sentAt:{
        type: Date,
    },
    isRead:{
       type:Boolean,
         default:false,
    },
    sender_id:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    reciever_id:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }

},{ timestamps: true });


export const Chat = mongoose.model('Chat', ChatSchema);