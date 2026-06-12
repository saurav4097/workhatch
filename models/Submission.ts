import mongoose from "mongoose";

const SubmissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Full name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email address is required"],
    unique: true, // Prevents duplicate entries at the database layer
    lowercase: true,
    trim: true,
  },
  college: {
    type: String,
    required: [true, "College name is required"],
    trim: true,
  },
  passingYear: {
    type: Number,
    required: [true, "Year of passing is required"],
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
  },
  gender: {
    type: String,
    required: [true, "Gender selection is required"],
  },
  driveLink: {
    type: String,
    required: [true, "Google Drive link is required"],
    trim: true,
  },
  eligibilityCriteria: {
    type: String,
    required: [true, "Location eligibility response is required"],
  },
  submitted: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Ensures the model compiles cleanly during Next.js hot-reloads
export default mongoose.models.Submission ||
  mongoose.model("Submission", SubmissionSchema);