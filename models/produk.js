const mongoose = require('mongoose');

const skemaProduk = new mongoose.Schema({
    image: String,
    name: String,
    title: String,
    price: Number
});

module.exports = mongoose.model('Produk', skemaProduk);