import { Router } from 'express';
import { CourseRoute } from '../modules/course/course.route';
import { ProductRoute } from '../modules/product/product.route';

const router = Router();

// all routes
const moduleRoutes = [
  {
    path: '/courses',
    route: CourseRoute,
  },
  {
    path: '/products',
    route: ProductRoute,
  },
];

// travers the all route
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
