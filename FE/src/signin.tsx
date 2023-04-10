import React from "react";
import {message, notification } from "antd";
import { useForm } from "react-hook-form";
import { login } from "./api/auth";
import { useNavigate } from "react-router-dom";
import { CSSProperties } from 'react'
type Props = {};

const Signin: React.FC = (props: Props) => {
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onHandleSubmit = async (data: any) => {
    try {
      const { data: user } = await login(data);
      localStorage.setItem('user', JSON.stringify(user));
      api["success"]({
        message: "Login successful!",
      });
      setTimeout(function () {
        navigate("/admin");
      }, 1500);
      console.log(message);
      
    } catch (error:any) {
      const {message} = error.response.data
      console.log(message)
    }
  };
    return (
      <div className="Login">
        <div className="grap-Login">
        <div className="square" style={{ "--i": 0 }as CSSProperties}></div>
        <div className="square" style={{ "--i": 1 }as CSSProperties}></div>
        <div className="square" style={{ "--i": 2 }as CSSProperties}></div>
        <div className="square" style={{ "--i": 3 }as CSSProperties}></div>
        <div className="square" style={{ "--i": 5 }as CSSProperties}></div>
          <div className="form">
              <h1>Sign-Up Form</h1>
              <form action="" className="form-signup" onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="inputBox">
                    <input type="text" placeholder="Email" id="Email" {...register("email")}/>
                </div>
                <div className="inputBox">
                  <input type="password" placeholder="Password" id="password" {...register("password")}/>
                </div>
                <div className="inputBox">
                  {contextHolder}
                  <input type="submit" value="Sign Up" id="signUP"/>
                </div>
              </form>
            </div>
        </div>
      </div>
    )
  }
  export default Signin