import { Button, TextField } from "@mui/material";
import React from "react";
import "../css/SignRegister.css";
const Sign = () => {
  return (
    <>
      <div className="signin-container">
            <h4 className="">Sign in</h4>
            <TextField className="input" id="standard-basic" label="Email..." variant="standard" size="small" />
            <TextField
                className="input"
                id="standard-basic"
                type="password"
                label="Password..."
                variant="standard"
                size="small"
            />
            <Button className="button" variant="contained" size="small">Sign in</Button>
            <p> Don't have account? <a href="/register">Register</a></p>
        </div>
    </>
  );
};

export default Sign;
