import express from 'express';
import { ResumeModel } from '../models/Resume';
import { EducationModel } from '../models/Eduction';
import { WorkModel } from '../models/Work';

export const createResume = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const values = req.body;
    const { generalInformation, education, workExperience } = values;
    const newEducations = await EducationModel.insertMany(education); // Insert multiple education objects
    const newWorks = await WorkModel.insertMany(workExperience);

    const resume = new ResumeModel({
      generalInformation: generalInformation,
      education: newEducations.map((education) => education._id),
      workExperience: newWorks.map((work) => work._id),
    });

    const newResume = await (
      await (await resume.save()).populate('education')
    ).populate('workExperience');

    return res.status(200).json(newResume).end();
  } catch (error) {
    return res.sendStatus(400);
  }
};

export const getResumesByEmail = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const email = req?.query?.email;
    const resumes = await ResumeModel.find({
      email: email,
    });

    return res.status(200).json(resumes).end();
  } catch (error) {
    return res.sendStatus(400);
  }
};
