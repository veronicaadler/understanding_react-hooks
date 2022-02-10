import { screen, render } from '@testing-library/react';
import UseRefExample from '../UseRefExample';
import userEvent from '@testing-library/user-event';

it('should render a heading on mount', () => {
    render(<UseRefExample />)
    const title = screen.getByRole('heading', { name: /This is an example of the useRef hook./i})
    expect(title).toBeInTheDocument()
})
it('should render a count and previous count initialized to 0', () => {
    render(<UseRefExample />)
    const counter = screen.getByText(/Count: 0 Previous Count: 0/i)
    expect(counter).toHaveTextContent(/Count: 0 Previous Count: 0/i)
})
it('should render an increment button with the correct text', () => {
    render(<UseRefExample />)
    const incrementBtn = screen.getByRole('button', { name: /increment/i})
    expect(incrementBtn).toHaveTextContent(/increment/i)
})
it('should render a decrement button with the corrext text', () => {
    render(<UseRefExample />)
    const decrementBtn = screen.getByRole('button', { name: /decrement/i})
    expect(decrementBtn).toHaveTextContent(/decrement/i)
})
test('that the increment button increments the count by one when clicked', () => {
    render(<UseRefExample />)
    const incrementBtn = screen.getByRole('button', { name: /increment/i})
    const counter = screen.getByText(/Count: 0 Previous Count: 0/i)
    userEvent.click(incrementBtn)
    expect(counter).toHaveTextContent(/Count: 1 Previous Count: 0/i)  
})
test('that the decrement button increments the count by one when clicked', () => {
    render(<UseRefExample />)
    const decrementBtn = screen.getByRole('button', { name: /decrement/i})
    const counter = screen.getByText(/Count: 0 Previous Count: 0/i)
    userEvent.click(decrementBtn)
    expect(counter).toHaveTextContent(/Count: -1 Previous Count: 0/i)
})
test('that the increment button increments the count with multiple clicks', () => {
    render(<UseRefExample />)
    const incrementBtn = screen.getByRole('button', { name: /increment/i})
    const counter = screen.getByText(/Count: 0 Previous Count: 0/i)
    userEvent.click(incrementBtn)
    userEvent.click(incrementBtn)
    userEvent.click(incrementBtn)
    expect(counter).toHaveTextContent(/Count: 3 Previous Count: 2/i)
})
test('that the decrement button decrements the count with multiple clicks', () => {
    render(<UseRefExample />)
    const decrementBtn = screen.getByRole('button', { name: /decrement/i})
    const counter = screen.getByText(/Count: 0 Previous Count: 0/i)
    userEvent.click(decrementBtn)
    userEvent.click(decrementBtn)
    userEvent.click(decrementBtn)
    expect(counter).toHaveTextContent(/Count: -3 Previous Count: -2/i)
})
test('clicking the increment and decrement buttons one after another', () => {
    render(<UseRefExample />)
    const decrementBtn = screen.getByRole('button', { name: /decrement/i})
    const incrementBtn = screen.getByRole('button', { name: /increment/i})
    const counter = screen.getByText(/Count: 0 Previous Count: 0/i)
    userEvent.click(incrementBtn)
    userEvent.click(decrementBtn)
    expect(counter).toHaveTextContent(/Count: 0 Previous Count: 1/i)
})

