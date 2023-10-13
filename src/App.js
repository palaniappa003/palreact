import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  };

  // Split by whitespace, and filter out empty strings
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="App">
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        placeholder="Type your text here..."
        value={text}
        onChange={handleTextChange}
        rows="10"
        cols="50"
      ></textarea>
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default App;
