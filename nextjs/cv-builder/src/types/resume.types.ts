import mongoose from "mongoose";

export interface IPersonalInformation {
  fullname: string;
  email: string;
  mobile: string;
  githubLink?: string;
  linkedIn?: string;
  portfolio?: string;
  location: string;
}

export interface IWorkExperience {
  company: string;
  designation: string;
  startDate: Date;
  endDate: Date;
  description: string;
}

export interface IProjects {
  title: string;
  techStack: string[];
  liveLink?: string;
  githubLink: string;
  description: string;
}

export interface IEducation {
  institute: string;
  degree: string;
  startDate: Date;
  endDate: Date;
}

export interface IResume {
  userId: mongoose.Types.ObjectId;
  personalInfo: IPersonalInformation;
  summary: string;
  workExperience: IWorkExperience[];
  projects: IProjects[];
  education: IEducation[];
  skills: string[];
  achievements: string[];
  certification: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
