const DB_NAME = process.env.DB_NAME || "ecomm_db";

const DB_URL = process.env.MONGODB_URI || `mongodb://localhost/${DB_NAME}`;

const MONGOOSE_OPTIONS = {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
};

module.exports = {
  DB_URL,
  MONGOOSE_OPTIONS,
};
