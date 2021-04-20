import styles from "../styles/NewRecipeForm.module.css";
import React, { useState } from "react";
import axios from "axios";

import RecipeConfirmation from "../components/RecipeConfirmation";

function NewRecipeForm() {
  const [inputVal, setInputVal] = useState("");
  const [recipe, setRecipe] = useState("");

  function handleChange(event) {
    setInputVal(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();

    const data = { url: inputVal };
    axios
      .post("http://localhost:5000/queryRecipeURL", data)
      .then((response) => {
        console.log("response: " + JSON.stringify(response.data));
        setRecipe(response.data);
      })
      .catch((error) => {
        console.log("error:" + error);
      });
  }

  return (
    <div className={styles["wrapper"]}>
      <form>
        <label htmlFor="url-input">New Recipe URL:</label>
        <input
          type="text"
          name="url-input"
          placeholder="https://www.recipes.com/tastyrecipe"
          value={inputVal}
          onChange={handleChange}
        />

        <button type="submit" onClick={handleClick} value="submit">
          Submit
        </button>
      </form>
      {recipe && (
        <RecipeConfirmation
          key={recipe.source}
          name={recipe.name}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          image={recipe.image}
        />
      )}
    </div>
  );
}

export default NewRecipeForm;
