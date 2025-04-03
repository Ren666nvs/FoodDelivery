import mongoose from 'mongoose';

const mongooseConnect = () => {
  const mongoUri = process.env.MONGO_URI;  // Make sure this is correctly loaded
  if (!mongoUri) {
    console.error('MONGO_URI is not defined in .env');
    process.exit(1);  // Exit if MONGO_URI is not set
  }

  mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB холболт амжилттай!');
  })
  .catch((err) => {
    console.error('MongoDB холболт амжилтгүй:', err.message);
  });
};

export default mongooseConnect;
