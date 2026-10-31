// models/Listing.js
import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema(
  {
    plan: {
      type: String,
      enum: ["starter", "featured", "premium"],
      required: true,
    },

    // 👇 add these to support the dynamic profile page
    slug: { type: String, unique: true, index: true },
    rating: Number,
    reviewCount: Number,
    weddingsPlanned: Number,

    business: String,
    name: String,
    phone: String,
    email: String,
    city: String,
    experience: String,

    // models/Listing.js
heroImage: String,
galleryImages: [String],

    services: String,
    portfolio: String,
    reason: String,

    testimonials: [
      {
        quote: String,
        couple: String,
      },
    ],

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

// ✅ Hook goes HERE — after schema, before model compilation
ListingSchema.pre("save", function (next) {
  if (this.isModified("name") || !this.slug) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }
  next();
});

// ✅ Model registered LAST
export default mongoose.models.Listing ||
  mongoose.model("Listing", ListingSchema);