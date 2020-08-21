import React, { useContext, useState } from "react";
import { StepperContextDispatch, StepperContext } from "../ContextApp";
import { isEqual } from "lodash";

//React configuration file

const InitialSetup = () => {
  const updateContext = useContext(StepperContextDispatch);
  const context = useContext(StepperContext);
  const [error, setError] = useState("");
  const [progress, setProgress] = useState("");

  const readFile = (event) => {
    const input = event.target;
    const reader = new FileReader();
    setProgress("Loading file....");

    reader.onload = function () {
      setProgress("");
      const data = reader.result;
      try {
        setError("");
        var json = JSON.parse(data);
      } catch (error) {
        setError("Invalid file format");
        return 0;
      }

      if (!isEqual(Object.keys(context), Object.keys(json))) {
        setError("Json file is not valid");
        return 0;
      } else {
      }
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
      <div
        style={{
          color: "crimson",
          marginTop: "15px",
          fontFamily: "Arial",
          fontWeight: "bold"
        }}
      >
        {error}
      </div>
      <div
        style={{
          color: "rgba(0,0,0,0.8)",
          marginTop: "15px",
          fontFamily: "Arial",
          fontWeight: "bold"
        }}
      >
        {progress}
      </div>
    </div>
  );
};

export default InitialSetup;
