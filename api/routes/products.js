
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
            message : "successful product get"
    });
});

router.post("/", (req, res) => {
    res.json({
            message : "successful product post"
    });
});

router.patch("/", (req, res) => {
    res.json({
            message : "successful product modify"
    });
});

router.delete("/", (req, res) => {
    res.json({
            message : "successful product delete"
    });
});

module.express = router;
