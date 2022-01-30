import './App.css';
import StateHook from './components/UseStateHookExample'
import ClassComponentWithState from './components/ClassComponentWithStateExample';
import UseEffectExample from './components/UseEffectExample';
import UseRefExample from './components/UseRefExample';

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
