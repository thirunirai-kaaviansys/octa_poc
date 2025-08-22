const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

// Serve static files from client_build
app.use(express.static(path.join(__dirname, 'client_build')));

// Handle SPA routing
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client_build', 'index.html'));
});


const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});