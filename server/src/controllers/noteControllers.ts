import { Request, Response } from "express";
import Note from "../models/Note";

export const getNotes = async (req: Request, res: Response) => {
  try {
    const notes = await Note.find({});
    res.send(notes);
  } catch (error) {
    console.log(error);
  }
};

export const createNote = async (req: Request, res: Response) => {
  try {
    const { title, description, status, date } = req.body;
    const note = await Note.create({ title, description, status, date });
    console.log(note);
    res.status(201).json({
      status: "success",
      data: {
        note,
      },
    });
    console.log(req.body);
  } catch (error) {
    console.log(error);
  }
};

export const deleteNote = async (req: Request, res: Response) => {
  try {
    const notes = await Note.deleteOne({ _id: req.params.id });
    res.send(notes);
  } catch (error) {
    console.log(error);
  }
};

export const updateNote = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const note = await Note.updateOne({ _id: id }, data, {
      runValidators: true,
    });
    res.status(201).json({
      status: "success",
      data: {
        note,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
