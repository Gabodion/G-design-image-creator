const asyncHandler = require("express-async-handler");
const Design = require("../models/designModels");

const getDesign = asyncHandler(async (req, res) =>{
    const designs = await Design.find()
    res.json(designs)
});


module.exports = { getDesign }


