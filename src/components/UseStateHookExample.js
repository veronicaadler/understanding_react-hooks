import { useState } from "react";

const StateHook = () => {

    const [ counter, setCounter ] = useState(0);

    return (
        <div>
            <h1>This is an example of a React state hook within a functional, stateless component.</h1>
            <p>Count: {counter}</p>
            <button onClick={() => setCounter(prevState => prevState + 1)}>Increment</button>
            <button onClick={() => setCounter(prevState => prevState - 1)}>Decrement</button>
        </div>
      );
}
 
export default StateHook;