import { Router } from 'express';
import { ProductRoute } from '../modules/product/product.route';

const router = Router();

// all routes
const moduleRoutes = [
  {
    path: '/products',
    route: ProductRoute,
  },
];

// travers the all route
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
