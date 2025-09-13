
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';
import authRoutes from './Routes/authroute.js';
import cors from 'cors';
import { requireAuth } from './middleware/authMiddleware.js';
const PORT = process.env.PORT || 3000;

dotenv.config();
const app = express();
connectDB();


// Middleware
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/auth', authRoutes);


// Routes
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});