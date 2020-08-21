import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Typography from "@material-ui/core/Typography";
import { TopBar } from "./components/TopBar";

import InputData from "./components/Step1";
import AdressDetails from "./components/Step2";
import Result from "./components/Results";
import InitialSetup from "./components/InitialSetup";

import { StepperContext } from "./ContextApp";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  }
}));

const VerticalLinearStepper = () => {
  const context = useContext(StepperContext);

  return (
    <div className="{classes.root}" style={{ width: "600px" }}>
      <TopBar />
      <InitialSetup />
      <Stepper activeStep={context.activeStep} orientation="vertical">
        <Step key="Basic data">
          <StepLabel>Input data</StepLabel>
          <StepContent>
            <Typography component={"span"}>
              <InputData />
            </Typography>
            <div className="{classes.actionsContainer}"></div>
          </StepContent>
        </Step>
        <Step key="Advanced data">
          <StepLabel>Advanced data</StepLabel>
          <StepContent>
            <Typography component={"span"}>
              <AdressDetails />
            </Typography>
            <div className="{classes.actionsContainer}"></div>
          </StepContent>
        </Step>
        <Step key="Submitted data">
          <StepLabel>Submitted data</StepLabel>
          <StepContent>
            <Typography component={"span"}>
              <Result />
            </Typography>
            <div className="{classes.actionsContainer}"></div>
          </StepContent>
        </Step>
      </Stepper>
    </div>
  );
};

export default VerticalLinearStepper;
