import { z } from 'zod';

// create
const CreateProductSchemaValidation = z.object({
  body: z.object({
    title: z.string(),
    price: z.number(),
    description: z.string(),
    category: z.string(),
    rating: z.number(),
    image: z.string(),
    brand: z.string(),
    stock: z.number(),
  }),
});

// update
const UpdateProductSchemaValidation = z.object({
  body: z.object({
    title: z.string().optional(),
    price: z.number().optional(),
    description: z.string().optional(),
    category: z.string().optional(),
    rating: z.number().optional(),
    image: z.string().optional(),
    brand: z.string().optional(),
    stock: z.number().optional(),
  }),
});

export const Validation = {
  CreateProductSchemaValidation,
  UpdateProductSchemaValidation,
};
