"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModel = void 0;
const mongoose_1 = require("mongoose");
const adminSchema = new mongoose_1.Schema({
    firstName: String,
    email: { type: String, require: true },
    role: String,
    lastName: String,
    password: { type: String, require: true }
});
exports.AdminModel = (0, mongoose_1.model)('Admins', adminSchema);
//# sourceMappingURL=admin_model.js.map