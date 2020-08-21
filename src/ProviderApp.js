import React, { Component } from "react";
import { StepperContext, StepperContextDispatch } from "./ContextApp";

class UserProvider extends Component {
  state = {
    activeStep: 0,
    firstName: "",
    lastName: "",
    email: "",
    occupation: ""
  };

  nextStep = () => {
    const { activeStep } = this.state;
    this.setState({ activeStep: activeStep + 1 });
  };

  resetToInitial = () => {
    this.setState({
      activeStep: 0,
      firstName: "",
      lastName: "",
      email: "",
      occupation: ""
    });
  };

  render() {
    return (
      <StepperContext.Provider value={this.state}>
        <StepperContextDispatch.Provider
          value={{
            updateItem: (item) => {
              this.setState(item);
            },
            resetState: () => this.resetToInitial()
          }}
        >
          {this.props.children}
        </StepperContextDispatch.Provider>
      </StepperContext.Provider>
    );
  }
}

export default UserProvider;
