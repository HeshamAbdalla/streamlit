
require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const twitchRoutes = require('./routes/twitch');

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use('/api/twitch', twitchRoutes);

// Health check

app.get('/health', (req, res) => {
  res.status(200).send('Server is healthy');
});

// Routes
const Port = process.env.PORT || 5000;

app.listen(Port, () => {
  console.log(`Server running on port ${Port}`);
});
