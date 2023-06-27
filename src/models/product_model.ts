import { Schema, model } from "mongoose";

const ReviewSchema = new Schema({
    author: String,
    message: String,
    rating: { type: Number },
    createdDate: { type: Date, default: Date.now }
});

const ProducSchema = new Schema({
    title: { type: String, require: true },
    images: [String],
    price: { type: Number },
    rating: { type: Number },
    active: Boolean,
    characteristics: [
        {
            key: { type: String, require: true },
            value: { type: String, require: true }
        }
    ],
    description: { type: String },
    reviews: [ReviewSchema],
    slug: String
}, {
    timestamps: true
})
ProducSchema.set('toJSON', {
    transform(doc, ret) {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
    }
})

export const ProductModel = model('Products', ProducSchema)