import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const NavBar = () => {
  return (
    <>
    <div style={{display:'flex', justifyContent:'center',backgroundColor:'black',width:'100vw'}}>
    <span style={{color:'rgb(204, 207, 210)',fontSize:'30px', letterSpacing:'2px',fontStretch:"ultra-condensed" , fontWeight:'600'}}>Advance Calculator</span>
    </div>
{/* navbar start */}
      <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link
            className="nav-link"
            style={{
              color: "rgba(255, 255, 255, .55)",
              fontSize: "20px",
              marginBottom: "4px",
            }}
            to="/"
          >
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ marginLeft: "60px" }}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                            </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/oneparameter">
                  oneparameter
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/qudratic">
                  qudratic
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/calculator">
                  calculator
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/twoparameter">
                  twoparameter
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/expression">
                  expression
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/calendar">
                  calendar
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/statics">
                  Statics
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
   
    </>
  );
};

export default NavBar;