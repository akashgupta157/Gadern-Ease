import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
} from "@chakra-ui/react";
import { logout } from "../redux/authReducer/action";
import { useDispatch, useSelector } from "react-redux";
export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const auth = useSelector((state) => state.authReducer);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img
            src={logo}
            alt=""
            style={{ width: "250px", cursor: "pointer" }}
          />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <HamburgerIcon />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/plants">Gardening Practice</NavLink>
            </li>
            <li>
              {auth.isAuthenticated ? (
                <Menu>
                  <MenuButton sx={{ fontWeight: "bold", color: "green" }}>
                    Hi {auth?.user.user.name}
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => nav("/blog_post")}>
                      Add Blogs
                    </MenuItem>
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
                <NavLink to="/register">Signup</NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};