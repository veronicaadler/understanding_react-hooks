import './App.css';
import StateHook from './components/UseState/UseStateHookExample'
import ClassComponentWithState from './components/ClassComponent/ClassComponentWithStateExample';
import UseEffectExample from './components/UseEffect/UseEffectExample';
import UseRefExample from './components/UseRef/UseRefExample';

function App() {
  return (
    <div className="App">
      <StateHook />
      <ClassComponentWithState />
      <UseEffectExample />
      <UseRefExample />
    </div>
  );
}

export default App;
