import React, { useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { StepperContextDispatch, StepperContext } from "../ContextApp";

const AdditionalData = ({ nextStep, prevStep, values, defaults }) => {
  const updateContext = useContext(StepperContextDispatch);
  const context = useContext(StepperContext);
  const { register, handleSubmit } = useForm({
    defaultValues: {}
  });

  const submitInputData = (data) => {
    updateContext.updateItem({
      email: data.email,
      occupation: data.occupation,
      activeStep: 2
    });
  };

  const { email, occupation } = context;

  return (
    <div>
      <form onSubmit={handleSubmit(submitInputData)}>
        <TextField
          name="email"
          label="Email adress"
          helperText="Provide email adress..."
          style={{ marginRight: "20px" }}
          inputRef={register}
          InputLabelProps={{ shrink: true }}
          defaultValue={email}
        />
        <TextField
          name="occupation"
          label="Occupation"
          inputRef={register}
          InputLabelProps={{ shrink: true }}
          defaultValue={occupation}
        />
        <div style={{ marginTop: "20px" }}>
          <Button
            variant="contained"
            color="primary"
            className="{classes.button}"
            type="submit"
          >
            Next
          </Button>
          <Button
            onClick={() => updateContext.updateItem({ activeStep: 0 })}
            className
            style={{ float: "right" }}
          >
            Back
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdditionalData;
