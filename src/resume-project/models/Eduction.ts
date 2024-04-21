import mongoose, { Schema } from 'mongoose';
export enum ScoreType {
  percentage = 'percentage',
  cgpa = 'cgpa',
  other = 'other',
}
const EductionSchema = new Schema({
  institution: {
    type: String,
    required: true,
  },
  board: {
    type: String,
    required: true,
  },
  startDateYear: {
    type: String,
    required: true,
  },
  endDateYear: {
    type: String,
  },
  score: {
    type: String,
  },
  scoreType: {
    type: Number,
  },
  remarks: {
    type: String,
  },
});

export const EducationModel = mongoose.model('Education', EductionSchema);
