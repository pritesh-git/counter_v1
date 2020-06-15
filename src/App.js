import React, { useState } from 'react';
import './App.css';

function App() {
  const [numbr,setnumbr] = useState(0);

  const handleInc=()=>{if(numbr<50) setnumbr(numbr+1);}
  const handleDec=()=>{if(numbr>0) setnumbr(numbr-1);}

  return (
    <div className="main">
      <h1>{numbr}</h1>
      <button onClick={handleDec}>-</button>
      <button onClick={handleInc}>+</button>
    </div>
  );
}

export default App;
