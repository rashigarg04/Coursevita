import { useState } from "react";
import axios from "axios";

function AddBookForm({ onBookAdded }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/api/books", { name })
      .then(response => {
        onBookAdded();  // Refresh book list
        setName("");
      })
      .catch(error => {
        console.error("Error adding book:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
  <input
    type="text"
    placeholder="Enter book name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    required
    className="flex-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  />
  <button
    type="submit"
    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
  >
    Add
  </button>
</form>

  );
}

export default AddBookForm;
