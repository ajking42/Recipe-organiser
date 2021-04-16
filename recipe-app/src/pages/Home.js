import React, { useState } from "react";
import axios from "axios";

function Home() {
  const [inputVal, setInputVal] = useState("");

  function handleChange(event) {
    setInputVal(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();

    const data = { url: inputVal };
    axios
      .post("http://localhost:5000/getRecipe", data)
      .then((response) => {
        console.log("response: " + response.data);
      })
      .catch((error) => {
        console.log("error:" + error);
      });
  }

  function getAxios() {
    axios.get("http://localhost:5000/hello").then((response) => {
      console.log(response.data);
    });
  }

  getAxios();

  return (
    <div>
      <form>
        <label>
          Recipe URL:
          <input
            type="text"
            name="url"
            placeholder="Recipe URL"
            value={inputVal}
            onChange={handleChange}
          />
        </label>
        <button type="submit" onClick={handleClick} value="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Home;
