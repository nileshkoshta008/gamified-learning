const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());

const MONGODB_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/gamifiedDB";

mongoose.connect(MONGODB_URI)
  .then(() => console.log(`✅ Connected to MongoDB (${MONGODB_URI})`))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));