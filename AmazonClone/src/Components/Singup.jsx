import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState({ name: "", email: "", password: "" });

  const navigate = useNavigate();

  useEffect(() => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const adminExists = existingUsers.some(
      (u) => u.email === "Dhruv@gmail.com"
    );

    if (!adminExists) {
      existingUsers.push({
        name: "Admin",
        email: "Dhruv@gmail.com",
        password: "12345678",
        role: "admin",
      });
      localStorage.setItem("users", JSON.stringify(existingUsers));
    }
  }, []);

  const validateFields = () => {
    let newError = { name: "", email: "", password: "" };
    let isValid = true;

    if (!user.name.trim()) {
      newError.name = "Name is required";
      isValid = false;
    }
    if (!user.email.trim()) {
      newError.email = "Please enter an email";
      isValid = false;
    }
    if (!user.password.trim()) {
      newError.password = "Please enter a valid password";
      isValid = false;
    } else if (user.password.length < 8) {
      newError.password = "Password must be at least 8 characters";
      isValid = false;
    }

    setError(newError);
    return isValid;
  };

  const handleRegister = () => {
    if (!validateFields()) return;

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (existingUsers.some((u) => u.email === user.email)) {
      setError((prev) => ({ ...prev, email: "Email already registered" }));
      return;
    }

    const newUser = { ...user, role: "user" };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Registration successful!");
    navigate("/signin");
  };
  return (
    <div
      style={{
        padding: "100px 750px",
      }}
    >
      <img
        src="Login.png"
        alt="img"
        style={{ height: "80px", paddingLeft: "85px", objectFit: "contain" }}
      />

      <div
        style={{
          alignItems: "center",
          backgroundColor: "white",
          width: "400px",
          height: "auto",
          border: "2px solid lightgray",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <div style={{ paddingBottom: "10px" }}>
          <p style={{ fontWeight: "bold" }}>Create an account</p>
        </div>

        {/* Right Side Form */}
        <div style={{ fontSize: "20px" }}>
          {/* Logo */}

          {/* Name Input */}
          <div>
            <label>Full Name</label>
            <br />
            <input
              style={{
                width: "100%",
                height: "40px",
                borderRadius: "5px",
                border: "1.5px solid lightgray",
                fontSize: "20px",
                padding: "10px",
              }}
              type="text"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            {error.name && <p>{error.name}</p>}
          </div>

          {/* Email Input */}
          <div>
            <label>Email Address</label>
            <br />
            <input
              style={{
                width: "100%",
                height: "40px",
                borderRadius: "5px",
                border: "1.5px solid lightgray",
                fontSize: "20px",
                padding: "10px",
              }}
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            {error.email && <p>{error.email}</p>}
          </div>

          {/* Password Input */}
          <div>
            <label>Password</label>
            <br />
            <input
              style={{
                width: "100%",
                height: "40px",
                borderRadius: "5px",
                border: "1.5px solid lightgray",
                fontSize: "20px",
                padding: "10px",
              }}
              type="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            {error.password && <p>{error.password}</p>}
          </div>
          <br />

          {/* Signup Button */}
          <div>
            <button
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#131921",
                color: "white",
                borderRadius: "5px",
              }}
              onClick={handleRegister}
              disabled={!user.name || !user.email || !user.password}
            >
              Sign Up
            </button>
          </div>

          {/* Navigation to Sign In */}
          <div>
            <p style={{textAlign:"center"}}>
              <Link to="/signin">or sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
