const mongoose = require("mongoose");
const Book = require("./models/Book");

mongoose.connect(
    "mongodb+srv://rashigarg807_db_user:Rashig2109@cluster0.vlwh71n.mongodb.net/bookDB"
)
    .then(async () => {
        console.log("MongoDB Connected Successfully ✅");

        const book = new Book({
            title: "Mongoose Basics",
            author: "Rashi Garg",
            price: 399,
            publishedYear: 2026
        });

        await book.save();
        console.log("Book saved successfully 📚");
    })
    .catch(err => console.log("MongoDB Error ❌", err));
