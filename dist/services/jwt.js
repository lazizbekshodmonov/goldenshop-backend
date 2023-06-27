"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJWTtoken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const generateJWTtoken = (userID, email) => {
    const token = jsonwebtoken_1.default.sign({ userID, email }, config_1.default.jwtConfig.secret_cey, { expiresIn: '1d' });
    return token;
};
exports.generateJWTtoken = generateJWTtoken;
//# sourceMappingURL=jwt.js.map