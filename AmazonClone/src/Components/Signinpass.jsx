import React, { useState, useEffect } from "react";

const Signinpass = () => {


  const handleLogin = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = storedUsers.find(
      (user) => user.email === credentials.email && user.password === credentials.password
    );

    if (!foundUser) {
      setError("Invalid email or password!");
      return;
    }

    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("loggedInUser", JSON.stringify(foundUser)); 

    if (foundUser.role === "admin") {
      navigate("/members");
    } else {
      navigate("/"); 
    }
  };
  return (
    // image
    <div style={{ padding: "100px 800px" }}>
      <img
        style={{ height: "60px", objectFit: "contain", paddingLeft: "90px" }}
        src="Login.png"
        alt="image"
      />
      {/* Box */}
      <div
        style={{
          height: "200px",
          width: "350px",
          border: "2px solid lightgray",
          padding: "20px 20px 200px 20px",
        }}
      >
        <p style={{ padding: "15px 0px 0px px", fontSize: "2rem" }}>
          Sing in
        </p>
        <div style={{margin:"12px"}}>
          <a style={{textDecoration:"none", }} href="">Change</a>
        </div>

        {/* input */}
        <div>
          {/* <a href="">Change</a> */}

          <label style={{ display: "flex", gap: "120px" }} htmlFor="email">
            <p style={{fontWeight:"bolder", }}>Password</p>
            <a style={{textDecoration:"none"}} href="">Forgot Password?</a>
          </label>

          <input
            style={{
              width: "100%",
              padding: "5px",
              borderRadius: "5px",
              border: "2px solid lightgray",
              // textDecoration:"none"
            }}
            type="password"
          />
          {/*  botton  */}
          <div>
            <br />
            <button   onClick={handleLogin}
              style={{
                backgroundColor: "#f7ca00",
                border: "none",
                borderRadius: "50px",
                width: "100% ",
                padding: "7px",
              
              }}
            >
              Sign in
            </button>
        
          </div>
        </div>
      </div>
      <br /> <br />
      <div style={{ width: "100%", border: "1px solid lightgray" }}></div>
      <br /> <br />
      <div style={{ display: "flex", gap: "20px",paddingLeft:"30px" }}>
        <a style={{textDecoration:"none", }} href="">Conditions of Use </a>
        <a style={{textDecoration:"none", }} href=""> Privacy Notice </a>
        <a style={{textDecoration:"none", }} href=""> Help </a>
      </div>
      <br />
      <p style={{paddingLeft:"30px" }}>© 1996-2025, Amazon.com, Inc. or its affiliates</p>
    </div>
  );
};

export default Signinpass;
