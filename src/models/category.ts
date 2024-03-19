import mongoose, { Schema } from 'mongoose';

const CategorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
    slug: 'title',
  },
});

export const CategoryModel = mongoose.model('CategoryS', CategorySchema);

export const getCategories = () => CategoryModel.find();

export const deleteByCategoryId = (id: string) =>
  CategoryModel.findOneAndDelete({ _id: id });

export const createUser = (values: Record<string, any>) =>
  new CategoryModel(values).save().then((category) => category.toObject());

export const updateCategoryById = (id: string, values: Record<string, any>) =>
  CategoryModel.findByIdAndUpdate(id, values);
