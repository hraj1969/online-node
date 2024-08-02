import { Request, Response } from 'express';
import { User } from '../models/User';
import { Course } from '@modules/Course';

export const enrollUser = async (req: Request, res: Response) => {
    try {
        const { userId, courseId } = req.body;
        const user = await User.findById(userId);
        const course = await Course.findById(courseId);

        if (!user || !course) {
            return res.status(404).json({ message: 'User or Course not found' });
        }

        if (!user.enrolledCourses.includes(courseId)) {
            user.enrolledCourses.push(courseId);
            user.progress.push({ courseId, progress: 0 });
            await user.save();
        }

        res.status(200).json({ message: 'User enrolled successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
