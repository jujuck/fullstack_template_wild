const express = require("express");

const router = express.Router();
// const client = require("../database/client");

/* ************************************************************************* */
// Define Your API Routes Here
// router.get("/tasks", (req, res) => {
//   client
//     .query(
//       "SELECT * FROM tasks INNER JOIN status ON  tasks.id_status = status.id"
//     )
//     .then((tasks) => {
//       res.status(200).json(tasks[0]);
//     });
// });
/* ************************************************************************* */

// Import itemActions module for handling item-related operations
const itemActions = require("./controllers/itemActions");

// Route to get a list of items
router.get("/tasks", itemActions.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemActions.read);

// Route to add a new item
router.post("/tasks", itemActions.add);

/* ************************************************************************* */

module.exports = router;
