const express = require("express");
const router = express.Router();
// const {getUsers,createUser, updateUser, getUser, deleteUser} = require("../controller/accountController");
const { registerUser, currentUser, loginUser } = require("../controller/userController");
const validateToken = require("../middleware/validateTokenHandler");

// router.route("/").get(getUsers).post(createUser);
//  router.route("/:id").put(updateUser).get(getUser).delete(deleteUser)

router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/current",validateToken,currentUser)
module.exports = router;