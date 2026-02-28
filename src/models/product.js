import { Schema, model } from 'mongoose';

const CATEGORY = ['books', 'electronics', 'clothing', 'other'];

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price : {
      type: Number,
      required: true,
    },
    category: {
        type: String,
        enum: CATEGORY,
        required: true,
      default: 'other',
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Product = model('Product', productSchema);