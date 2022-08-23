import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export const Start = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Войти</h1>
      </div>
      <div className="form__style">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField id="standard-basic" label="Email" variant="standard" />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
            />
          </div>
          <div className="m_l_button">
            <Button onClick={handleToggle} variant="contained" size="medium">
              Войти
            </Button>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
              onClick={handleClose}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <span>
                У вас нет аккаунта?<br></br>
                <Link to="/login">Зарегестрироватся</Link>
              </span>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};
