import { useEffect, useState } from "react";
import AddBookForm from "./AddBookForm";

export default function BookList() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/books")
    const data = await response.json();
    setBooks(data);
  } catch (error) {
    console.error("Error fetching books:", error);
  }
};


  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
        Book List
      </h2>

      <AddBookForm onBookAdded={fetchBooks} />

      <ul className="mt-4 divide-y divide-gray-200">
        {books.map((book) => (
          <li key={book.id} className="py-2 text-gray-700">
            📘 {book.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
