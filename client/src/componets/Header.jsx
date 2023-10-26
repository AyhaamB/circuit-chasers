import React from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../utils/auth";

export default function Header({ toggleLoginOpen }) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignUpClick = () => {
    navigate('/signup')
  }

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img className="main-logo" src="/circuit-chasers-logo.png"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/news">
                News
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/community">
                Community
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/browse">
                Season
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/merch">
                Store
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/donate">
                Donate
              </a>
            </li>
          </ul>
        </div>
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="btn btn-dark m-1" type="submit">
              Search
            </button>
            {Auth.loggedIn() ? (
              <>
                <button className="btn btn-dark m-1">Profile</button>
                <button className="btn btn-dark m-1" onClick={logout}>
                  Logout{" "}
                </button>
              </>
            ) : (
              <div className=" d-flex">
                <button
                  className="login-btn btn btn-dark m-1"
                  type="button"
                  onClick={handleLoginClick}
                >
                  Login
                </button>
                <button
                  className="signup-btn btn btn-dark m-1"
                  type="button"
                  onClick={handleSignUpClick}
                >
                  Register
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
}
