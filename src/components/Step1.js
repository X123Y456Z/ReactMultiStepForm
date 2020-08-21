import React, { useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { StepperContextDispatch, StepperContext } from "../ContextApp";

const InputData = () => {
  const updateContext = useContext(StepperContextDispatch);
  const context = useContext(StepperContext);

  const { register, handleSubmit, formState, setValue } = useForm({
    defaultValues: {}
  });

  const submitInputData = (data) => {
    updateContext.updateItem({
      firstName: data.firstName,
      lastName: data.lastName,
      activeStep: 1
    });
  };

  const { firstName, lastName } = context;

  return (
    <div>
      <form onSubmit={handleSubmit(submitInputData)}>
        <TextField
          name="firstName"
          label="First name"
          style={{ marginRight: "20px" }}
          inputRef={register}
          InputLabelProps={{ shrink: true }}
          defaultValue={firstName}
        />
        <TextField
          error={formState.isSubmitted & !formState.isValid ? true : false}
          name="lastName"
          label="Last name"
          inputRef={register({ required: true })}
          helperText={
            formState.isSubmitted & !formState.isValid
              ? "Last name now !"
              : "Please provide your last name"
          }
          InputLabelProps={{ shrink: true }}
          onChange={(e) => setValue(e.target.name, e.target.value, true)}
          defaultValue={lastName}
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
          <Button disabled className style={{ float: "right" }}>
            Back
          </Button>
        </div>
      </form>
    </div>
  );
};

export default InputData;
