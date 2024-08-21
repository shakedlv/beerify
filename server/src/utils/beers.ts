import fs from 'fs';
import path from 'path';

const beerDataDirectory = path.join(__dirname, '../../beer-database');
export let beerData: any[] = [];

export function findBeerById(beerId: string) {
    return beerData.find(beer => beer.id === beerId);
}

export function findSimilarBeers(targetBeer: any, limit: number = 5) {
    return beerData
        .filter(beer => beer.style.id === targetBeer.style.id && beer.id !== targetBeer.id)
        .sort((a, b) => Math.abs(parseFloat(a.abv) - parseFloat(targetBeer.abv)) - Math.abs(parseFloat(b.abv) - parseFloat(targetBeer.abv)))
        .slice(0, limit);
}

export const loadBeers = () => {
    fs.readdirSync(beerDataDirectory).forEach((file) => {
        const data = JSON.parse(fs.readFileSync(path.join(beerDataDirectory, file), 'utf8'));
        beerData.push(...data.data);
    });
    console.log(`[server]: Server loaded ${beerData.length} beers`);

}

