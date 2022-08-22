import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Start = () => {
  return (
    <>
      <div className="form__style">
        <h1>Войти</h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField id="standard-basic" label="LogIn" variant="standard" />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
            />
          </div>
          <div className="m_l_button">
            <Button variant="contained" size="medium">
              Войти
            </Button>
            <div style={{ textAlign:"center" }}>  
              <span>У вас нет аккаунта?<br></br><a href="/login">Зарегеструроватся</a></span>
              
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};
