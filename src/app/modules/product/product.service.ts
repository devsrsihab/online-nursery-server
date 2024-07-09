import QueryBuilder from '../../builder/QueryBuilder';
import { courseSearchAbleFields } from '../course/course.constant';
import { TProduct } from './product.interface';
import { Product } from './product.model';

// create
const createProductToDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

// get all
const getAllProductFromDB = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(Product.find(), query)
    .search(courseSearchAbleFields)
    .filter()
    .sort()
    .paginate();
  const result = await productQuery.modelQuery;
  return result;
};

// get single
const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

// update
const updateProductToDB = async (id: string, payload: TProduct) => {
  const result = await Product.findByIdAndUpdate({ _id: id }, payload, { new: true });
  return result;
};

// delete
const deleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndUpdate(
    id,
    {
      isDeleted: true,
    },
    { new: true },
  );
  return result;
};

export const ProductServices = {
  createProductToDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateProductToDB,
  deleteProductFromDB,
};
