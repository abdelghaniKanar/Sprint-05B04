export const dbConfig = {
  uri: process.env.MONGODB_URI || "mongodb://localhost:27017/kanar-portfolio",
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
