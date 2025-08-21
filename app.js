    const express = require('express');
    const path = require('path');
    const app = express();
    const port = 3000; // You can choose any available port

    app.use(express.static('public')); // Serve static files from the 'public' directory
    // Define a route for GET requests to the root URL ('/')
    app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    app.get('/about', (req, res) => {
      res.sendFile(path.join(__dirname, '/about.html'));
    });

    app.get('/home', (req, res) => {
      res.sendFile(path.join(__dirname, '/home.html'));
    });

    // Start the server and listen on the specified port
    app.listen(port, () => {
      console.log(`Express app listening at http://localhost:${port}`);
    });