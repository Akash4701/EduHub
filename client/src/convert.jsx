import React, { useState } from 'react';
import axios from 'axios';

function Convert() {
  const [videoUrl, setVideoUrl] = useState('');
  const [audioUrl, setAudioUrl] = useState('');

  const handleConvert = async () => {
    try {
      const response = await axios.post('http://localhost:8000/convert', { videoUrl });
      setAudioUrl(response.data.audioUrl);
    } catch (error) {
      console.error('Error converting video to audio:', error);
    }
  };

  return (
    <div className="App">
      <h1>Video to Audio Converter</h1>
      <input
        type="text"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        placeholder="Enter Cloudinary video URL"
      />
      <button onClick={handleConvert}>Convert</button>
      {audioUrl && (
        <div>
          <h2>Converted Audio URL:</h2>
          <p>{audioUrl}</p>
        </div>
      )}
    </div>
  );
}

export default Convert;