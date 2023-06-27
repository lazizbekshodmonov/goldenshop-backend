import { Request, Response } from "express";
import { ProductModel } from "../../models/product_model";
import type { Product } from "./types";

export const getProducts = async (req: Request, res: Response) => {
    try {
        const response: Product[] = await ProductModel.find().lean()
        const productList = response.map((item, i) => {
            return {
                url: '/dashboard/products/' + item._id,
                index: i + 1,
                ...item
            }
        })
        res.render('products', {
            layout: 'main',
            page: 'Products',
            productActive: true,
            products: productList
        })
    } catch (error) {
        console.log(error);
    }
}

export const getProductOne = async (req: Request, res: Response) => {
    try {
        const response = await ProductModel.findOne({ _id: req.params.id }).lean()
        console.log(response);
        res.render('product', {
            layout: 'main',
            productActive: true,
            page: 'Admins',
            product: response
        })
    } catch (error) {
        console.log(error);

    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    await ProductModel.findByIdAndDelete(req.params.id)
    res.redirect('/dashboard/products')
}