import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
  MenuItem,
  useToast,
} from "@chakra-ui/react";
import { logout } from "../redux/authReducer/action";
export const Navbar = () => {
  {
    /* <div style={mystyle}> */
  }
  const auth = useSelector((state) => state.authReducer);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  return (
    <div className="mystyle">
      <div>
        {" "}
        <img
          onClick={() => nav("/")}
          src="logo.jpeg"
          alt=""
          style={{ width: "250px", cursor: "pointer" }}
        />
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
            <MenuItem onClick={() => nav("/blog_post")}>Add Blogs</MenuItem>
            <MenuItem
              onClick={() => {
                nav("/");
                dispatch(logout());
                toast({
                  title: `Logged out successful`,
                  status: "success",
                  position: "top-center",
                  duration: 2000,
                  isClosable: true,
                });
              }}
            >
              Logout
            </MenuItem>
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
