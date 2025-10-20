const express = require('express'); // Innitialize ng express
const mongoose = require('mongoose'); // Innitialize ng mongoose
const dotenv = require('dotenv'); // Initialize ng dotenv

dotenv.config(); // 

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

mongoose.connect(
  `mongodb+srv://${process.env.USER_NAME_DB}:${process.env.USER_PASSWORD_DB}@sampledb.devtvnm.mongodb.net/?retryWrites=true&w=majority&appName=sampleDb`
)
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('MongoDB connection error:', err));


app.post("/api/products", (req, res) => {
    
})