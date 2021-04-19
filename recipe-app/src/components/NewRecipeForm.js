import styles from "../styles/NewRecipeForm.module.css";
import React, { useState } from "react";
import axios from "axios";

function NewRecipeForm() {
  const [inputVal, setInputVal] = useState("");

  function handleChange(event) {
    setInputVal(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();

    const data = { url: inputVal };
    axios
      .post("http://localhost:5000/saveNewRecipe", data)
      .then((response) => {
        console.log("response: " + response.data);
      })
      .catch((error) => {
        console.log("error:" + error);
      });
  }

  return (
    <div className={styles['wrapper']}>
      <form>
        <label for="url-input">New Recipe URL:</label>
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
    </div>
  );
}

export default NewRecipeForm;
