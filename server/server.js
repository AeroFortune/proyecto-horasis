/* eslint-disable no-undef */
require('dotenv').config()

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

// var fs = require('fs');
// var http = require('http');
// var https = require('https');
// var privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
// var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');

// var credentials = {key: privateKey, cert: certificate};


mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

db.on('error', (error) => console.error(error) );
db.once('open', () => console.log('Connected to Database! Running...') );


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');
const cartsRouter= require('./routes/carts');
const authRouter= require('./routes/auth');
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/carts', cartsRouter);
app.use('/auth/', authRouter);



// Ruta para manejar el formulario
// app.post('/api/form', (req, res) => {
//     const { name, food, phone, email } = req.body;
//     console.log('Form data received:', { name, food, phone, email });
//     res.json({ message: 'Form data received successfully' });
// });

// var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);

// httpServer.listen(8080, () => console.log(`Server running on port 8080`));
// httpsServer.listen(8443, () => console.log(`Server running on port 8443`));




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
