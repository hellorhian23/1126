
const express = require("express");
const router = express.Router();

// 데이터를 담는 '그릇'
const orderModel = require("../models/orders");
const productModel = require("../models/products");

router.get("/", (req, res) => {

    orderModel
        .find()
        .populate('product', 'name price')
        .exec()
        .then(docs => {
            res.json({
                message : "sucessful orders get",
                count : docs.length,
                orderInfo : docs
            });
        })
        .catch(err => {
            res.json({
                message : err.message
            });
        });



});

router.get("/:orderID", (req, res) => {

    const ID = req.params.orderID;

    orderModel
        .findById(ID)
        .populate('product', 'name price')
        .exec()
        .then(result => {
            if(!result){
                res.json({
                    message : "no order ID"
                });
                
            } else {
                res.json({
                    message : "successful get order ID",
                    orderInfo : result
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

    productModel
        .findById(req.body.productID)
        .exec()
        .then(result => {
            if(!result) {
                res.json({
                    message : "no product ID"
                });
            } 
            else {
                const order = new orderModel({
                    product : req.body.productID,
                    qty : req.body.quantity
                });

                order
                    .save()
                    .then(doc => {
                        res.json({
                            message : "successful ordered",
                            orderInfo : doc
                            // orderInfo => db에 저장된 값을 뿌려줌
                        });
                    })
                    .catch(err => {
                        res.json({
                            message : err.message
                        });
                    });

            }
        })
        .catch(err => {
            res.json({
                message : err.message
            });
        })


    

});

router.delete("/", (req, res) => {
    res.json({
            message : "successful delete"
    });
});

router.put("/", (req, res) => {
    res.json({
            message : "successful modify"
    });
});

module.exports = router;
