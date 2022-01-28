import logo from './logo.svg';
import './App.css';
import StateHook from './components/UseStateHookExample'
import ClassComponentWithState from './components/ClassComponentWithStateExample';
import UseEffectExample from './components/UseEffectExample';

function App() {
  return (
    <div className="App">
      < StateHook />
      <ClassComponentWithState />
      <UseEffectExample />
    </div>
  );
}

export default App;
