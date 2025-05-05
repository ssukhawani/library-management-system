require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes

app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello4 from the API!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
