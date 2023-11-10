const express = require("express");
const { getUserProfile, updateUserProfile,createProfile } = require("../controller/userProfileController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

router.post("/set",validateToken,createProfile)
router.get("/get/:id", validateToken, getUserProfile);
router.put("/update/:id", validateToken, updateUserProfile);

module.exports = router;