// Import the necessary modules
const express = require('express');

// Create an instance of an Express app
const app = express();

// Define a port to listen to
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server with error handling
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

server.on('error', (error) => {
  console.error(`Error starting server: ${error.message}`);
});
