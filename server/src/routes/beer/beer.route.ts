import { Router, Request, Response } from "express";
import { beerData, findBeerById, paginate, PaginatedQuery } from "../../utils";
import { error } from "console";


export const router = Router();


router.get('/', (req: Request<unknown, PaginatedQuery, unknown>, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 10;

    const paginatedBeers = paginate(beerData, page, pageSize);
    res.json(paginatedBeers);
});

router.get('/:id', (req: Request, res: Response) => {
    const beerId = req.params.id;
    const targetBeer = findBeerById(beerId);

    if (!targetBeer) {
        return res.status(404).json({ error: 'Beer not found' });
    }

    res.json(targetBeer);

});


export default ["/api/beers", router] as [string, Router];
