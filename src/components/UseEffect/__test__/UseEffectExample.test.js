import UseEffectExample from '../UseEffectExample';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../../../mocks/server';

    it('displays the proper heading', () => {
        render(<UseEffectExample />)
        const title = screen.getByRole('heading', { name: /Fetching from an API with useEffect/i})
        expect(title).toBeInTheDocument()
    })
    it('displays a random img from the cocktail API', async () => {
        render(<UseEffectExample />)
        const cocktailImg = await screen.findByRole('img')
        expect(cocktailImg).toBeInTheDocument()

    })
    it('displays the name of a random cocktail from the cocktail API', async () => {
        render(<UseEffectExample />)
        const cocktailName = await screen.findByText(/Random Cocktail:/)
        expect(cocktailName).toBeInTheDocument()
    })
    it('properly renders a server error', async () => {
        server.resetHandlers(
            rest.get('https://www.thecocktaildb.com/api/json/v1/1/random.php', (req, res, ctx) =>
                res(ctx.status(500))
            )
        )
        render(<UseEffectExample />)
        const alert = await screen.findByTestId('error')
        expect(alert).toBeInTheDocument()
    })