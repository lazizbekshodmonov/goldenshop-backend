"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_controller_1 = require("../controllers/rest_api/products_controller");
const router = (0, express_1.Router)();
router.get('/products', products_controller_1.getProducts);
router.post('/products', products_controller_1.addProduct);
router.get('/products/:id', products_controller_1.getProductById);
router.put('/products/:id', products_controller_1.updateProduct);
router.delete('/products/:id', products_controller_1.deleteProduct);
exports.default = router;
//# sourceMappingURL=rest_api.js.map