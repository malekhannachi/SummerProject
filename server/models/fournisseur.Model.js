const mongoose = require("mongoose");
const FournisseurSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    number: { type: Number, default: 0000 },
    email: {
      type: String,
      unique: true,
      index: true,
      lowercase: true,
      required: true,
    },
    isAdmin: { type: Boolean, default: false },
    address: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },
    googleId: { type: String },

    emailToken: { type: String },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Fournisseur", FournisseurSchema);
