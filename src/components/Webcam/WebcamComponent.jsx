import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import PredictionComponent from "../../Prediction/Prediction";
import "./WebcamComponent.scss";

const WebcamComponent = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [loading, setLoading] = useState(false);



  const capture = async () => {
    setLoading(true);
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    setLoading(false);
  };

  return (
    <div className="webcam-container">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="webcam"
      />
      <button onClick={capture} className="capture-button">
        {loading ? "Cargando..." : "Capturar Foto"}
      </button>

      {loading && (
        <p className="loading-message">Espera mientras se carga la webcam...</p>
      )}

      {capturedImage && (
        <div className="captured-image-container">
          <h2>Imagen Capturada:</h2>
          <img src={capturedImage} alt="Captured" className="captured-image" />
          <a
            href={capturedImage}
            download="captured_image.jpg"
            className="download-link"
          >
            Descargar Imagen
          </a>
          <PredictionComponent imageSrc={capturedImage} />
        </div>
      )}
    </div>
  );
};

export default WebcamComponent;
