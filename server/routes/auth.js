const express = require('express')
const router = express.Router()
const User = require('../models/users')
const ShoppingCart = require('../models/carts')

const jwt = require('jsonwebtoken')
require('dotenv').config()

// Registro

router.post('/register', async (req, res) => {

    try {

        await User.findOne({ email: req.body.email.toLowerCase() }).then(
            user => {
                if (user) {
                    return res.json("E-mail ya en uso.")
                }
            }
        );

        let user = new User({
            active: false,
            name: req.body.name.trim(),
            last_name: req.body.name.trim(),
            email: req.body.email.toLowerCase().trim(),
            height: req.body.height,
            weight: req.body.weight,
            birth_date: req.body.birth_date,
            creation_date: new Date().toJSON(),
            last_modified: new Date().toJSON()
        });

        if (user.name == "" || user.last_name == "" || user.email == "" || user.birth_date == null || req.body.password == "" || req.body.verPassword == "") {
            return res.json({
                status: "Error!",
                message: "Campos vacios, por favor llenarlos."
            })
        } else if (!/^[a-zA-Z]*$/.test(user.name)) {
            return res.json({
                status: "Error!",
                message: "Nombre invalido."
            })
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(user.email)) {
            return res.json({
                status: "Error!",
                message: "Correo con caracteres invalidos."
            })
        } else if (req.body.password < 8) {
            return res.json({
                status: "Error!",
                message: "Contraseña debil."
            })
        } else if (req.body.password != req.body.verPassword) {
            return res.json({
                status: "Error!",
                message: "Las contraseñas no coinciden."
            })

        }

        user.setPassword(req.body.password.trim());

        const newUser = await user.save()
        console.log(newUser)

        const newShoppingCart = new ShoppingCart({
            user_id: newUser._id,  // Asignar el _id del nuevo usuario
            items: []  // Puedes inicializar el carrito con items si es necesario
        });

        await newShoppingCart.save();


        return res.status(201).json(newUser)

    } catch (err) {
        console.log(err)
        res.status(400).json({ message: err.message })
    }

})

// Login

router.post('/login', async (req, res) => {

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(req.body.email)) {
        res.status(401).json({
            status: "Error!",
            message: "Correo con caracteres invalidos o que no existe."
        })
        return;
    }

    try {
        User.findOne({ email: req.body.email }).then(
            user => {
                if (user) {
                    if (user.validPassword(req.body.password)) {

                        // Generar token
                        const token = jwt.sign({ email: user.email }, process.env.ACCESS_TOKEN_SECRET);
                        // const refreshToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)

                        return res.status(201).send({ message: "Bienvenido al sistema.", token: token, })
                    } else {
                        return res.status(401).send({ message: "Credenciales incorrectas." })
                    }

                } else {
                    return res.status(404).send({ message: "Usuario no encontrado." })
                }
            }
        );

    } catch (err) {
        res.status(400).json({ message: err.message })
    }

})

// Autenticar Token

function authenticateToken(req, res, next) {

    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "Acceso no autorizado." });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, email) => {
        if (err) {
            return res.status(403).json({ message: "Token inválido.", message2: err.message, message3: req.headers['authorization'].split(' ')[1] });
        }
        req.user = email; // Guardar el usuario decodificado en req.user
        next();
    });

}


// Conseguir datos del perfil con Token

router.get('/profile', authenticateToken, async (req, res) => {
    try {
        const user = await User.findOne({ email: req.user.email.toString() });

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado.", message2: "req.user.email" });
        }

        res.json(user); // Devolver el perfil del usuario encontrado
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
