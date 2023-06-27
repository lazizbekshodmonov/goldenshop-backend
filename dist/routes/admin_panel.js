"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/admin/auth");
const dashboard_1 = require("../controllers/admin/dashboard");
const admins_1 = require("../controllers/admin/admins");
const products_1 = require("../controllers/admin/products");
const orders_1 = require("../controllers/admin/orders");
const router = (0, express_1.Router)();
// router.use(auth)
// auth routes
router.get('/login', auth_1.loginGet);
router.post('/login', auth_1.loginPost);
router.get('/dashboard', dashboard_1.dashboard);
// admins routes
router.get('/dashboard/admins', admins_1.getAdmins);
router.get('/dashboard/admins/:id', admins_1.getAdminOne);
router.post('/dashboard/admins/add', admins_1.addAdmin);
router.put('/dashboard/admins/:id', admins_1.updateAdmin);
router.post('/dashboard/admins/delete/:id', admins_1.deleteAdmin);
// products routes
router.get('/dashboard/products', products_1.getProducts);
// router.post('/dashboard/products/add', products)
router.get('/dashboard/products/:id', products_1.getProductOne);
// router.put('/dashboard/products/:id', products)
router.post('/dashboard/products/delete/:id', products_1.deleteProduct);
// orders routes
router.get('/dashboard/orders', orders_1.orders);
router.post('/dashboard/orders/add', orders_1.orders);
router.get('/dashboard/orders/:id', orders_1.orders);
router.put('/dashboard/orders/:id', orders_1.orders);
router.delete('/dashboard/orders/:id', orders_1.orders);
exports.default = router;
//# sourceMappingURL=admin_panel.js.map