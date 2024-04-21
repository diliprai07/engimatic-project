import { Schema } from 'mongoose';

const WorkExperienceSchema = new Schema({
  startDateYear: {
    type: String,
    required: true,
  },
  startMonth: {
    type: String,
    required: true,
  },
  endDateYear: {
    type: String,
  },
  endMonth: {
    type: String,
  },
  designation: {
    type: String,
    required: true,
  },
  organizationName: {
    type: String,
    required: true,
  },
  tools: {
    type: String,
    required: true,
  },
  responsibilities: {
    type: String,
    required: true,
  },
});
