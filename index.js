const express = require('express')
const mongoose = require('mongoose')
const produkRoutes = require('./routes/produkRoutes')

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/belajarApi')
.then(()=> console.log('MongoDB connected'))
.catch(err => console.log(err))

app.use(express.json())
app.use('/api/produk', produkRoutes);

app.listen(PORT, ()=> console.log(`server berjalan di http://localhost:${PORT}`))