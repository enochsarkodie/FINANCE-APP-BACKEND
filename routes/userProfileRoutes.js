const express = require("express");
const { getUserProfile, updateUserProfile } = require("../controller/userProfileController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();


router.get("/get/:id", validateToken, getUserProfile);
router.put("/update/:id", validateToken, updateUserProfile);

module.exports = router;