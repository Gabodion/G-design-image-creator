const { getDesign } = require("../controllers/designControllers")

const express = require("express")
const router = express.Router()


router.route("/").get(getDesign);
// router.route("/create").post();
// router.route("/:id").get().put().delete();



module.exports = router;