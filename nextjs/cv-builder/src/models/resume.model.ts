import { IResume } from "@/types/resume.types";
import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema<IResume>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    personalInfo: {
      type: {
        fullname: String,
        email: String,
        mobile: String,
        location: String,
        githubLink: String,
        linkedIn: String,
        portfolio: String,
      },
      default: {},
    },
    summary: {
      type: String,
      default: "",
    },
    workExperience: {
      type: [
        {
          company: String,
          designation: String,
          startDate: Date,
          endDate: Date,
          description: String,
        },
      ],
      default: [],
    },
    projects: {
      type: [
        {
          title: String,
          techStack: [String],
          liveLink: String,
          githubLink: String,
          description: String,
        },
      ],
      default: [],
    },
    education: {
      type: [
        {
          institute: String,
          degree: String,
          startDate: Date,
          endDate: Date,
        },
      ],
      default: [],
    },
    skills: {
      type: [String],
      default: [],
    },
    achievements: [String],
  },
  {
    timestamps: true,
  },
);

const ResumeModel = mongoose.model("Resume", resumeSchema);
export default ResumeModel;
