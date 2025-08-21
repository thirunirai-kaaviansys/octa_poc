const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

const NODE_ENV = process.env.NODE_ENV || ['DEV'];

app.use(cors());
app.use(express.json());

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, '../my-app/dist')));

if (['DEV'].includes(NODE_ENV)) {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../my-app/dist', 'index.html'));
  });
}

app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});