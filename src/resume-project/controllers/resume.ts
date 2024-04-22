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
    const { educations, works, ...resumeData } = values;
    const newEducations = await EducationModel.insertMany(educations); // Insert multiple education objects
    const newWorks = await WorkModel.insertMany(works);

    const resume = new ResumeModel({
      ...resumeData,
      educations: newEducations.map((education) => education._id),
      works: newWorks.map((work) => work._id),
    });

    const newResume = await (
      await (await resume.save()).populate('educations')
    ).populate('works');

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
