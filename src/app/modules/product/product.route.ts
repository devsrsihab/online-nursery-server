import express from 'express';
import { Validation } from './product.validation';
import validateRequest from '../../middlewares/validateRequest';
import { Controllers } from './product.controller';

const router = express.Router();

// create 
router.post(
  '/create-academic-faculty',
  validateRequest(Validation.CreateSchemaValidation),
  Controllers.create,
);
// get all 
router.get('/', Controllers.getAll);
// get single 
router.get('/:Id', Controllers.getSingle);
// update 
router.patch('/:Id', validateRequest(Validation.UpdateSchemaValidation), Controllers.update);
export const Route = router;
