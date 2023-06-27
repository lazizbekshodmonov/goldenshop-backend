import { Request, Response } from "express";
import { AdminModel } from "../../models/admin_model";
import bcrypt from "bcrypt"
import type { Admin } from "./types";

export const getAdmins = async (req: Request, res: Response) => {
    try {
        const response: Admin[] = await AdminModel.find().lean()
        const admins = response.map((item, i) => {
            return {
                url: '/dashboard/admins/' + item._id,
                index: i + 1,
                ...item
            }
        })
        console.log(admins);

        res.render('admins', {
            layout: 'main',
            adminActive: true,
            page: 'Admins',
            admins
        })
    } catch (error) {
        console.log(error);
    }
}

export const addAdmin = async (req: Request, res: Response) => {
    const hashPassword = await bcrypt.hash(req.body.password, 10)
    const adminData: Admin = {
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        role: req.body.role,
        email: req.body.email,
        password: hashPassword
    }
    const admin = await AdminModel.create(adminData)
    res.status(200).json(admin)
}

export const getAdminOne = async (req: Request, res: Response) => {
    try {
        const response = await AdminModel.findOne({ _id: req.params.id }).lean()
        console.log(response);
        res.render('admin', {
            layout: 'main',
            adminActive: true,
            page: 'Admins',
            admin: response
        })
    } catch (error) {
        console.log(error);

    }
}

export const updateAdmin = async (req: Request, res: Response) => {
    res.render('admins')
}

export const deleteAdmin = async (req: Request, res: Response) => {
    await AdminModel.findByIdAndDelete(req.params.id)
    res.redirect('/dashboard/admins')
}






