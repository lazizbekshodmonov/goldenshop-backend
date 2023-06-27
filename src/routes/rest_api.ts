import { Router } from 'express';
import { addProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controllers/rest_api/products_controller';
const router = Router();

router.get('/products', getProducts);
router.post('/products', addProduct);
router.get('/products/:id', getProductById);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;