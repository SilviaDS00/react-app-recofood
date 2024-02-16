// ImageUploadComponent.jsx

import React, { useState } from "react";
import PredictionComponent from "../../Prediction/Prediction";
import "./ImageUploadComponent.scss";

const ImageUploadComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    setLoading(true);
    // Aquí puedes realizar cualquier lógica de procesamiento o predicción
    // utilizando el componente de predicción (PredictionComponent)
    setLoading(false);
  };

  const handleDelete = () => {
    setSelectedImage(null);
  };

  return (
    <div className="image-upload-container">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="image-upload-input"
        id="fileInput" // Asociamos el id para el label
      />
      <label htmlFor="fileInput" className="custom-image-upload-label">
        <div className="custom-image-upload">Seleccionar Imagen</div>
      </label>
      {selectedImage && (
        <div className="selected-image-container">
          <img src={selectedImage} alt="Selected" className="selected-image" />
          <div className="button-container">
            <button onClick={handleUpload} className="upload-button">
              {loading ? "Cargando..." : "Subir Imagen"}
            </button>
            <button onClick={handleDelete} className="delete-button">
              Borrar Imagen
            </button>
          </div>
          {loading && (
            <p className="loading-message">
              Espera mientras se procesa la imagen...
            </p>
          )}
          <PredictionComponent imageSrc={selectedImage} />
        </div>
      )}
    </div>
  );
};

export default ImageUploadComponent;
