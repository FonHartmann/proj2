import { Link } from "react-router-dom";
import * as React from "react";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";

export const Header = () => {
  return (
    <>
      <div>
        <header className="header__style">
          <nav className="nav__buttons">
            <Stack spacing={1} direction="row">
              <Button variant="contained" component={Link} to="/">
                Home
              </Button>
              <Button variant="contained" component={Link} to="/login">
                LogIn
              </Button>
            </Stack>
          </nav>
        </header>
      </div>
    </>
  );
};
