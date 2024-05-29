import mongoose from "mongoose";

const connectionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String,
        enum: ['pending', 'accepted'],
        default: 'pending'
    }
});

const userSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    image: {
        type: String,
        default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    },
    number: {
        type: String,
        required: true,
        unique: true,
        match: [/^[0-9]{10}$/, 'Please fill a valid 10 digit mobile number']
    },
    password: {
        type: String,
        required: true
    },
    connections: [connectionSchema] 
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
