const asyncHandler = require("express-async-handler");
const Design = require("../models/designModels");

const getDesign = asyncHandler(async (req, res) =>{
    const designs = await Design.find({user: req.user.id})
    res.json(designs)
});


const createDesigns = asyncHandler(async (req, res) => {
    const { category, img, description } = req.body;

    if (!category || !img || !description){
        res.status(400)
        throw new Error("PLease Fill all the Fields")
    }else{
        const design = new Design ({user: req.user.id, category, img, description });

        const createdDesign = await design.save();
        res.status(201).json(createdDesign)
    }
})

module.exports = { getDesign, createDesigns };


