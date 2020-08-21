import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { StepperContext, StepperContextDispatch } from "../ContextApp";
import CryptoJS from "crypto-js";

const InputData = ({ prevStep, data }) => {
  const context = useContext(StepperContext);
  const updateContext = useContext(StepperContextDispatch);

  const saveData = (filename, data) => {
    console.log(`%cSaving file....${data}`, "color:red");

    // Set up the link
    var link = document.createElement("a");
    link.setAttribute("target", "_blank");
    if (Blob !== undefined) {
      var blob = new Blob([data], { type: "application/json" });
      link.setAttribute("href", URL.createObjectURL(blob));
    } else {
      link.setAttribute("href", "data:text/plain," + encodeURIComponent(data));
    }
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    updateContext.resetState();
  };
  const json = JSON.stringify(context);
  // const exc = CryptoJS.AES.encrypt(json, "12345");
  // const deect = CryptoJS.AES.decrypt(exc, "12345").toString(CryptoJS.enc.Utf8);
  console.log(`Context data ${json}`);
  // console.log(`Encrypted data ${exc}`);
  // console.log(`Decrypted data ${deect}`);
  return (
    <div>
      <pre>{JSON.stringify(context, null, 2)}</pre>
      <div style={{ marginTop: "20px" }}>
        <Button onClick={() => saveData("configurationFile.json", btoa(json))}>
          Save file
        </Button>
        <Button onClick={() => updateContext.updateItem({ activeStep: 1 })}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default InputData;
