const { getDesign, createDesigns } = require("../controllers/designControllers");
const { protect } = require("../middleware/authMiddleware");
const express = require("express");
const router = express.Router();


router.route("/").get(protect, getDesign);
router.route("/create").post(protect, createDesigns);
// router.route("/:id").get().put().delete();



module.exports = router;