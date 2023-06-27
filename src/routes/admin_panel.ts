import { Router } from 'express';
import { loginGet, loginPost } from '../controllers/admin/auth'
import { dashboard } from '../controllers/admin/dashboard';
import { getAdmins, getAdminOne, addAdmin, updateAdmin, deleteAdmin } from '../controllers/admin/admins';
import { getProducts, getProductOne, deleteProduct } from '../controllers/admin/products';
import { orders } from '../controllers/admin/orders';
import auth from '../middleware/auth';

const router = Router();

// router.use(auth)
// auth routes
router.get('/login', loginGet)
router.post('/login', loginPost)
router.get('/dashboard', dashboard)
// admins routes
router.get('/dashboard/admins', getAdmins)
router.get('/dashboard/admins/:id', getAdminOne)
router.post('/dashboard/admins/add', addAdmin)
router.put('/dashboard/admins/:id', updateAdmin)
router.post('/dashboard/admins/delete/:id', deleteAdmin)
// products routes
router.get('/dashboard/products', getProducts)
// router.post('/dashboard/products/add', products)
router.get('/dashboard/products/:id', getProductOne)
// router.put('/dashboard/products/:id', products)
router.post('/dashboard/products/delete/:id', deleteProduct)
// orders routes
router.get('/dashboard/orders', orders)
router.post('/dashboard/orders/add', orders)
router.get('/dashboard/orders/:id', orders)
router.put('/dashboard/orders/:id', orders)
router.delete('/dashboard/orders/:id', orders)

export default router;