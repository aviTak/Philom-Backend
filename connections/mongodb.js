const mongoose = require("mongoose");

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
  } catch (error) {
    console.log("Something went wrong with the database :(");
    return;
  }
  console.log("Yahoooo! Connected to the database.");
};

connectDB();
