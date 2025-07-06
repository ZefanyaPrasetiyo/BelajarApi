const express = require('express')
const router = express.Router()
const Produk = require('../models/produk')

router.post('/', async (req, res) => {
  try {
    let result;

    if (Array.isArray(req.body)) {
      result = await Produk.insertMany(req.body);
    } else {
      const produk = new Produk(req.body);
      result = await produk.save();
    }

    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


module.exports = router;