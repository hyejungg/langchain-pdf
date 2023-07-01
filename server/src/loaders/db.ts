const connectDB = async () => {
  try {
    console.log('DB Connected ...');
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
