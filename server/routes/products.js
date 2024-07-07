const express = require('express')
const router = express.Router()
const Product = require('../models/products')



// PRODUCTS
// Searching One
router.get('/', async (req, res) => {
    try {
        const searchQuery = req.query.name || ""; // Obtener el parámetro de consulta 'name'
        const regex = new RegExp(searchQuery, 'i'); // 'i' para hacer la búsqueda case insensitive

        const products = await Product.find({ name: { $regex: regex } });

        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Getting One
router.get('/:id', getProduct, (req, res) => {
    res.send(res.product)
})  
  
// Creating One
router.post('/', async (req, res) => {
    const product = new Product({
        id_producto: req.body.id_producto,
        image_url: req.body.image_url,
        price: req.body.price,      
        name: req.body.name,
        type: req.body.type,
        sizes: req.body.sizes,  
    })

    try {
        
        const newProduct = await product.save()
        res.status(201).json(newProduct)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }


})
// Updating One
router.patch('/:id', getProduct, async (req, res) => {
    if (req.body.image_url) {
        res.product.image_url = req.body.image_url
    } if (req.body.name != null){
        res.product.name = req.body.name
    } if (req.body.type != null){       
        res.product.type = req.body.type    
    } if (req.body.sizes != null){
        res.product.sizes = req.body.sizes
    } 

    try {
        const updatedProduct = await res.product.save()
        res.json(updatedProduct)
    } catch (err) {
        res.status(400).json({message: err.message          })
    }
    
})
// Deleting One
router.delete('/:id', getProduct, async (req, res) => {
    try {
        await res.product.remove()
        res.json({message: "Deleted successfully. "})
    } catch (error) {
        res.status(500).json( {message: error.message})
    }
})
// Getting IDs
async function getProduct(req, res, next){

    let product
    try {   
        product = await Product.findById(req.params.id)
        if (product == null){
            return res.status(404).json( {message: "Cannot find product."} )
        }
    } catch (err) {
        return res.status(500).json( {message: err.message} )    
    }

    res.product = product
    next()
}

module.exports = router;

