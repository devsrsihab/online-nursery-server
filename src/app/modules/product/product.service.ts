import QueryBuilder from '../../builder/QueryBuilder';
import { courseSearchAbleFields } from './product.constant';
import { TProduct } from './product.interface';
import { Product } from './product.model';

// create
const createProductToDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

// get all
const getAllProductFromDB = async (query: Record<string, unknown>) => {
  // Count total products
  const totalItems = await Product.countDocuments({ isDeleted: false });

  const productQuery = new QueryBuilder(Product.find({ isDeleted: false }), query)
    .search(courseSearchAbleFields)
    .filter()
    .sort()
    .paginate();
  const products = await productQuery.modelQuery;
  return {
    totalItems,
    products,
  };
};

// get single
const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  console.log('single product service id', id);
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
