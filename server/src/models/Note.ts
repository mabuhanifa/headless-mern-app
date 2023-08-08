import { Schema, model } from "mongoose";

const noteSchema = new Schema(
  {
    title: String,
    description: String,
    status: String,
    date: String,
  },
  {
    timestamps: true,
  }
);

const Note = model("Note", noteSchema);

export default Note;
