import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema(
  {
    plan: {
      type: String,
      enum: ["starter", "featured", "premium"],
      required: true,
    },

    business: String,
    name: String,
    phone: String,
    email: String,
    city: String,
    experience: String,

    services: String,
    portfolio: String,
    reason: String,

    paymentId: String,
    orderId: String,
    amount: Number,

    status: {
      type: String,
      default: "paid",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Listing ||
  mongoose.model("Listing", ListingSchema);
