
const express = require("express")

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
            message : "successful user joined"
    });
});

router.patch("/", (req,res) => {
    res.json({
            message : "successful modified"
    });
});

router.delete("/", (req, res) => {
    res.json({
            message : "successful deleted"
    });
});

module.express = router;
