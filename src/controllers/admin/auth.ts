import { Request, Response } from "express";
import bcrypt from "bcrypt"
import { generateJWTtoken } from "../../services/jwt";
import { AdminModel } from "../../models/admin_model";
import type { Admin } from "./types";

export const loginGet = async (req: Request, res: Response) => {
    if (req.cookies.access_token) {
        res.redirect('/dashboard')
        return
    }
    res.render('login', {
        layout: 'auth',
        loginError: req.flash('loginError')
    })
    console.log(req.flash('loginError'));
}

export const loginPost = async (req: Request, res: Response) => {
    console.log(req.body);
    const existAdmin: Admin | null = await AdminModel.findOne({ email: req.body.email })
    if (existAdmin) {
        console.log(existAdmin);
        const isPasswordCompare = await bcrypt.compare(req.body.password, existAdmin.password)
        if (isPasswordCompare) {
            const token = generateJWTtoken(existAdmin._id, existAdmin.email)
            console.log(token);
            res.cookie('access_token', token)
            res.redirect('/dashboard')
        } else {
            req.flash("loginError", 'The password was entered incorrectly!')
            res.redirect('/login')
        }
    } else {
        req.flash("loginError", 'User not fount with this email!')
        res.redirect('/login')
    }
}

