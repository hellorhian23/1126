
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

});


// api 디테일 겟 (상세보기) - api 기본형
router.get("/:productID", (req, res) => {

    const id = req.params.productID;

    productModel
        .findById(id)
        .exec()
        .then(result => {
            if (!result) {
                res.json({
                    message : "no product ID"
                });
            } else {
                res.json({
                    message : "successful get product",
                    productInfo : result
                });
            }

            
        })

        .catch(err => {
            res.json({
                message : err.message
            });
            
        });



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

router.patch("/:productID", (req, res) => {

    const ID = req.params.productID;

    // 빈공간 만들어줌 (새로 업데이트 된 내용이 담김)
    const updateOps = {};

    for (ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }



    productModel
        .update({_id:ID}, {$set: updateOps})
        .exec()
        .then(result => {
            res.json({
                message : "updated product",
                result : result
            });
        })
        .catch(err => {
            res.json({
                message : err.message
            });
        });

});





router.delete("/:productID", (req, res) => {

    const ID = req.params.productID;

    productModel
        .remove({_id: ID})
        .exec()
        .then(result => {
            if(result === null) {
                res.json({
                    message : "no product ID"
                });

            } else {
                res.json({
                    message : "successful deleted product"
                });

            }
            
            

        })
        .catch(err => {
            res.json({
                message : err.message
            });
        });

});

module.exports = router;
