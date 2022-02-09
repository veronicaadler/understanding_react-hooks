import UseEffectExample from '../UseEffectExample';
import { render, screen } from '@testing-library/react';

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