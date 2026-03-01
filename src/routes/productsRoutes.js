import { Router } from 'express';
import { getProducts, getProductsByID, createProduct } from '../controllers/productsController.js';
import { get } from 'mongoose';

const router = Router();

router.get('/products', getProducts);
router.get('/products/:productId', getProductsByID);
router.post('/products', createProduct);

export default router;
