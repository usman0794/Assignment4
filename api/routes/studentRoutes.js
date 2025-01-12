import express from "express";
import { createStudent, getAllStudents } from "../controllers/studentController.js";

const router = express.Router();

router.post("/create", createStudent); // Create a new student
router.get("/", getAllStudents);       // Get all students

export default router;
