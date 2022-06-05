const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const designSchema = mongoose.Schema(
    {
        category: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "user",
        },
    },
    {
        timestamps: true,
    }
);

const Design = mongoose.model("Design", designSchema);

module.exports = Design;