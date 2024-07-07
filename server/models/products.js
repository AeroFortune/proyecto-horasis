const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    image_url: {
        type: String,
        required: true
    },      
    name: {
        type: String,
        required: true  
    },
    price: {
        type: String,
        required: true
    },
    type: {
        type: Array,
        require: true
    },
    sizes: {
        type: Array,
        require: true
    },      
}) 

module.exports = mongoose.model('Product', productsSchema)
