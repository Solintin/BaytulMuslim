const express = require("express");
const router = express.Router();

const {
  getLectures,
  uploadLecture,
  editLecture,
  deletetLecture,
} = require("../controllers/bm_controller.js");

router.route("/").get(getLectures).post(uploadLecture);
router.route("/:id").put(editLecture).delete(deletetLecture);

module.exports = router;
