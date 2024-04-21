import { Schema } from 'mongoose';

const ResumeSchema = new Schema({
  eduction: {
    type: Schema.Types.ObjectId,
    ref: 'Education',
  },
  work: {
    type: Schema.Types.ObjectId,
    ref: 'Work',
  },
  introduction: {
    type: String,
    required: true,
  },
  age: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  linkedInd: {
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
