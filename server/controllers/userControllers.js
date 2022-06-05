const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

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
                token: generateToken(user.id)
            });
        }else{
            res.status(400)
            throw new Error("Error Occured! ");
        }

    
});


const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))){
        res.json({
            id: user.id,
            username: user.username,
            email: user.email, 
            token: generateToken(user.id)
        })

    }else{
        res.status(400)
        throw new Error("Invalid Email or Password")
    }

    
});

module.exports = {registerUser, authUser};