import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import "./nav.css";
import logo from "../../image/logo.webp";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

const Nav = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  const { logout } = useAuth0();
  return (
    <div className="header">
      <div className="top_header">
        <div className="icon">
          <MdLocalShipping />
        </div>
        <div className="info">
          <p>Free Shipping When Shopping upto $1000</p>
        </div>
      </div>
      <div className="mid-header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="search_box">
          <input type="text" value="" placeholder="search" />
          <button>
            <CiSearch />
          </button>
        </div>
        {isAuthenticated ? (
          <div className="user">
            <div className="icon">
              <CiLogout />
            </div>
            <div className="btn">
              <button
                onClick={() =>
                  logout({
                    logoutParams: { returnTo: window.location.origin },
                  })
                }
              >
                Log Out
              </button>
            </div>
          </div>
        ) : (
          <div className="user">
            <div className="icon">
              <CiLogin />
            </div>
            <div className="btn">
              <button onClick={() => loginWithRedirect()}>Log In</button>
            </div>
          </div>
        )}
      </div>
      <div className="last_header">
        <div className="user_profile">
          {isAuthenticated ? (
            <>
              <div className="icon">
                <CiUser />
              </div>
              <div className="info">
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
            </>
          ) : (
            <>
              <div className="icon">
                <CiUser />
              </div>
              <div className="info">
                <p>please Login</p>
              </div>
            </>
          )}
        </div>
        <div className="nav">
          <ul>
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="link">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/collection" className="link">
                Collection
              </Link>
            </li>
            <li>
              <Link to="/about" className="link">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="offer">
          <p>flat 10% over all iphone</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;