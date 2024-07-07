const mongoose = require('mongoose')
const crypto = require('node:crypto')

userSchema = new mongoose.Schema({

    active: { type: Boolean, required: true },
    name: { type: String, required: true },
    last_name: { type: String, required: true, },
    email: { unique: true, type: String, required: true },
    profile_img: { type: String },
    hash: { type: String, },
    salt: { type: String, },
    height: { type: Number, },
    weight: { type: Number, },
    birth_date: { type: String, required: true },
    creation_date: { type: Date, required: true },
    last_modified: { type: Date, required: true },
    // shopping_cart: {  }

}) 

userSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
}

userSchema.methods.validPassword = function(password){
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash == hash;
}

module.exports = mongoose.model('User', userSchema)
