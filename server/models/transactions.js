const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({          

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true
    },      
    order_items: [{
        productId: {
            unique: true,   
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
        price: {
            type: String,
            required: true,
            ref: 'Product'
        },
        size:{
            type: String,
            default: "L"
        }, 
        quantity: { 
            type: Number,
            default: 1
        }
    }],
    payment_id: {
        type: String, required: true,       
    },
    total: { 
        type: String, required: true 
    },
    creation_date: { 
        type: Date, required: true 
    },
    modification_date: { 
        type: Date, required: true 
                },
    
}) 

module.exports = mongoose.model('OrderDetails', orderSchema)
