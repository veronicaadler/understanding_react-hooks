import { useRef, useState } from "react";

//Please note that useRef has several ways it can be used.  While not demonstrated here, it can also be used
//to store references to DOM elements and allow you to, for example, utilize .focus() on that element.

const UseRefExample = () => {
    const prevCount = useRef(0); //returns a mutable object with a current property holding the current value.
    //updating the value of useRef will not cause the component to re-render.  This is the main difference
    //between a value held in useRef and one stored in useState. 

    const [ counter, setCounter ] = useState(0);
    
    return (
        <div>
            <h1>This is an example of the useRef hook.</h1>
            <p>Count: {counter} Previous Count: {prevCount.current}</p>

            <button 
                onClick={() => setCounter(prevState => {
                    prevCount.current = prevState;
                    return prevState + 1
                })}
            >Increment
            </button>
            <button onClick={() => setCounter(prevState => {
                    prevCount.current = prevState;
                    return prevState - 1
                })}>Decrement</button>
        </div>
      );
}
 
export default UseRefExample;