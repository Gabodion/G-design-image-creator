const asyncHandler = require("express-async-handler");
const User = require("../models/userModel")

const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;

    const userExists = await User.findOne({ email });
    
    if (userExists){
        res.status(400)
        throw new Error("User Already Exists");
    }
    const user = await User.create({
        username,
        email,
        password,

    });

        if (user){
            res.status(201).json({
                id: user.id,
                username: user.username,
                email: user.email,
            });
        }else{
            res.status(400)
            throw new Error("Error Occured! ");
        }

   
});

module.exports = {registerUser};