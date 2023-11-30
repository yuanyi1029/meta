import { useState, useRef } from "react"; 
import "./App.css";

// In the function form, React guarantees that the function inside setResult will 
// be called with the latest state at the time the update is processed with the 
// previous result passed as a parameter. This ensures that the most up-to-date 
// state will be used for the update, which is important where state updates might
// happen asynchronously. 

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
    // setResult(result + Number(inputRef.current.value)); 
  }; 
  
  function minus(e) { 
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value)); 
    // setResult(result - Number(inputRef.current.value)); 
  };
  
  function times(e) { 
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value)); 
    // setResult(result * Number(inputRef.current.value)); 
  }; 
  
  function divide(e) { 
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value)); 
    // setResult(result / Number(inputRef.current.value)); 
  };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = 0; 
  }; 
 
  function resetResult(e) { 
    e.preventDefault();
    setResult(0);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={ resultRef }> 
          { result }
        </p> 
        <input
          pattern="[0-9]" 
          ref={ inputRef } 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={ plus }>add</button> 
        <button onClick={ minus }>subtract</button> 
        <button onClick={ times }>multiply</button> 
        <button onClick={ divide }>divide</button> 
        <button onClick={ resetInput }>reset input</button> 
        <button onClick={ resetResult }>reset result</button> 
      </form> 
    </div> 
  ); 
} 
 
export default App; 
