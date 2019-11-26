const express = require("express");

const app = express();

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

//라우터루트

const productsRouter = require("./api/routes/products");

const orderRouter = require("./api/routes/orders")

const userRouter = require("./api/routes/users");

//DB 연결

const db_url = "mongodb+srv://Rhian:1234@cluster0-h6nuf.mongodb.net/test?retryWrites=true&w=majority"


mongoose.connect(db_url, {useUnifiedTopology: true, useNewUrlParser: true})
        .then(() => console.log("db connected ... "))
        .catch(err => console.log(err.message));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


app.use("/orders", orderRouter);

app.use("/products", productsRouter);

app.use("/users", userRouter);

// app.use((req, res) => {
//         res.json({
//             msg: "successful"
//         });
// });
const port = 4000;

app.listen(port, console.log("server started"));

