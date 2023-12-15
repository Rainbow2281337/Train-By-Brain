import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/index.js';

dotenv.config();

const PORT = process.env.PORT || 7000;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

async function startServer() {
	try {
		await mongoose.connect(process.env.DB_URL);

		app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
	} catch (e) {
		console.log(e);
	}
}

startServer();