import { Request, Response } from "express";
import { ProductModel } from "../../models/product_model"
interface Products {
    id: any,
    title?: string,
    images: string[],
    price?: number,
    rating?: number,
    slug?: string
}
export const getProducts = async (req: Request, res: Response) => {
    console.log(req.headers.authorization?.split(' '));
    try {
        const response = await ProductModel.find()
        const products: Products[] = []
        response.forEach(item => {
            products.push({
                id: item._id,
                title: item.title,
                images: item.images,
                price: item.price,
                rating: item.rating,
                slug: item.slug
            })
        })
        res.status(200).json(products)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Internal server error, contact API administrator'
        })
    }
}
export const getProductById = async (req: Request, res: Response) => {
    try {
        const product = await ProductModel.findById(req.params.id)
        console.log(product);
        if (product == null) {
            res.status(200).json(['Product not found!'])
            return
        }
        res.status(200).json(product)
    } catch (error) {
        console.log(error);
    }
}
export const addProduct = async (req: Request, res: Response) => {
    try {
        const product = await ProductModel.create(req.body)
        res.status(201).json(product)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Internal server error'
        })
    }
}
export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const deletedProject = await ProductModel.findByIdAndDelete(req.params.id)
        res.status(200).json({ id: deletedProject?.id })
    } catch (error) {
        res.status(404).json({
            msg: 'Product not found!'
        })
    }
}
export const updateProduct = async (req: Request, res: Response) => {
    try {
        const updatedProduct = ProductModel.findByIdAndUpdate(req.params.id)
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(404).json({
            msg: 'Product not found!'
        })
    }
}
// export const getDepartments = async (req: Request, res: Response) => {
//     try {
//         const departments = await Department.findAll();
//         res.json(departments);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             msg: 'Internal server error, contact API administrator'
//         });
//     }
// }

