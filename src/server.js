import express from 'express';
import 'dotenv/config';
import cors from 'cors';

import { errorHandler } from './middleware/errorHandler.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { connectMongoDB } from './db/connectMongoDB.js';
import { logger } from './middleware/logger.js';

const app = express();
const PORT = process.env.PORT ?? 3030;

app.use(logger); 
app.use(express.json());
app.use(cors());


// 404 — якщо маршрут не знайдено
app.use(notFoundHandler);

// Error — якщо під час запиту виникла помилка
app.use(errorHandler);

await connectMongoDB();
app.listen(PORT, () => {
  console.log(`Server is running on port /localhost:${PORT}`);
});
