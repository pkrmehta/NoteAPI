const express = require("express");
const { updateNote } = require("../controllers/noteController");
const { deleteNote } = require("../controllers/noteController");
const { createNote } = require("../controllers/noteController");
const { getNotes } = require("../controllers/noteController");
const auth = require("../middleware/auth");
const noteRouter = express.Router();

noteRouter.get("/", auth, getNotes);

noteRouter.post("/", auth, createNote);

noteRouter.delete("/:id", auth,  deleteNote)

noteRouter.put("/:id",auth, updateNote);

module.exports = noteRouter;