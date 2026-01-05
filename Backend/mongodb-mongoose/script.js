const API_URL = "http://localhost:5000/api/books";

/* GET BOOKS */
function getBooks() {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById("bookList");
            list.innerHTML = "";

            data.forEach(book => {
                const li = document.createElement("li");
                li.innerHTML = `
          ${book.title} - ${book.author} - ₹${book.price}
          <button onclick="deleteBook('${book._id}')">❌</button>
        `;
                list.appendChild(li);
            });
        });
}

/* ADD BOOK */
function addBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const price = document.getElementById("price").value;

    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, author, price })
    })
        .then(() => {
            getBooks(); // 🔁 refresh UI
        });
}

/* DELETE BOOK */
function deleteBook(id) {
    fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })
        .then(() => {
            getBooks(); // 🔁 refresh UI
        });
}

/* LOAD DATA ON PAGE LOAD */
getBooks();
