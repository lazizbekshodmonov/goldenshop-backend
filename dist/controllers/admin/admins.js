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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAdmin = exports.updateAdmin = exports.getAdminOne = exports.addAdmin = exports.getAdmins = void 0;
const admin_model_1 = require("../../models/admin_model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const getAdmins = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield admin_model_1.AdminModel.find().lean();
        const admins = response.map((item, i) => {
            return Object.assign({ url: '/dashboard/admins/' + item._id, index: i + 1 }, item);
        });
        console.log(admins);
        res.render('admins', {
            layout: 'main',
            adminActive: true,
            page: 'Admins',
            admins
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAdmins = getAdmins;
const addAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const hashPassword = yield bcrypt_1.default.hash(req.body.password, 10);
    const adminData = {
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        role: req.body.role,
        email: req.body.email,
        password: hashPassword
    };
    const admin = yield admin_model_1.AdminModel.create(adminData);
    res.status(200).json(admin);
});
exports.addAdmin = addAdmin;
const getAdminOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield admin_model_1.AdminModel.findOne({ _id: req.params.id }).lean();
        console.log(response);
        res.render('admin', {
            layout: 'main',
            adminActive: true,
            page: 'Admins',
            admin: response
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAdminOne = getAdminOne;
const updateAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render('admins');
});
exports.updateAdmin = updateAdmin;
const deleteAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield admin_model_1.AdminModel.findByIdAndDelete(req.params.id);
    res.redirect('/dashboard/admins');
});
exports.deleteAdmin = deleteAdmin;
//# sourceMappingURL=admins.js.map