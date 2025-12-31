const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category"
    },
    itemName: {
      type: String,
      trim: true
    },
    price: {
      type: Number,
      min: 0
    },
    qty: {
      type: Number,
      default: 1,
      min: 1
    },
    imageUrl: {
      type: String,
      default: null
    },
    isAvailable: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

// Clear any cached model
if (mongoose.models.Item) {
  delete mongoose.models.Item;
}

module.exports = mongoose.model("Item", itemSchema);