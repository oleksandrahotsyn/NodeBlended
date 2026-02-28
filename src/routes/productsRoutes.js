import { Router } from 'express';
import { Product } from '../models/product.js';
import { getProducts, getProductsByID } from '../controllers/productsController.js';
import { get } from 'mongoose';

const router = Router();

router.get('/products', getProducts);

router.get('/products/:productId', getProductsByID);

export default router;
