import React from "react";
import { Link } from "react-router-dom";
// import { IoReorderThreeOutline } from "react-icons/io5";
import { VscThreeBars } from "react-icons/vsc";
const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#232f3e",
        gap: "20px",
        display: "flex",
        padding: "8px 10px 8px 15px",
      }}
    >
      <div style={{textAlign:"center",display: "flex", justifyContent:"center"}}>
        <div>
      <VscThreeBars
        style={{
          padding: "0px 0px 0px 0px",
          fontSize: "20px",
          // 
          color: "white",
          // gap:"-200px",
        }}
      />
      </div>
      <div style={{paddingTop:"2px"}}>

      <Link
        style={{
          
          color: "white",
          textDecoration: "none",
          padding: "0px 0px 0px 0px",
        
        }}
        to="/al"
      >
        All
      </Link>
      </div>
      </div>

      <Link style={{ color: "white", textDecoration: "none" }} to="/">
        Home
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/pr">
        Product
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/si">
        sell
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/bests">
        Bestsellers
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/todayd">
        Today's Deals
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/Si">
        Mobile
      </Link>

      <Link style={{ color: "white", textDecoration: "none" }} to="/prime">
        Prime
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/customers">
        Customer Service
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/newr">
        New Releases
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/ele">
        Electronics
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/fation">
        Fashion
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/amazonp">
        Amazon Pay
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/homek">
        Home & Kitchen
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/comp">
        Computers
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/book">
        Books
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/carm">
        Car & Motorbike
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/toysg">
        Toys & Games
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/member">
      My Members
      </Link>
    </nav>
  );
};

export default Navbar;
