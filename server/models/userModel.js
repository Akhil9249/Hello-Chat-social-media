const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    emailOrPhoneNumber: {   
        type: mongoose.Schema.Types.Mixed,
        required: [true, "Email or Phone number is required"],
        unique: true,
        validate: {
            validator: function (v) {
                return typeof v === "number" || typeof v === "string";
            },
            message: (props) => `${props.value} is neither a number nor a string!`,
        },
    },
    fullName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
    posts: [{
        image: String,
        like:Number
    }],
    followers: [],
    following:[]
});

module.exports = {
    Users: mongoose.model("Users", userSchema),
};
