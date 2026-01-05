Book Management Application (MERN Stack)

A full-stack **Book Management Application** built using the **MERN stack** that allows users to perform complete **CRUD operations** (Create, Read, Update, Delete) on books.
The project demonstrates REST API development, database integration, and cloud deployment.

---

## ✨ Features

* 📖 Add new books
* 🔍 View all books
* ✏️ Update book details
* 🗑️ Delete books
* 🌐 RESTful API architecture
* ☁️ Deployed on cloud platforms

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* HTML, CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Tools & Platforms

* Git & GitHub
* MongoDB Atlas
* Render (Backend Deployment)
* Vercel (Frontend Deployment)

---

## 📁 Project Structure

```
book-management-app/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   ├── index.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Backend Setup (Local)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
```

### 2️⃣ Go to backend folder

```bash
cd backend
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Create `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 5️⃣ Start the server

```bash
npm start
```

Server runs on:

```
http://localhost:5000
```

---

## 🌐 API Endpoints

### 📘 Book Routes

| Method | Endpoint         | Description    |
| ------ | ---------------- | -------------- |
| POST   | `/api/books`     | Add a new book |
| GET    | `/api/books`     | Get all books  |
| PUT    | `/api/books/:id` | Update book    |
| DELETE | `/api/books/:id` | Delete book    |

### 📌 Example Request

```json
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "price": 399
}
```

---

## 🖥️ Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🚀 Deployment

* **Backend (Render):**
 https://book-app-backend-mwko.onrender.com/

* **Frontend (Vercel):**
https://book-app-frontend-liard.vercel.app/

---

## 🧪 Testing

* Tested APIs using **Postman**
* Verified CRUD operations successfully

---

## 📸 Screenshots


---

## 📈 Future Improvements

* User authentication (JWT)
* Search and filter books
* Pagination
* Role-based access control

---

## 👩‍💻 Author

**Rashi**
Third Year Student | MERN Stack Learner

---

