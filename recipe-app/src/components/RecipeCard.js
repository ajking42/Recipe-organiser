import React from "react";

function RecipeCard(props) {
 
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <img src={props.image} alt="Recipe"></img>
    </div>
  );
}

export default RecipeCard;
