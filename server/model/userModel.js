const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter your Name"]
    },
    profession: {
        type: String
    },
    links: {
        type: Object
    },
    profilePhoto: {
        type: String
    },
    phone: {
        type: String
    },
    introduction: {
        type: Object
    },
    resumeLink: {
        type: String
    },
    workExperience: {
        type: Object
    },
    education:{
        type: Object
    },
    skills:{
        type: Object
    },
    projects: {
        type: Object
    },
    email: {
        type: String,
        required: [true, "Please Enter Email to proceed"],
        unique: true
    }
})

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;