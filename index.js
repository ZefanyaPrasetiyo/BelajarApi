require('dotenv').config();

const express = require('express')
const produkRoutes = require('./routes/produkRoutes')
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {console.log('MongoDB Atlas connected')
    app.listen(PORT, ()=> console.log(`server berjalan di http://localhost:${PORT}`))
    app.use(express.json())
    app.use('/api/produk', produkRoutes);
  }
)
  .catch(err => console.error(err));


