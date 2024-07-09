import { TProduct } from './product.interface';
import { Product } from './product.model';

// create
const createProductToDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

// get all
const getAllProductFromDB = async () => {
  const result = await Product.find();
  return result;
};

// get single
const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  console.log(id);
  return result;
};

// update
const updateToDB = async (id: string, payload: TProduct) => {
  const result = await Product.findByIdAndUpdate({ _id: id }, payload, { new: true });
  return result;
};

export const ProductServices = {
  createProductToDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateToDB,
};
