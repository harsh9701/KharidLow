const express = require("express");
const router = express.Router();
const { addProduct, showAllProduct } = require("../controllers/productController");

router.get("/", (req, res) => {
    res.send("This is Home Page");
});

router.get("/register", (req, res) => {
    res.render("index");
})

router.get("/login", (req, res) => {
    res.render("login");
})

router.get("/addproduct", (req, res) => {
    res.render("addproduct");
});

router.post("/addproduct", addProduct);

router.post("/allproduct", showAllProduct);

// Testing API
router.get("/getdata", (req, res) => {
    res.send("Data from backend");
});

module.exports = router;