import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  InputLabel,
  InputAdornment,
  Input,
  IconButton,
  FormControl,
} from "@mui/material";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// // import Backdrop from "@mui/material/Backdrop";
// // import CircularProgress from "@mui/material/CircularProgress";
// import InputLabel from "@mui/material/InputLabel";
// import InputAdornment from "@mui/material/InputAdornment";
// import Input from "@mui/material/Input";
// import IconButton from "@mui/material/IconButton";
// import FormControl from "@mui/material/FormControl";
import { Visibility, VisibilityOff } from "@mui/icons-material";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const Start = () => {
  // const [open, setOpen] = React.useState(false);
  // const handleClose = () => {
  //   setOpen(false);
  // };
  // const handleToggle = () => {
  //   setOpen(!open);
  // };
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
            <TextField
              helperText="Please enter your Email or Login"
              id="standard-basic"
              label="Email"
              variant="standard"
            />
          </div>
          <div>
            <FormControl variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div className="m_l_button">
            <Button
              sx={{ mt: 2 }}
              // onClick={handleToggle}
              component={Link}
              to="/main"
              variant="contained"
              size="medium"
            >
              Войти
            </Button>
            {/* <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
              onClick={handleClose}
            >
              <CircularProgress color="inherit" />
            </Backdrop> */}
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
