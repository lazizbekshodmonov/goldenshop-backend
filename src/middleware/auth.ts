import { Request, Response, NextFunction } from "express";

export default function (req: Request, res: Response, next: NextFunction) {
    const isAuth = req.cookies.access_token ? true : false
    if (!isAuth && req.path !== '/login') {
        res.redirect('/login')
    } else {
        next()
    }
    // res.locals.token = req.cookies.access_token ? true : false
}