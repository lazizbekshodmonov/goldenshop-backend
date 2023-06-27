"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(req, res, next) {
    const isAuth = req.cookies.access_token ? true : false;
    if (!isAuth && req.path !== '/login') {
        res.redirect('/login');
    }
    else {
        next();
    }
    // res.locals.token = req.cookies.access_token ? true : false
}
exports.default = default_1;
//# sourceMappingURL=auth.js.map