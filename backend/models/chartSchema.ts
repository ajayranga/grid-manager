import mongoose, { Schema } from 'mongoose';

export const chartSchema = new mongoose.Schema(
  {
    seriesName: String,
    data: [Number],
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);
const Chart = mongoose.model('Chart', chartSchema);

export default Chart;
