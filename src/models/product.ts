import mongoose, { Schema } from 'mongoose';

const ProductSchema = new Schema({
  productCode: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    rquired: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 10,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'CategoryS',
  },
  manufacturer: {
    type: String,
  },
  available: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const ProductModal = mongoose.model('Product', ProductSchema);

export const getProducts = async (
  page: number,
  limit: number,
  productCode?: string,
) => {
  // Construct the filter object based on query parameters
  const filter = {};
  if (productCode) {
    // @ts-ignore
    filter.productCode = { $regex: productCode, $options: 'i' }; // Case-insensitive search for title
  }

  const data = await ProductModal.find(filter)
    .skip((page - 1) * limit)
    .limit(limit)
    .populate('category')
    .exec();

  // Total count of documents in the collection
  const totalCount = await ProductModal.countDocuments();

  // Calculate total pages
  const totalPages = Math.ceil(totalCount / limit);

  // Response object including data, current page number, total count, and items per page
  const response = {
    data: data,
    pagination: {
      currentPage: page,
      totalCount: totalCount,
      totalPages: totalPages,
      itemsPerPage: limit,
    },
  };

  return response;
};

export const deleteProductById = (id: string) =>
  ProductModal.findOneAndDelete({ _id: id });

export const createProduct = (values: Record<string, any>) =>
  new ProductModal(values).save().then((product) => product.toObject());

export const updateProductById = (id: string, values: Record<string, any>) =>
  ProductModal.findByIdAndUpdate(id, values);
