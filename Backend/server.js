const express = require("express");
const app = express();
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Database connect
const db = new sqlite3.Database("./books.db");

// GET all books
app.get("/api/books", (req, res) => {
  db.all("SELECT * FROM books", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});


// ADD book
app.post("/api/books", (req, res) => {
  const { name } = req.body;

  db.run("INSERT INTO books (name) VALUES (?)", [name], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: this.lastID, name });
  });
});




// UPDATE book
app.put("/api/books/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  db.run("UPDATE books SET name = ? WHERE id = ?", [name, id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ updated: this.changes });
  });
});

// DELETE book
app.delete("/api/books/:id", (req, res) => {
  const { id } = req.params;

  db.run("DELETE FROM books WHERE id = ?", id, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ deleted: this.changes });
  });
});

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));

