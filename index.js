require('dotenv').config();

const express = require('express')
const produkRoutes = require('./routes/produkRoutes')
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Atlas connected'))
  .catch(err => console.error(err));


app.use(express.json())
app.use('/api/produk', produkRoutes);

app.listen(PORT, ()=> console.log(`server berjalan di http://localhost:${PORT}`))