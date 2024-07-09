import { Router } from 'express';
import { CourseRoute } from '../modules/course/course.route';

const router = Router();

// all routes
const moduleRoutes = [
  {
    path: '/courses',
    route: CourseRoute,
  },
];

// travers the all route
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
