import { Request, Response } from 'express';
import { User } from '../models/User';
import { Course } from '../models/course';

export const getUserProgress = async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const progress = user.progress.find(p => p.courseId.toString() === req.query.courseId);
        res.status(200).json(progress);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserRecommendations = async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Implement your recommendation logic here
        const recommendedCourses = await Course.find().limit(5);
        res.status(200).json(recommendedCourses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
