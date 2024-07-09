import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProductServices } from './product.service';

// create
const createProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.createProductToDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product created successfully',
    data: result,
  });
});

// get all
const getAllProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllProductFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Retrive Products successfully',
    data: result,
  });
});

// single
const getSingleProduct = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await ProductServices.getSingleProductFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get Product successfully',
    data: result,
  });
});

// update
const update = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  const updateAbleData = req.body;
  const result = await ProductServices.updateToDB(facultyId, updateAbleData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Updated successfully',
    data: result,
  });
});

export const Controllers = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  update,
};
