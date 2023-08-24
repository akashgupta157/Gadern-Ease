import React, { useState } from "react";
import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLoading } from "react-icons/ai";
import { BiErrorCircle, BiHide, BiShow } from "react-icons/bi";
import { url } from "../components/url";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react";
// import { login } from "../redux/reducers/authReducer/action";
// import { useDispatch } from "react-redux";
const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const Nav = useNavigate();
  // const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const handleSubmitForm = async (data) => {
    const userData = {
      email: data.email,
      password: data.password,
    };
    setLoading(true);
    await axios.post(`${url}/users/login`, userData).then((res) => {
      if (res.data.auth) {
        toast({
          title: `${res.data.message}`,
          status: "success",
          position: "top-center",
          duration: 2000,
          isClosable: true,
        });
        // dispatch(login(res.data));
        setLoading(false);
        setTimeout(() => {
          Nav("/");
        }, 1500);
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
  };
  return (
    <Div>
      <div>
        <h1>Login</h1>
        <p>
          New user? <Link to="/register">Create an account</Link>
        </p>
        <form action="" onSubmit={handleSubmit(handleSubmitForm)}>
          <label htmlFor="email">email address</label>
          <input
            type="email"
            name="email"
            {...register("email", {
              required: true,
              pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
          />
          {errors?.email?.type === "required" && (
            <p>
              <BiErrorCircle /> This field is required
            </p>
          )}
          {errors?.email?.type === "pattern" && (
            <p>
              <BiErrorCircle /> Invalid email address
            </p>
          )}
          <label htmlFor="password">password</label>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              {...register("password", {
                required: true,
                minLength: 8,
              })}
            />
            <p onClick={handleToggleShowPassword}>
              {showPassword ? <BiShow /> : <BiHide />}
            </p>
          </div>
          {errors?.password?.type === "required" && (
            <p>
              <BiErrorCircle /> This field is required
            </p>
          )}
          {errors?.password?.type === "minLength" && (
            <p>
              <BiErrorCircle /> Password must be 8 characters
            </p>
          )}
          <button type="submit">
            {loading ? (
              <AiOutlineLoading className="infinity-rotation" />
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </Div>
  );
};
const Div = styled.div`
  background-image: url("https://images.unsplash.com/photo-1636525653613-2a3a05c00759?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGxhbnRzJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww&w=1000&q=80");
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: candara;
  > div {
    backdrop-filter: blur(6px);
    background-color: white;
    height: 80vh;
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
      color: blue;
      text-decoration: underline;
    }
    form {
      display: flex;
      flex-direction: column;
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
          cursor: pointer;
        }
      }
      button {
        color: white;
        background-color: black;
        padding: 9px 15px;
        font-size: large;
        width: 100px;
        margin: auto;
        font-weight: bold;
        border-radius: 10px;
        margin-top: 20px;
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
export default Login;
