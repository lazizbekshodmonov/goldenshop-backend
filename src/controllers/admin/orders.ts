import { Request, Response } from "express"

export const orders = async (req: Request, res: Response) => {
    res.render('orders', {
        layout: 'main',
        page: 'Orders',
        orderActive: true
    })
}