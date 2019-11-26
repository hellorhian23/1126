
const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => {
//     res.json({
//             message : "successful loading"
//     });
// });

// router.post("/", (req, res) => {

//     const order = {
//         name : req.body.productName,
//         qty : req.body.qty
//     };

//     res.json({
//         message : "successful add",
//         orderInfo : order
//     });


// });

// router.delete("/", (req, res) => {
//     res.json({
//             message : "successful delete"
//     });
// });

router.put("/", (req, res) => {
    res.json({
            message : "successful modify"
    });
});

module.exports = router;
