"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.getProductOne = exports.getProducts = void 0;
const product_model_1 = require("../../models/product_model");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield product_model_1.ProductModel.find().lean();
        const productList = response.map((item, i) => {
            return Object.assign({ url: '/dashboard/products/' + item._id, index: i + 1 }, item);
        });
        res.render('products', {
            layout: 'main',
            page: 'Products',
            productActive: true,
            products: productList
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getProducts = getProducts;
const getProductOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield product_model_1.ProductModel.findOne({ _id: req.params.id }).lean();
        console.log(response);
        res.render('product', {
            layout: 'main',
            productActive: true,
            page: 'Admins',
            product: response
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getProductOne = getProductOne;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield product_model_1.ProductModel.findByIdAndDelete(req.params.id);
    res.redirect('/dashboard/products');
});
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=products.js.map