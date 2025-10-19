import mongoose, { Schema } from 'mongoose';

const NotificationSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    },
    type: {
    type: String,
    enum: [
      "DonationCreated",
      "ClaimRequested",
      "ClaimApproved",
      "PickupAssigned",
      "DonationPickedUp",
      "DonationDelivered",
      "BadgeEarned",
      "PointsUpdated",
      "General"
    ],
    required: true
  },
  isRead:{
    type: Boolean,
    default: false,
  },
  userId:{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }

}, { timestamps: true });

export const Notification = mongoose.model('Notification', NotificationSchema);