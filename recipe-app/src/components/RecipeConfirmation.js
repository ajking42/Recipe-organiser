import React, { useState } from "react";
import Axios from "axios";

function RecipeConfirmation(props) {
  console.log(props);
  const [recipe] = useState({
    name: props.name,
    source: props.source,
    ingredients: props.ingredients,
    instructions: props.instructions,
    image: props.image,
  });

  function handleChange(event) {
    const dataType = event.target.dataset.type;
    let index = event.target.dataset.index;
    if (!index) {
      recipe[dataType] = event.target.value;
    } else {
      recipe[dataType][index] = event.target.value;
    }
    console.log(recipe);
  }

  function handleClick(event) {
    event.preventDefault();
    Axios
      .post("http://localhost:5000/saveRecipe", recipe)
      .then((response) => {
        console.log("response: " + JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log("error:" + error);
      });

  }

  return (
    <div>
      <form>
        <label htmlFor="name">Recipe Name: </label>
        <input
          defaultValue={props.name}
          data-type={"name"}
          // data-index={false}
          onChange={handleChange}
          type="text"
        ></input>
        <img src={props.image} alt="Recipe"></img>

        <div>
          <label>Ingredients: </label>
          <ul>
            {props.ingredients.map((ingredient, index) => (
              <li key={ingredient}>
                <input
                  defaultValue={ingredient}
                  data-type={"ingredients"}
                  data-index={index}
                  onChange={handleChange}
                  type="text"
                ></input>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <label>Instructions: </label>
          <ol>
            {props.instructions.map((instruction, index) => (
              <li key={index}>
                <input
                  defaultValue={instruction}
                  data-type={"instructions"}
                  data-index={index}
                  onChange={handleChange}
                  type="text"
                ></input>
              </li>
            ))}
          </ol>
        </div>

        <button type="submit" onClick={handleClick}>
          Save Recipe
        </button>
      </form>
    </div>
  );
}

export default RecipeConfirmation;
