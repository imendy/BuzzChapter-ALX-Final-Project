
import express from 'express';
import { subscribeNewsletter } from '../controllers/newsletter.controller.js'; // Import the controller function for handling newsletter subscription

const router = express.Router();


router.post('/subscribe', subscribeNewsletter);

export default router;
