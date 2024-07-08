const express = require('express')
const router = express.Router()
const ShoppingCart = require('../models/carts')

// Carrito de compras


// Agarrar uno

// Crear uno

router.post('/', async (req, res) => {

    const shoppingCart = new ShoppingCart({
        user_id: req.body.user_id,
        items: req.body.items
    })

    try {
        const newCart = await shoppingCart.save()
        res.status(201).json(newCart)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})


// Agregar a uno

router.post('/:id', getCart, async (req, res) => {

    const newCartItems = {
        productId: req.body.productId,
        quantity: req.body.quantity,
        size: req.body.size
    }

    try {

        const shoppingCart = res.shoppingCart;

        const alreadyExists = shoppingCart.items.find(item => item.productId == req.body.productId);
        if (alreadyExists) {
            alreadyExists.quantity += req.body.quantity
        } else {
            shoppingCart.items.push(newCartItems);
        }

        const updatedCart = await shoppingCart.save();
        res.status(201).json(updatedCart)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }

})


// Fetch el carrito :3

router.get('/:id', getCart, async (req, res) => {
    res.send(res.shoppingCart)
})


// Agarrar ID

async function getCart(req, res, next) {

    let shoppingCart
    try {

        shoppingCart = await ShoppingCart.findOne({ user_id: req.params.id })
        if (shoppingCart == null) {
            return res.status(404).json({ message: "No se encontró un carrito." })
        }
        res.shoppingCart = shoppingCart
        next()
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }


}

module.exports = router;
