import Feedback from "../models/feedback.model.js";

export const createFeedback = async (req, res, next) => {
    const {name, email, subject, data} = req.body;
     if(!name || !email || !subject || !data){
         return res.status(400).json({
             error: "All fields are required"
         });
     }
     try {
         const newFeedback = new Feedback({
             name,
             email,
             subject,
             data
         });
         await newFeedback.save();
         res.status(200).json({
             success: true,
             message: "Feedback submitted successfully"
         });
        
     } catch (error) {
         return res.status(400).json({
             error: error.message
         });
        
     }
    }