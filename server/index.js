import express from 'express';
import dotenv from 'dotenv';
import router from './Routes/router.js';
import cors from 'cors';
import bodyParser from 'body-parser';

import connection from './Database/db.js';

const app = express();

dotenv.config();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/', router);

const PORT = 8000; 

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

connection(username, password);

app.listen(PORT, () => console.log(`Server is running successfuly on port ${PORT}`));