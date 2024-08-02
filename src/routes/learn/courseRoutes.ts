import { Router } from 'express';
import { getAllCourses, getCourseById } from '../controllers/courseController';

const router = Router();

router.get('/', getAllCourses);
router.get('/:id', getCourseById);

export { router as courseRoutes };
