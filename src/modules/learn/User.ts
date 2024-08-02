import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: Number },
    address: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dateCreated: { type: Date, default: Date.now },
    enrolledCourses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
    progress: [{
        courseId: { type: Schema.Types.ObjectId, ref: 'Course' },
        progress: { type: Number }
    }]
});

export const User = model('User', userSchema);
