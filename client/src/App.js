import React, {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [members, setMembers] = useState(null);

  useEffect(()=>{
    (async()=>{

      const fetchedMem = await fetch('http://localhost:8080/api/members').then(res => res.json());
      setMembers(fetchedMem);

    })()
  }, [])

  return (
    <div className="App">
      <h1>This is a Docker test project.</h1>
      <p>using React, Node, and MySQL</p>
      {
        members ?
        <>
        <h2>Fetching data from API made from Node and MySQL</h2>
        {        
          members.map((item, index)=>{
            return <p key={index}>{item.name}({item.position})</p>
          })
        }
        </>
        : null
      }
    </div>
  );
}

export default App;
