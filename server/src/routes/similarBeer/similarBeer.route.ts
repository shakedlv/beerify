import { Router, Request, Response } from "express";
import {findBeerById, findSimilarBeers} from "../../utils";


export const router = Router();
router.get('/:id', (req: Request, res: Response) => {
    const beerId = req.params.id;
    const targetBeer = findBeerById(beerId);

    if (!targetBeer) {
        return res.status(404).json({ error: 'Beer not found' });
    }

    const similarBeers = findSimilarBeers(targetBeer);
    res.json(similarBeers);
});

export default ["/api/beer/similar", router] as [string, Router];
