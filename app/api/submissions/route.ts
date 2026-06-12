import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Submission from "@/models/Submission"; // Adjust this path to your model file

// Connect helper to prevent connection accumulation in Next.js development
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/workhatch");
};

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    // Check if email already turned in materials
    const existingUser = await Submission.findOne({ email: body.email.toLowerCase().trim() });
    if (existingUser) {
      return NextResponse.json(
        { error: "This email has already submitted their project folder form." },
        { status: 409 }
      );
    }

    // Save record data to your 'submissions' collection
    const newSubmission = await Submission.create({
      name: body.name,
      email: body.email,
      college: body.college,
      passingYear: Number(body.passingYear),
      age: Number(body.age),
      gender: body.gender,
      driveLink: body.driveLink,
      eligibilityCriteria: body.eligibilityCriteria,
      agreed: body.agreed
    });

    return NextResponse.json({ success: true, data: newSubmission }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal database server fault." },
      { status: 500 }
    );
  }
}