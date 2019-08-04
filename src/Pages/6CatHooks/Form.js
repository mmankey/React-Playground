// https://gist.github.com/MostlyFocusedMike/e3b8e38ed6d525235f5205d4cc905a5a
// https://itnext.io/how-to-build-a-dynamic-controlled-form-with-react-hooks-2019-b39840f75c4f

import React, { useState } from "react";
import CatInputs from "./CatInputs";
import "./Form.css";

const Form = () => {
  const [ownerState, setOwnerState] = useState({
    owner: "",
    description: ""
  });

  const handleOwnerChange = e =>
    setOwnerState({
      ...ownerState,
      [e.target.name]: [e.target.value]
    });

  const blankCat = { name: "", age: "" };
  const [catState, setCatState] = useState([{ ...blankCat }]);

  const addCat = () => {
    setCatState([...catState, { ...blankCat }]);
  };

  const handleCatChange = e => {
    const updatedCats = [...catState];
    updatedCats[e.target.dataset.idx][e.target.className] = e.target.value;
    setCatState(updatedCats);
  };

  return (
    <div className="Parent">
      <form className="Child">
        <label htmlFor="owner">Owner</label>
        <input
          type="text"
          name="owner"
          id="owner"
          value={ownerState.owner}
          onChange={handleOwnerChange}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={ownerState.description}
          onChange={handleOwnerChange}
        />
        <input type="button" value="Add New Cat" onClick={addCat} />
        {catState.map((val, idx) => (
          <CatInputs
            key={`cat-${idx}`}
            idx={idx}
            catState={catState}
            handleCatChange={handleCatChange}
          />
        ))}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
