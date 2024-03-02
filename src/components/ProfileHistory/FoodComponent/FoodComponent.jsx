import React from "react";
import "./FoodComponent.scss"; // Ruta al archivo SCSS

export function FoodComponent(props) {
  const { history } = props;
  return (
    <>
      <div className="card">
        <p className="title">{history.attributes.food}</p>
        <div className="macros">
          <p>Calorías: <b>{history.attributes.macros.calories}</b></p>
          <p>Proteínas: <b>{history.attributes.macros.protein}g</b></p>
          <p>Carbohidratos: <b>{history.attributes.macros.carbs}g</b></p>
          <p>Grasas: <b>{history.attributes.macros.fat}g</b></p>
        </div>
        <p className="updatedAt">Fecha: {history.attributes.updatedAt}</p>
      </div>
    </>
  );
}
