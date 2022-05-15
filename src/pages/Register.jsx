import { Button, TextField } from "@mui/material";
import React from "react";
import "../css/SignRegister.css";
const Register = () => {
    
  return (
    <>
        <div className="signin-container">
            <h4 className="">Register</h4>
            <TextField className="input" id="standard-basic" label="Fullname..." variant="standard" size="small" />
            <TextField className="input" id="standard-basic" label="Email..." variant="standard" size="small" />
            <TextField
                className="input"
                id="standard-basic"
                type="password"
                label="Password..."
                variant="standard"
                size="small"
            />
            <Button className="button" variant="contained" size="small">Register</Button>
            <p> Already have account? <a href="/signin">Sign in</a></p>
        </div>
    </>
  )
}

export default Register