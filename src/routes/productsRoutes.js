import { Router } from 'express';
import { getProducts, getProductsByID } from '../controllers/productsController.js';
import { get } from 'mongoose';

const router = Router();

router.get('/products', getProducts);

router.get('/products/:productId', getProductsByID);

export default router;
