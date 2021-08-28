import React, { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");

  function updateHeading(event) {
    setName(event.target.value);
  }
  function handleClick(event) {
    setHeadingText(name);
  }

  return (
    <div>
      <h1>Hello {headingText}</h1>
      <input 
        onChange={updateHeading} 
        type="text" 
        placeholder="What's your name?" 
        value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;