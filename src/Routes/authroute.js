import express from 'express';
const router = express.Router();
import { register, login, getProfile } from '../Controllers/authController.js';
import { requireAuth } from '../middleware/authMiddleware.js';


router.post('/register', register);
router.post('/login', login);
router.get('/profile', requireAuth, getProfile);

export default router;
