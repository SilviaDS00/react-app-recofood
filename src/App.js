/* App.js */

import React, { useState } from 'react';
import WebcamComponent from './components/Webcam/WebcamComponent';
import ImageUploadComponent from './components/ImageUpload/ImageUploadComponent';
import './App.scss';

function App() {
  const [showWebcam, setShowWebcam] = useState(false);

  const handleButtonClick = () => {
    setShowWebcam(!showWebcam);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="button-wrapper">
          <button className="button-styled" onClick={handleButtonClick}>
            {showWebcam ? 'Cerrar Cámara' : 'Hacer Foto con Cámara'}
          </button>
        </div>
        {showWebcam && <WebcamComponent />}
        <h1>O</h1>
        <ImageUploadComponent />
      </header>
    </div>
  );
}

export default App;
