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
exports.updateProduct = exports.deleteProduct = exports.addProduct = exports.getProductById = exports.getProducts = void 0;
const product_1 = require("../models/product");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield product_1.ProductModel.find();
        const products = [];
        response.forEach(item => {
            products.push({
                id: item._id,
                title: item.title,
                images: item.images,
                price: item.price,
                rating: item.rating,
                slug: item.slug
            });
        });
        res.status(200).json(products);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Internal server error, contact API administrator'
        });
    }
});
exports.getProducts = getProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_1.ProductModel.findById(req.params.id);
        console.log(product);
        if (product == null) {
            res.status(200).json([]);
            return;
        }
        res.status(200).json(product);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getProductById = getProductById;
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield product_1.ProductModel.create(req.body);
        res.status(201).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Internal server error'
        });
    }
});
exports.addProduct = addProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedProject = yield product_1.ProductModel.findByIdAndDelete(req.params.id);
        console.log(deletedProject);
        res.status(200).json(deletedProject === null || deletedProject === void 0 ? void 0 : deletedProject.id);
    }
    catch (error) {
        res.status(404).json({
            msg: 'Product not found!'
        });
    }
});
exports.deleteProduct = deleteProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedProduct = product_1.ProductModel.findByIdAndUpdate(req.params.id);
        res.status(200).json(updatedProduct);
    }
    catch (error) {
        res.status(404).json({
            msg: 'Product not found!'
        });
    }
});
exports.updateProduct = updateProduct;
// export const getDepartments = async (req: Request, res: Response) => {
//     try {
//         const departments = await Department.findAll();
//         res.json(departments);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             msg: 'Internal server error, contact API administrator'
//         });
//     }
// }
//# sourceMappingURL=products.js.map