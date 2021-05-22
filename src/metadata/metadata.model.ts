import * as mongoose from 'mongoose';

export const MetadaSchema = new mongoose.Schema({
  title: String,
  description: String,
  largestImage: String,
});
