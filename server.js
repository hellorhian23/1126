const express = require("express");

const app = express();

app.use((req, res) => {
        res.json({
            msg: "successful"
        });
});
const port = 4000;

app.listen(port, console.log("server started"));
