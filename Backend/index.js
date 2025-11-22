const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// import routes
const bookRoutes = require('./routes/books');

// use routes
app.use('/api/books', bookRoutes);

app.get('/', (req, res) => {
    res.send("Backend API Running...");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
