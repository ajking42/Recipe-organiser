import React from "react";

function RecipeConfirmation(props) {
  return (
    <div>
      <form>
        <label htmlFor="name">Recipe Name: </label>
        <input name="name" value={props.name}></input>
        <img src={props.image}></img>

        <div>
          <label>Ingredients: </label>
          <ul>
            {props.ingredients.map((ingredient) => (
              <li>
                <input
                  defaultValue={ingredient}
                  key={ingredient}
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
              <li>
                <input
                  defaultValue={instruction}
                  key={index}
                  type="text"
                ></input>
              </li>
            ))}
          </ol>
        </div>

        <button type="submit">Save Recipe</button>
      </form>
    </div>
  );
}

export default RecipeConfirmation;
