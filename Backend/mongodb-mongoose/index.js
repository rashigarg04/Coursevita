const mongoose = require("mongoose");
const Book = require("./models/Book"); // ✅ correct

mongoose.connect(
    "mongodb+srv://rashigarg807_db_user:Rashig2109@cluster0.vlwh71n.mongodb.net/bookDB?retryWrites=true&w=majority"
)
    .then(async () => {
        console.log("MongoDB Connected Successfully ✅");

        const book = new Book({
            title: "MongoDB with Mongoose",
            author: "Rashi Garg",
            price: 499
        });

        await book.save();
        console.log("Book saved successfully 📚");
    })
    .catch(err => console.log("MongoDB Error ❌", err));
