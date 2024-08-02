import mongoose, { Schema } from 'mongoose';
import { IAssignment } from '@modules/Assignment/model';

const assignmentSchema: Schema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    assignedTo: { type: String, required: true, trim: true }, // User ID or username
    dueDate: { type: Date, required: true },
  },
  {
    timestamps: true,
  },
);

// Export the model and return your IAssignment interface
export default mongoose.model<IAssignment>('Assignment', assignmentSchema, 'assignmenttable');
