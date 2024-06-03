import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Record from "./models/financial-record.mjs";
dotenv.config();

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("DB is connected");
    app.listen(process.env.PORT, () => {
      console.log("server is running on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

app.get("/financial-record/:id", async (req, res) => {
  try {
    const userId = req.params.userId;
    const record = await Record.find({ userId: userId });
    if (record.length === 0) {
      return res.status(404).send("No record is found");
    }
    res.status(200).send(record);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
app.post("/financial-record", async (req, res) => {
  try {
    const newRecordBody = req.body;
    const newRecord = new Record(newRecordBody);
    const savedRecord = await newRecord.save();
    res.status(200).send(savedRecord);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
app.put("/financial-record/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const newRecordBody = req.body;
    const record = await Record.findByIdAndUpdate(id, newRecordBody, {
      new: ture,
    });
    if (!record) {
      return res.status(404).send();
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});
app.delete("/financial-record/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const record = await Record.findByIdAndDelete(id);
    if (!record) {
      return res.status(404).send();
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});
