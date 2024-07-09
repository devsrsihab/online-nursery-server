import express from 'express';
import { Validation } from './product.validation';
import validateRequest from '../../middlewares/validateRequest';
import { Controllers } from './product.controller';

const router = express.Router();

// create
router.post(
  '/',
  validateRequest(Validation.CreateProductSchemaValidation),
  Controllers.createProduct,
);
// get all
router.get('/', Controllers.getAllProduct);
// get single
router.get('/:id', Controllers.getSingleProduct);
// update
router.patch(
  '/:id',
  validateRequest(Validation.UpdateProductSchemaValidation),
  Controllers.updateProduct,
);
// delete
router.delete('/:id', Controllers.deleteProduct);

export const ProductRoute = router;
