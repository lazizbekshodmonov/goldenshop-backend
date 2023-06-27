"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const ReviewSchema = new mongoose_1.Schema({
    author: String,
    message: String,
    rating: { type: Number },
    createdDate: { type: Date, default: Date.now }
});
const ProducSchema = new mongoose_1.Schema({
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
});
ProducSchema.set('toJSON', {
    transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
});
exports.ProductModel = (0, mongoose_1.model)('Products', ProducSchema);
//# sourceMappingURL=product_model.js.map