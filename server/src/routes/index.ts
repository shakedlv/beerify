import { Express } from "express";
import beer from "./beer";
import similarBeer from "./similarBeer";

export const routes = (app: Express) => {
    app.use(...beer);
    app.use(...similarBeer);
};

// To do 
// add auth and db 
// add beer rating
// add custom beers to database (or even add the beers to the db)
// add beer similar included by rating ? 