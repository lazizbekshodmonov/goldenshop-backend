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
exports.loginPost = exports.loginGet = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_1 = require("../../services/jwt");
const admin_model_1 = require("../../models/admin_model");
const loginGet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.cookies.access_token) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login', {
        layout: 'auth',
        loginError: req.flash('loginError')
    });
    console.log(req.flash('loginError'));
});
exports.loginGet = loginGet;
const loginPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const existAdmin = yield admin_model_1.AdminModel.findOne({ email: req.body.email });
    if (existAdmin) {
        console.log(existAdmin);
        const isPasswordCompare = yield bcrypt_1.default.compare(req.body.password, existAdmin.password);
        if (isPasswordCompare) {
            const token = (0, jwt_1.generateJWTtoken)(existAdmin._id, existAdmin.email);
            console.log(token);
            res.cookie('access_token', token);
            res.redirect('/dashboard');
        }
        else {
            req.flash("loginError", 'The password was entered incorrectly!');
            res.redirect('/login');
        }
    }
    else {
        req.flash("loginError", 'User not fount with this email!');
        res.redirect('/login');
    }
});
exports.loginPost = loginPost;
//# sourceMappingURL=auth.js.map