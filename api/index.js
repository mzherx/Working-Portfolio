const express = require('express');
const path = require('path');
const serverless = require('serverless-http');

const app = express();

// Set EJS and Views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.get('/', (req, res) => res.render('index'));
app.get('/about', (req, res) => res.render('about'));
app.get('/contact', (req, res) => res.render('contact'));
app.get('/faq', (req, res) => res.render('faq'));
app.get('/pricing', (req, res) => res.render('pricing'));
app.get('/testimonial', (req, res) => res.render('testimonial'));
app.get('/portfolio', (req, res) => res.render('portfolio'));
app.get('/portfolio-list', (req, res) => res.render('portfolio-list'));
app.get('/portfolio-single', (req, res) => res.render('portfolio-single'));
app.get('/single-service', (req, res) => res.render('single-service'));

// Export for serverless
module.exports = app;
module.exports.handler = serverless(app);

// 👇 This runs the server locally only
if (require.main === module) {
  app.listen(3000, () => {
    console.log('✅ Server is running at http://localhost:3000');
  });
}