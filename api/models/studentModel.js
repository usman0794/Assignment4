import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  marks: { type: Number, required: true },
  phoneNumber: { type: String, required: true },
  cnicNumber: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  scholarshipStatus: { type: Boolean, required: true },
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
