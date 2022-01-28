import { Component } from "react";

class ClassComponentWithState extends Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0}
    }

    render() {
        return (
            <div>
            <h1>This is an example of a React Class Component with state.</h1>
            <p>Count: {this.state.counter}</p>
            <button onClick={() => this.setState((prevState, { counter }) => ({ counter: prevState.counter + 1}))}>Increment</button>
            <button onClick={() => this.setState((prevState, { counter }) => ({ counter: prevState.counter - 1}))}>Decrement</button>
        </div>
        )
    }
}

export default ClassComponentWithState;