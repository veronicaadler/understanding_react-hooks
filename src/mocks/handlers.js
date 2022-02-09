import { rest } from 'msw'
import mockDrinkObj from './mockDrinkObj';

export const handlers = [
    rest.get('https://www.thecocktaildb.com/api/json/v1/1/random.php', (req, res, ctx) => {
        return res (
            ctx.json([
                mockDrinkObj
            ])
        )
    }),
]

//Here we are mocking HTTP methods.

//req is the request object
//res is the function to create a response
//ctx is the utility to build a response