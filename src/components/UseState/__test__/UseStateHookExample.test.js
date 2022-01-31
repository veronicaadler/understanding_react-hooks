import StateHook from '../UseStateHookExample';
import { render, screen, fireEvent } from '@testing-library/react';

describe('UseStateHookExample', () => {
    //testing that the UI renders as it should initially.
    it('should render a heading with the correct text', () => {
        render(<StateHook />);
        const headingElement = screen.getByRole(getByRole('heading', 
        { name: /this is an example of a react state hook within a functional, stateless component\./i }
        ))
        expect(headingElement.toBeInTheDocument)
    })
    it('should render a counter with an initial text of 0', () => {
        render(<StateHook />);
        const paragraphElement = screen.getByTestId('count')
        expect(paragraphElement.textContent).toBe('Count: 0')

    })
    it('should render an add button with the correct text', () => {
        render(<StateHook />);
        const incrementBtn = screen.getByRole('button', { name: /increment/i })
        expect(incrementBtn.toBeInTheDocument)
    })
    it('should render a subtract button with the correct text', () => {
        render(<StateHook />);
        const decrementBtn = screen.getByRole('button', { name: /decrement/i})
        expect(decrementBtn.toBeInTheDocument)
    })
    //the following tests the functionality within the component.
    test('that the increment button adds 1 to the counter', () => {
        render(<StateHook />)
        const incrementBtn = screen.getByRole('button', { name: /increment/i})
        fireEvent.click(incrementBtn)
        const counterElement = screen.getByTestId('count')
        expect(counterElement.textContent).toBe("Count: 1")
    })
    test('that the decrement button subtracts 1 from the counter', () => {
        render(<StateHook />)
        const decrementBtn = screen.getByRole('button', { name: /decrement/i})
        fireEvent.click(decrementBtn)
        const counterElement = screen.getByTestId('count')
        expect(counterElement.textContent).toBe("Count: -1")
    })
})