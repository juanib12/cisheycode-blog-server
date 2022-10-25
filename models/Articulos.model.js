

const mongoose = require("mongoose")

const Articulos = mongoose.model("Articulos", {
    user: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    image: {
        type: Array,
        required: false,
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    resume: {
        type: String,
        required: true,
    },
    createtime: {
        type: String,
        required: true,
    }
})

module.exports = Articulos