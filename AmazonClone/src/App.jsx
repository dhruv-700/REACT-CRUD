import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import All from "./Components/All";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Sell from "./Components/Sell";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Signin from "./Components/Signin";
import Member from "./Components/Member";
import Signup from "./Components/Singup";
import Signinpass from "./Components/Signinpass";
import { Navigate } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header/>
      <Navbar />

      <Routes>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/al" element={<All />}/>
        <Route path="/" element={<Home />} />
        <Route path="/pr" element={<Product />} />
        <Route path="/si" element={<Sell />} />
        <Route path="/member" element={<Member/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signipass" element={<Signinpass/>} />

      </Routes>
    </Router>
    // <div>
    //  <Signinpass></Signinpass>
    // </div>
    // <div><Navbar></Navbar></div>
  );
};

export default App;
