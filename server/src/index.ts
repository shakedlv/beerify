// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { loadBeers } from "./utils";
import { routes } from "./routes";

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();
// app.use(cors());
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({extended:true})); // Parse URL-encoded bodies using query-string library

loadBeers();

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});


app.listen(port, () => {
    routes(app);

    console.log(`[server]: Server is running at http://localhost:${port}`);
});