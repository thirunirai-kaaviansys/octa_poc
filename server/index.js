const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, './public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public', 'index.html'));
});

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is running on port 3001`);
});