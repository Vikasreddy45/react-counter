import React,{useState} from "react"
import './App.css';

function App() {
  const [count,setCount] = useState(0)
  return (
    <div className="App">
      {/* <h1>React is fun to learn.</h1> */}
      <div>
      <h1>The count is {count}</h1>
      </div>
      <button onClick={()=>setCount(0)}>Reset</button>
      <button onClick={()=>count>=10?"":setCount(count+1)}>Increment</button>
      <button onClick={()=>count<=0?"":setCount(count-1)}>Decrement</button>
    </div>
  );
}

export default App;
