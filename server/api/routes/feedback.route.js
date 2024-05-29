import express from 'express';
import { createFeedback } from '../controllers/feedback.controller.js';

const router = express.Router();

router.post('/feedback', createFeedback);



export default router;