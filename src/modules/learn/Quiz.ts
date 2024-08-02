import { Schema, model } from 'mongoose';

const quizSchema = new Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
    course: { type: Schema.Types.ObjectId, ref: 'Course', required: true }
});

export const Quiz = model('Quiz', quizSchema);
