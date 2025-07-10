// app.js
const express = require('express');
const app = express();
const path = require('path');

// Setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static assets like CSS, JS, images
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => res.render('index'));
app.get('/about', (req, res) => res.render('about'));
app.get('/service', (req, res) => res.render('service'));
app.get('/faq', (req, res) => res.render('faq'));
app.get('/portfolio', (req, res) => res.render('portfolio'));
app.get('/portfolio-list', (req, res) => res.render('portfolio-list'));
app.get('/portfolio-single', (req, res) => res.render('portfolio-single'));
app.get('/contact', (req, res) => res.render('contact'));

// 404 fallback
app.use((req, res) => res.status(404).send("Page not found"));

// Start
app.listen(3000, () => console.log("🚀 Running on http://localhost:3000"));