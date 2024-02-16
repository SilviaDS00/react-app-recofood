/* App.js */

import React, { useState } from 'react';
import WebcamComponent from './components/Webcam/WebcamComponent';
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
            {showWebcam ? 'Cerrar Cámara' : 'Mostrar Webcam'}
          </button>
        </div>
        {showWebcam && <WebcamComponent />}
      </header>
    </div>
  );
}

export default App;
