import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { errorHandler } from "../utils/error.js";

export const signUp = async (req, res, next) => {
    const { fName, lName, number, email, password } = req.body;
    if (!fName || !lName || !number || !email || !password) {
        return res.status(400).json({
            error: "All fields are required"
        });
    }
    try {
        const saltRounds = 12;
        const hashPass = await bcryptjs.hash(password.toString(), saltRounds);

        const newUser = new User({
            fName,
            lName,
            number,
            email,
            password: hashPass
        });
        await newUser.save();
        return res.json("success");

    } catch (error) {
        return res.json("error")

    }
}

export const signIn = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password || email === '' || password === '') {
        next(errorHandler(400, 'email and password are required'));
    }

    try {
        const validUser = await User.findOne({ email });
        if (!validUser) {
            return res.status(401).json({ message: "Invalid email " });
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const { password: pass, ...rest } = validUser._doc;

        const token = jwt.sign({ id: validUser._id }, "innostarttoken");
        res.status(200).cookie('access_token', token, {
            httpOnly: true,
        }).json(rest);

    } catch (error) {
        next(error);
    }
}

export const sendConnectionRequest = async (req, res, next) => {
    const { senderId, receiverId, message } = req.body;
    try {
        const sender = await User.findById(senderId);
        const receiver = await User.findById(receiverId);

        if (!sender || !receiver) {
            return res.status(404).json({ message: "Sender or receiver not found" });
        }

        const existingRequest = sender.connections.find(connection => connection.userId.toString() === receiverId.toString());
        if (existingRequest) {
            return res.status(400).json({ message: "Connection request already exists" });
        }

        sender.connections.push({ userId: receiverId, status: 'pending' });
        await sender.save();

        res.status(201).json({ message: "Connection request sent successfully" });

    } catch (error) {
        next(error);
    }
}

export const acceptConnectionRequest = async (req, res, next) => {
    const { senderId, receiverId } = req.body;
    try {
        const receiver = await User.findById(receiverId);
        const sender = await User.findById(senderId);

        if (!receiver) {
            return res.status(404).json({ message: "Receiver not found" });
        }

        const connection = receiver.connections.find(connection => connection.userId.toString() === senderId.toString());
        if (!connection || connection.status !== 'pending') {
            return res.status(404).json({ message: "Connection request not found or already accepted" });
        }

        connection.status = 'accepted';
        await sender.save();
        await receiver.save();

        res.status(200).json({ message: "Connection request accepted successfully" });

    } catch (error) {
        next(error);
    }
}



export const getPendingConnectionRequests = async (req, res, next) => {
    try {
 
        const user = await User.findById(req.userId).populate({
            path: 'connections',
            match: { status: 'pending' },
            select: 'userId status'
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const pendingRequests = user.connections.filter(connection => connection.status === 'pending');

        res.status(200).json(pendingRequests);
    } catch (error) {
        next(error);
    }
};


export const getAllUsers = async (req, res, next) => {
    const userId = req.params.user;
    try {
        const users = await User.find({userId}, '-password'); 

        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

