const express = require('express');
const cors = require("cors");
const app = express();
app.use(cors());
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require("./database/connection");

//Middleware
app.use(express.json());


//Route

app.use('/',require('./routes/user'))

//Connect Database
const PORT = process.env.PORT || 5001;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();

