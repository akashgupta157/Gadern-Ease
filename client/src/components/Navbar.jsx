import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const allname = {
  margin: "24px",
  textAlign: "center",
  fontSize: "15px",
  fontWeight: "bold",
  backgroundColor: "#F5F5F5",
  fontFamily: " Roboto, sans-serif ",
  color: "#404040",
};
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from "@chakra-ui/react";
export const Navbar = () => {
  {
    /* <div style={mystyle}> */
  }
  const auth = useSelector((state) => state.authReducer);
  const nav= useNavigate()
  return (
    <div className="mystyle">
      <div>
        {" "}
        <img src="logo.jpeg" alt="" style={{ width: "250px" }} />
      </div>

      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <h3 style={allname}>Home </h3>
      </Link>
      <Link to="/plants" style={{ textDecoration: "none", color: "black" }}>
        <h3 style={allname}>Gardening Practice</h3>
      </Link>
      <Link to="/plants" style={{ textDecoration: "none", color: "black" }}>
        <h3 style={allname}>Plants</h3>
      </Link>
      <Link to="/plants" style={{ textDecoration: "none", color: "black" }}>
        <h3 style={allname}>Perennials</h3>
      </Link>
      <Link to="/plants" style={{ textDecoration: "none", color: "black" }}>
        <h3 style={allname}>Trees & Shrubs</h3>
      </Link>

      <Link to="/plants" style={{ textDecoration: "none", color: "black" }}>
        <h3 style={allname}>Topics</h3>
      </Link>
      {auth.isAuthenticated ? (
        <Menu>
          <MenuButton sx={{ fontWeight: "bold", color: "green" }}>
            Hi {auth?.user.user.name}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={()=>nav('/blog_post')}>Add Blogs</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Link to="/register" style={{ textDecoration: "none", color: "black" }}>
          <h3 style={allname}>SignUp</h3>
        </Link>
      )}
    </div>
  );
};
