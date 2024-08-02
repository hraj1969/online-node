import { Document, Types } from 'mongoose';

export interface IAssignment extends Document {
  title: string;
  description: string;
  assignedTo: string;  // Assuming this is a user identifier
  dueDate: Date;
}

export interface ICreateAssignmentRequest {
  title: string;
  description: string;
  assignedTo: string;  // Assuming this is a user identifier
  dueDate: Date;
}

export interface IAssignmentRequestObject {
  title: string;
  description: string;
  assignedTo: string;  // Assuming this is a user identifier
  dueDate: Date;
  _id: Types.ObjectId;
}
