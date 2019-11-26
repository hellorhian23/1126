const express = require("express");

const app = express();

const productsRouter = require("./api/routes/products");

const orderRouter = require("./api/routes/orders")

const userRouter = require("./api/routes/users");

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

