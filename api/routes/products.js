
const express = require("express");

const router = express.Router();

const productModel = require("../models/products");

router.get("/", (req, res) => {
    
    // 데이터 담겨진 그릇을 불러온다
    productModel
        .find()
        .exec()
        //2 성공시 화면에 뿌려주는
        .then(docs => {
            res.json({
                message : "successful get products",
                count : docs.length,
                productInfo : docs
            });
        })

        //1 에러
        .catch(err => {
            res.json({
                message : err.message
            });
        });



    // res.json({
    //     message : "successful product get"
    // });
});

router.post("/", (req, res) => {

    const product = new productModel({
        name: req.body.productName,
        price: req.body.productPrice
    });


    product
        .save()
        .then(doc => {
            res.json({
                message : "registered product",
                productInfo : doc
            });
        })

        .catch(err => {
            res.json({
                message : err.message
            });
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

module.exports = router;
