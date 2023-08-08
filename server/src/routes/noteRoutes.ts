import { Router } from "express";
import {
  createNote,
  deleteNote,
  getNotes,
  updateNote,
} from "../controllers/noteControllers";

const router = Router();

router.route("/").get(getNotes).post(createNote);

router.route("/:id").delete(deleteNote).patch(updateNote);

export default router;
