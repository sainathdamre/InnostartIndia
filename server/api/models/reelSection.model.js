import mongoose from "mongoose";

const reelSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
            unique: true,
        },
        video: {
            type: String,
            require: true
        },
        category: {
            type: String,
            default: "uncatogorized"
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
    }, { timestamps: true }
);
const Reel = mongoose.model('post', reelSchema);
export default Reel;