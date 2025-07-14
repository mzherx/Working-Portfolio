const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'assets' folder
app.use(express.static(path.join(__dirname, 'assets')));

// Routes for HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/error', (req, res) => {
  res.sendFile(path.join(__dirname, 'error.html'));
});

app.get('/portfolio', (req, res) => {
  res.sendFile(path.join(__dirname, 'portfolio.html'));
});

app.get('/portfolio-single', (req, res) => {
  res.sendFile(path.join(__dirname, 'portfolio-single.html'));
});

app.get('/pricing', (req, res) => {
  res.sendFile(path.join(__dirname, 'pricing.html'));
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'services.html'));
});

app.get('/services-details', (req, res) => {
  res.sendFile(path.join(__dirname, 'service-details.html'));
});

app.get('/faq', (req, res) => {
  res.sendFile(path.join(__dirname, 'faq.html'));
});

app.get('/testimonial', (req, res) => {
  res.sendFile(path.join(__dirname, 'testimonial.html'));
});

app.get('/blog-grid', (req, res) => {
  res.sendFile(path.join(__dirname, 'blog-grid.html'));
});

app.get('/single-service', (req, res) => {
  res.sendFile(path.join(__dirname, 'single-service.html'));
});

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'error.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
