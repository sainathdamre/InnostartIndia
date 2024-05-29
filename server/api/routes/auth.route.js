import express from 'express';
import { signIn, signUp, sendConnectionRequest, acceptConnectionRequest, getPendingConnectionRequests, getAllUsers } from '../controllers/auth.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/signup', signUp);
router.post('/login', verifyToken, signIn);
router.post('/send-connection-request', verifyToken, sendConnectionRequest);
router.post('/accept-connection-request', verifyToken, acceptConnectionRequest);
router.get('/pending-connection-requests', verifyToken, getPendingConnectionRequests);
router.get('/users', getAllUsers);


export default router;