// Create web server
// 1. Create a web server
// 2. Create a route for the home page
// 3. Create a route for the about page
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 2. Create a route for the home page

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
}
);
