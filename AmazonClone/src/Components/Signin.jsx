import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signin = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = storedUsers.find(
      (user) =>
        user.email === credentials.email &&
        user.password === credentials.password
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
  
  

  
  // const Signin = () => {
  return (
    <main style={{ backgroundColor: "#ffff" }}>
      <div style={{ padding: "20px", alignItems: "center" }}>
        <img
          src="./Login.png"
          alt="image"
          style={{
            height: "auto",
            width: "200px",
            marginLeft: "44%",
            marginBottom: "10px",
            objectFit: "contain",
          }}
        />
        <div
          style={{
            backgroundColor: "White",
            height: "550px",
            width: "550px",
            marginLeft: "35%",
            borderRadius: "20px",
            border: "1px solid lightgray",
            paddingBottom: "35px",
            alignItems: "center",
          }}
        >
          <div style={{ marginLeft: "40px", marginTop: "30px" }}>
            <p style={{ fontSize: "32px" }}>Sign in or creat account</p>
            <br />
            <label htmlFor="email" style={{ fontSize: " 12px" }}>
              <h1>Enter mobile number or email</h1>
            </label>{" "}
            <br />
            <input 
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              type="email"
              // value={user.email}

              style={{
                padding: "15px",
                width: "450px",
                borderRadius: "5px",
                border: "2px solid lightgray",

                // boxShadow: "10px 05px 10px lightBlue,-10px -5px 10px lightBlue",
              }}
              // onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            {/* {error.email && <p>{error.email}</p>} */}

            <br /> <br />
            <label htmlFor="password" style={{ fontSize: " 12px" }}><h2> Password</h2></label>
            <input
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              style={{
                padding: "15px",
                width: "450px",
                borderRadius: "5px",
                  border:"2px solid lightgray"
                // boxShadow: "10px 05px 10px lightBlue,-10px -5px 10px lightBlue",
              }}
              type="password"
            />
            <br /> <br />
            {/* <Link to={"/signipass"}> */}
              <button
              onClick={handleLogin}


                style={{
                  backgroundColor: "#ffd814",
                  width: "450px",
                  padding: "15px",
                  borderRadius: "40px",
                  borderColor: "#ffd814",
                  fontSize: "20px",
                }}
                // onClick={handleRegister}
              // disabled={!user.name || !user.email || !user.password}
              >
                Continue
              </button>
            {/* </Link> */}
            <br />
            <br />
            <p style={{ fontSize: "1.3rem" }}>
              By Continuing, you agree to Amazon's{" "}
              <a style={{ color: "#007182" }} href="https//www.amazon.com/">
                Condition <br /> of Use
              </a>{" "}
              and
              <a style={{ color: "#007182" }} href="">
                {" "}
                Privacy Notice
              </a>
              .
            </p>
            <br />
            <br />
            <br />
            <h2>Buying for work?</h2>
            <br />
            <a style={{ fontSize: "20px", color: "#007182" }} href="">
              Shop on Amazon Business
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "60px",
          backgroundColor: "",
          padding: "30px",
          fontSize: "22px",
          direction: "10px 20px 10px blue",
        }}
      >
        <p>
          <a style={{ color: "#007182" }} href="">
            {" "}
            Conditions of Use{" "}
          </a>{" "}
          <a style={{ marginLeft: "30px", color: "#007182" }} href="">
            {" "}
            Privacy Notice{" "}
          </a>{" "}
          <a style={{ marginLeft: "30px", color: "#007182" }} href="">
            {" "}
            Help{" "}
          </a>
        </p>{" "}
        <br />
        <p>© 1996–2024, Amazon.com, Inc. or its affiliates</p>
      </div>
    </main>
  );
};

export default Signin;
