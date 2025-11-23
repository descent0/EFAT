const express = require('express');
const connectToMongo = require('./connect');
const cors = require('cors');
const { userRouter } = require('./routes/user');
const { calculateCarbonFootprint } = require('./controller/climatiq');
const { callPythonAPI } = require('./controller/predict');


const app = express();
const port = 4000;

// Connect to MongoDB
connectToMongo('mongodb://localhost:27017/EFAT')
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error(`Error connecting to MongoDB: ${err}`));

// Middleware
app.use(express.json()); // Built-in body-parser
app.use(cors()); // Enable CORS

// Routes
app.use("/user", userRouter);
app.post("/predict",callPythonAPI);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
