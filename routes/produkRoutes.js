const express = require('express')
const router = express.Router()
const Produk = require('../models/produk')

// POST: Tambah data (single atau array)
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

// GET: Ambil semua produk
router.get('/', async (req, res) => {
  try {
    const data = await Produk.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT: Update produk berdasarkan ID
router.put('/:id', async (req, res) => {
  try {
    const update = await Produk.findByIdAndUpdate(req.params.id, {$set: req.body}, { new: true });
    res.json(update);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE: Hapus produk berdasarkan ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Produk.findByIdAndDelete(req.params.id);
    res.json(deleted);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
