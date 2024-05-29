import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true,
        match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    subject :{
        type : String,
        required : true
    },
    data :{
        type : String,
        required : true
    }
},
{timestamps: true},
);

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;