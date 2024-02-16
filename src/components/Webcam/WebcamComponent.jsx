import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import "./WebcamComponent.scss";


    const WebcamComponent = () => {
      const webcamRef = useRef(null);
      const [capturedImage, setCapturedImage] = useState(null);
      const [loading, setLoading] = useState(false);
      const [prediction, setPrediction] = useState("");

      const capture = async () => {
        setLoading(true);
        const imageSrc = webcamRef.current.getScreenshot();
        setCapturedImage(imageSrc);


        class L2 {
          static className = "L2";
         
          constructor(config) {
            return tf.regularizers.l1l2(config);
          }
        }
        tf.serialization.registerClass(L2);

        await tf.ready();

        const model = await tf.loadLayersModel("/model/model.json", {
          customObjects: { l2: tf.regularizers.l2 },
        });

        // Preprocesar la imagen
        const img = new Image();
        img.src = imageSrc;
        await img.decode();
        const tensor = tf.browser
          .fromPixels(img)
          .resizeNearestNeighbor([224, 224])
          .toFloat()
          .expandDims();

        // Realizar la predicción
        const predictions = await model.predict(tensor).data();
        const maxPrediction = Math.max(...predictions);
        const predictedClass = predictions.indexOf(maxPrediction);

        setPrediction(`La comida es de la clase: ${predictedClass}`);

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
          <p>{prediction}</p>
        </div>
      )}
    </div>
  );
};

export default WebcamComponent;
