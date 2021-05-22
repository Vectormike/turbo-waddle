import { Document } from 'mongoose';

export interface Metadata extends Document {
  readonly title: string;
  readonly description: string;
  readonly largestNumber: number;
}
