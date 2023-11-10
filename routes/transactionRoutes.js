const express = require("express");
const router = express.Router();
const {getTransactions, createTransaction, getTransaction, deleteTransaction} = require("../controller/transactionControllers");
const validationToken = require("../middleware/validateTokenHandler");

router.use(validationToken);
router.route("/").get(getTransactions).post(createTransaction);
router.route("/:id").get(getTransaction).delete(deleteTransaction);

module.exports = router;


