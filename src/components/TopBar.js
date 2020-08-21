import React, { useContext, useEffect } from "react";
import { StepperContext } from "../ContextApp";

import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";

export const TopBar = () => {
  const context = useContext(StepperContext);

  useEffect(() => {
    console.log(`%cCurrent state: ${JSON.stringify(context)}`, "color:green");
  });

  const userName = context.firstName === "" ? "Guest" : context.firstName;
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className="{classes.menuButton}"
          color="inherit"
          aria-label="menu"
        ></IconButton>
        <Typography variant="h6" className="{classes.title}">
          Hello, {userName}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
