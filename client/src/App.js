import React, {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [info, setInfo] = useState(null);

  useEffect(()=>{
    (async()=>{
      const response = await fetch('http://localhost:8080').then(res => res.json());
      setInfo(response);
    })()
  }, [])

  return (
    <div className="App">
      <h1>Hello World! This is a ReactJS App!!</h1>
      {
        info ? <p>{info.message}</p> : null
      }
    </div>
  );
}

export default App;
