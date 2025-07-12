import express from 'express';
import { allOrders, updateStatus, placedOrder, placedOrderStripe, placedOrderRazorpay, userOrders, verifyStripe } from '../controllers/orderController.js';
import  adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js'


const orderRouter = express.Router();

// Admin Features
orderRouter.post('/list', adminAuth ,allOrders);
orderRouter.post('/status', adminAuth ,updateStatus);


// Payment features
orderRouter.post('/place', authUser ,placedOrder);
orderRouter.post('/stripe', authUser, placedOrderStripe);
orderRouter.post('/razorpay', authUser, placedOrderRazorpay);

// User Features
orderRouter.post('/userorders', authUser, userOrders);

// verify payment
orderRouter.post('/verifyStripe', authUser, verifyStripe);


export default orderRouter; 
