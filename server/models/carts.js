const mongoose = require('mongoose')

const shoppingCartSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true
    },
    items: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
        size: {
            type: String,
            default: "L"
        },
        quantity: {
            type: Number,
            default: 1
        }
    }],
})

module.exports = mongoose.model('ShoppingCart', shoppingCartSchema)
