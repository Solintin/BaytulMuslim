const { StatusCodes } = require("http-status-codes");
const Lecture = require("../models/lectureModel");
const asyncHandler = require("express-async-handler");
//@desc     Get all lectures
//route     GET /api/lecture
//access    Public
const getLectures = asyncHandler(async (req, res) => {
  const lectures = await Lecture.find({});

  return res
    .status(StatusCodes.OK)
    .json({ message: "Lectures retrieved successfully", lectures });
});

//@desc     Upload a lecture
//route     POST /api/lecture
//access    Public
const uploadLecture = asyncHandler(async (req, res) => {
  const { title, src, tags, language, artist, lectureId } = req.body;

  console.log(req.body);
  if (!title || !src || !tags || !language || !artist || !lectureId) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "All parameters are required" });
  }
  const uploadedLecture = await Lecture.create({
    title,
    src,
    tags: tags,
    language,
    artist,
    lectureId
  });

  return res.status(StatusCodes.OK).json({
    message: "lecture uploaded successfully",
    lecture: uploadedLecture,
  });
});

//@desc     Get a lecture
//route     GET /api/lectures/:id
//access    Public
const getSingleLecture = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const getLecture = await Lecture.findById(id);

  console.log(id);
  if (!getLecture) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "Lecture not found" });
  }

  return res
    .status(StatusCodes.OK)
    .json({ message: `Lecture Retrieved Successfully`, getLecture });
});

//@desc     Edit a lecture
//route     PUT /api/lectures/:id
//access    Public
const editLecture = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const getLectureToUpdate = await Lecture.findById(id);

  console.log(id);
  if (!getLectureToUpdate) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "Lecture not found" });
  }
  const { title, src, tags, language, artist } = req.body;

  const updatedLecture = await Lecture.findByIdAndUpdate(
    id,
    {
      title,
      src,
      tags: [tags],
      language,
      artist,
    },
    { new: true }
  );
  return res
    .status(StatusCodes.OK)
    .json({ message: `Lecture Updated Successfully`, updatedLecture });
});

//@desc     Delete a lecture
//route     DELETE /api/lectures/:id
//access    Public
const deletetLecture = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const getLectureToUpdate = await Lecture.findById(id);

  if (!getLectureToUpdate) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "Lecture not found" });
  }
  await Lecture.findByIdAndDelete(id);
  res.status(StatusCodes.OK).json({ message: `Lecture Deleted Successfully` });
});

module.exports = {
  getLectures,
  uploadLecture,
  getSingleLecture,
  editLecture,
  deletetLecture,
};
