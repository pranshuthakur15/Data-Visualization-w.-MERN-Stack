import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';


const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Assignment', { useNewUrlParser: true, useUnifiedTopology: true });

const DataSchema = new mongoose.Schema({
    end_year: { type: String, default: "" },
    intensity: { type: Number },
    sector: { type: String },
    topic: { type: String },
    insight: { type: String },
    url: { type: String },
    region: { type: String },
    start_year: { type: String, default: "" },
    impact: { type: String, default: "" },
    added: { type: String },
    published: { type: String },
    country: { type: String },
    relevance: { type: Number },
    pestle: { type: String },
    source: { type: String },
    title: { type: String },
    likelihood: { type: Number }
  }, { collection: 'dashboard' 
});

const DataModel = mongoose.model('Assignment', DataSchema);

// API Endpoint
app.get('/api/data', async (req, res) => {
  try {
    const data = await DataModel.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));