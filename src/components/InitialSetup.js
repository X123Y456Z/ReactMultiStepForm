import React, { useContext } from "react";
import { StepperContextDispatch } from "../ContextApp";

const InitialSetup = () => {
  const updateContext = useContext(StepperContextDispatch);

  const readFile = (event) => {
    const input = event.target;
    const reader = new FileReader();
    reader.onload = function () {
      const data = reader.result;
      const json = JSON.parse(data);
      updateContext.updateItem(json);

      const { email, firstName, lastName } = json;
      console.log(`%c${email},${firstName},${lastName}`, "color:green");
    };
    reader.readAsText(input.files[0]);
    input.value = "";
  };

  return (
    <div style={{ margin: "30px 0 0 30px" }}>
      <p style={{ fontFamily: "Arial", letterSpacing: "0.5px" }}>
        Select file for initial setup
      </p>
      <input type="file" onChange={readFile} accept=".json" />
    </div>
  );
};

export default InitialSetup;
