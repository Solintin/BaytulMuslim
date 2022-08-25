const express = require("express");
const router = express.Router();

const {
  getLectures,
  uploadLecture,
  getSingleLecture,
  editLecture,
  deletetLecture,
} = require("../controllers/bm_controller.js");

router.route("/").get(getLectures).post(uploadLecture);
router.route("/:id").get(getSingleLecture).put(editLecture).delete(deletetLecture);

module.exports = router;
