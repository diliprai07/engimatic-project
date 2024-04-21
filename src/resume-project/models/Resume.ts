import mongoose, { Schema } from 'mongoose';
import { EducationModel, EductionSchema } from './Eduction';

const ResumeSchema = new Schema({
  educations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Education',
    },
  ],
  works: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Work',
    },
  ],
  introduction: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
  },
  linkedInId: {
    type: String,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

export const ResumeModel = mongoose.model('Resume', ResumeSchema);
