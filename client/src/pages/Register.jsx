import React, { useState } from "react";
import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { AiFillCamera, AiOutlineLoading } from "react-icons/ai";
import { BiErrorCircle, BiHide, BiShow } from "react-icons/bi";
import { url } from "../components/url";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
export const Register = () => {
  const Nav = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordErrors, setPasswordErrors] = useState({
    isMinimumLength: true,
    hasUppercase: true,
    hasLowercase: true,
    hasNumber: true,
    hasSpecialChar: true,
  });
  const [name, setName] = useState("");
  const [isValidName, setIsValidName] = useState(true);
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setIsValidEmail(isValid);
    return isValid;
  };
  const validatePassword = (password) => {
    const isMinimumLength = password.length >= 8;
    setPasswordErrors({
      isMinimumLength,
    });
    return isMinimumLength;
  };
  const validateName = (name) => {
    // const nameRegex = /^[A-Za-z\s]+$/;
    const isValidLength = name.trim().length >= 3;
    // const isValidFormat = nameRegex.test(name);
    setIsValidName(isValidLength);
    return isValidLength;
  };
  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    validateEmail(emailValue);
  };
  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    validatePassword(passwordValue);
  };
  const handleNameChange = (event) => {
    const nameValue = event.target.value;
    setName(nameValue);
    validateName(nameValue);
  };
  const [profilePic, setProfilePic] = useState(
    "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
  );
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setProfilePic(e.target.result);
    };
    reader.readAsDataURL(file);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "chat-app");
    data.append("cloud_name", "dvbh3e4ck");
    fetch(`https://api.cloudinary.com/v1_1/dvbh3e4ck/image/upload`, {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => setProfilePic(data.url));
  };
  const handleUploadClick = () => {
    document.querySelector(".file-upload").click();
  };
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const isFormValid =
      isValidEmail && validatePassword(password) && isValidName;
    if (isFormValid) {
      setLoading(true);
      const formData = {
        name,
        email,
        password,
        profilePicture: profilePic,
      };
      await axios.post(`${url}/users/register`, formData).then((res) => {
        if (res.data.auth) {
          toast({
            title: `${res.data.message}`,
            status: "success",
            position: "top-center",
            duration: 2000,
            isClosable: true,
          });
          setLoading(false);
          Nav("/login");
        } else {
          toast({
            title: `${res.data.message}`,
            status: "error",
            position: "top-center",
            duration: 2000,
            isClosable: true,
          });
          setLoading(false);
        }
      });
    } else {
      setIsValidEmail(false);
      setIsValidName(false);
    }
  };
  return (
    <Div>
      <div>
        <h1>Create an account</h1>
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
        <form action="" onSubmit={handleSubmit}>
          <div className="row">
            <div className="circle">
              <img className="profile-pic" src={profilePic} alt="Profile" />
            </div>
            <div className="p-image">
              <AiFillCamera
                onClick={handleUploadClick}
                className="upload-button"
              />
              <input
                className="file-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>
          <label htmlFor="name"> full name</label>
          <input
            type="text"
            id="name"
            autoComplete="off"
            name="name"
            value={name}
            required
            onChange={handleNameChange}
          />
          {!isValidName && (
            <p>
              <BiErrorCircle /> Please enter a valid name (minimum 3 characters
              and letters)
            </p>
          )}
          <label htmlFor="email">email address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            autoComplete="off"
            required
            onChange={handleEmailChange}
          />
          {!isValidEmail && (
            <p>
              <BiErrorCircle /> Please enter a valid email address
            </p>
          )}
          <label htmlFor="password">password</label>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              autoComplete="off"
              required
              onChange={handlePasswordChange}
            />
            <p onClick={handleToggleShowPassword}>
              {showPassword ? <BiShow /> : <BiHide />}
            </p>
          </div>
          {!passwordErrors.isMinimumLength && (
            <p>
              <BiErrorCircle />
              Password should be at least 8 characters long.
            </p>
          )}
          <button type="submit">
            {loading ? (
              <AiOutlineLoading className="infinity-rotation" />
            ) : (
              "Register"
            )}
          </button>
        </form>
      </div>
    </Div>
  );
};
const Div = styled.div`
  background-image: url("https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700372939.jpg");
  height: 100vh;
  background-repeat: no-repeat;
  background-size: 100%;
  font-family: candara;
  > div {
    background-color: white;
    height: 90vh;
    width: 35%;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-30%, -50%);
    border-radius: 5px;
    padding: 50px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    h1 {
      font-size: 40px;
      font-weight: bolder;
    }
    a {
      color: #14a3f1;
    }
    form {
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
      height: 85%;
      &::-webkit-scrollbar {
        display: none;
      }
      .row {
        height: 120px;
      }
      .profile-pic {
        width: 120px;
        height: 120px;
        display: inline-block;
      }
      .file-upload {
        display: none;
      }
      .circle {
        border-radius: 100% !important;
        overflow: hidden;
        width: 120px;
        height: 120px;
        border: 2px solid rgba(255, 255, 255, 0.2);
        margin: auto;
      }
      img {
        max-width: 100%;
        height: auto;
      }
      .p-image {
        position: relative;
        right: 40%;
        top: 85px;
        color: #666666;
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        cursor: pointer;
      }
      .p-image:hover {
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      .upload-button {
        font-size: 1.5em;
      }
      .upload-button:hover {
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        color: #999;
      }
      label {
        margin-top: 16px;
        font-weight: bold;
        font-size: 18px;
        text-transform: capitalize;
      }
      input {
        outline: none;
        border-bottom: 1px solid black;
        &:focus {
          border-bottom: 2px solid blue;
        }
      }
      > p {
        display: flex;
        align-items: center;
        gap: 5px;
        color: red;
        font-size: small;
      }
      div {
        display: flex;
        justify-content: space-between;
        input[type="password"] {
          width: 100%;
        }
        p {
          font-size: larger;
          color: #747474;
          cursor: pointer;
        }
      }
      #category {
        justify-content: left;
        gap: 20px;
        section {
          display: flex;
          align-items: center;
          justify-content: left;
          gap: 10px;
        }
      }
      button {
        color: white;
        background-color: black;
        padding: 9px 15px;
        font-size: large;
        width: 110px;
        margin: auto;
        font-weight: bold;
        border-radius: 10px;
        margin-top: 15px;
        @-webkit-keyframes rotating {
          from {
            -webkit-transform: rotate(0deg);
          }
          to {
            -webkit-transform: rotate(360deg);
          }
        }
        .infinity-rotation {
          -webkit-animation: rotating 1s linear infinite;
          font-size: large;
          font-weight: bold;
          margin: auto;
        }
      }
    }
  }
  @media screen and (min-width: 866px) and (max-width: 1024px) /* Laptop */ {
    > div {
      width: 40%;
      padding: 20px 30px 30px 30px;
    }
  }
  @media screen and (min-width: 481px) and (max-width: 865px) /* Tablet */ {
    background-size: 125%;
    > div {
      width: 60%;
      padding: 20px 30px 30px 30px;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  @media screen and (max-width: 480px) /* Mobile */ {
    background-size: 300%;
    > div {
      height: max-content;
      width: 95%;
      padding: 20px 30px 30px 30px;
      left: 50%;
      transform: translate(-50%, -50%);
      h1 {
        font-size: 30px;
      }
    }
  }
`;
