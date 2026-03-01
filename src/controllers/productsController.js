import { Product } from "../models/product.js";

export const getProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products);
};

export const getProductsByID = async (req, res) => {
    const { productId } = req.params;
    const product = await Product.findById(productId);

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(product);
}

export const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
};