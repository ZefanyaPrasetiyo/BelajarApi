const mongoose = require('mongoose');

const skemaProduk = new mongoose.Schema({
    image: String,
    name: {
        type : String,
        required : true,
        unique : true
    },
    title: String,
    price: Number
});

module.exports = mongoose.model('Produk', skemaProduk);