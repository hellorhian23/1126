
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
            message : "successful loading"
    });
});

router.post("/", (req, res) => {
    res.json({
            message : "successful add"
    });
});

router.delete("/", (req, res) => {
    res.json({
            message : "successful delete"
    });
});

router. put("/", (req, res) => {
    res.json({
            message : "successful modify"
    });
});

module.exports = router;
