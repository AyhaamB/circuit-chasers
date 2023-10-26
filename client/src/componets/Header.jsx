import React from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

export default function Header({toggleLoginOpen}) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };
  
  const handleSignupClick = () => {
    navigate('/signup');
  };

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            className="main-logo"
            src="./src/assets/images/circuit-chasers-logo.png"
          ></img>
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
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li> */}
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
            <button className="btn btn-dark" type="submit">
              Search
            </button>
          </form>
        </div>
        <div>
        {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.name}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <div>
            <button className="login-btn btn btn-dark" type="button" onClick={handleLoginClick} >
              Login
            </button>
            <button className="login-btn btn btn-dark" type="button" onClick={handleSignupClick} >
              Signup
            </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

