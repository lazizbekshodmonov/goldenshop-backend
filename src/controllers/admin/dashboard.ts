import { Request, Response } from "express";

export const dashboard = async (req: Request, res: Response) => {
    res.render('home', {
        layout: 'main',
        dashboardActive: true,
        page: 'Dashboard'
    })
}