const express = require("express");

const client = require("../database/client");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
const itemActions = require("./controllers/itemActions");

router.get("/courses", (req, res) => {
  client.query("SELECT * FROM courses").then(([courses]) => {
    res.status(200).json(courses);
  });
});

// Route to add a new item
router.post("/items", itemActions.add);
/* ************************************************************************* */

module.exports = router;
