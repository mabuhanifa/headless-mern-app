import cors from "cors";
import express, { Request, Response } from "express";
import connectDB from "./config/db";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//mongodb connection
connectDB();

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Hello from Headless node server!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
