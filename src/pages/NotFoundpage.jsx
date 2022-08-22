import { NavLink } from "react-router-dom";

const NotFoundpage = () => {
  return (
    <div>
      This page doesn't exist. Go
      <NavLink to="/"> home </NavLink>
    </div>
  );
};
export { NotFoundpage };