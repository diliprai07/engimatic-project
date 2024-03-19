import mongoose from 'mongoose';

const HouseOwner = new mongoose.Schema({
  name: String,
});
const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  zip: String,
  owner: HouseOwner,
});

const AddressModel = mongoose.model('Address', addressSchema);

export const createAddress = (values: Record<string, any>) =>
  new AddressModel(values).save().then((address) => address.toObject());
