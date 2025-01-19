import express from "express";
import routes from "./routes";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', routes);

export default app;