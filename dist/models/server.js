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
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const config_1 = __importDefault(require("../config"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_session_1 = __importDefault(require("express-session"));
const connect_flash_1 = __importDefault(require("connect-flash"));
const connection_1 = __importDefault(require("../db/connection"));
const rest_api_1 = __importDefault(require("../routes/rest_api"));
const admin_panel_1 = __importDefault(require("../routes/admin_panel"));
const express_handlebars_1 = require("express-handlebars");
const hbs = (0, express_handlebars_1.create)({
    defaultLayout: 'main',
    extname: '.hbs'
});
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, connection_1.default)();
                console.log('Database connected');
            }
            catch (error) {
                console.error(error, 'Error connecting to DB');
            }
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)(':method - :url - :status - DATE: :date[clf]'));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('public'));
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, cookie_parser_1.default)());
        this.app.use((0, express_session_1.default)({
            secret: 'Golden_shop',
            resave: false,
            saveUninitialized: false
        }));
        this.app.use((0, connect_flash_1.default)());
        this.app.engine('hbs', hbs.engine);
        this.app.set('view engine', 'hbs');
        this.app.set('views', './views');
    }
    // [:response-time ms]
    routes() {
        this.app.use(config_1.default.apiPaths.products, rest_api_1.default);
        this.app.use(config_1.default.apiPaths.admin, admin_panel_1.default);
    }
    listen() {
        this.app.listen(config_1.default.port, () => {
            console.log(`Server up and running at url: http://localhost:${config_1.default.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map