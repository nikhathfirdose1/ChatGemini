// App.js
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = async () => {
    const res = await axios.post('http://localhost:8000/query', { prompt });
    setResponse(res.data.response);
  };

  const handleCancel = () => {
    setPrompt('');
    setResponse('');
  };

  return (
    <div className="container">
      <h2>Gemini Chat</h2>
      <label>Prompt:</label>
      <textarea
        rows="4"
        placeholder="Type your query..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <div className="button-group">
        <button onClick={handleSend}>Send</button>
        <button className="cancel" onClick={handleCancel}>Cancel</button>
      </div>

      <label>Response:</label>
      <textarea
        rows="8"
        readOnly
        placeholder="Gemini response will appear here"
        value={response}
      />
    </div>
  );
}

export default App;
