import React from "react";
import "./footer.css";
import { FaPiggyBank } from "react-icons/fa6";
import { FaShippingFast, FaHeadphones, FaWallet } from "react-icons/fa";
import logo1 from "../../image/logo.webp"

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="left-box">
          <div className="box">
            <div className="icon_box">
              <FaPiggyBank />
            </div>
            <div className="detail">
              <h3>Great Saving</h3>
              <p>Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="box">
            <div className="icon_box">
              <FaShippingFast />
            </div>
            <div className="detail">
              <h3>Free delivery</h3>
              <p>Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="box">
            <div className="icon_box">
              <FaHeadphones />
            </div>
            <div className="detail">
              <h3>24/7 support</h3>
              <p>Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="box">
            <div className="icon_box">
            <FaWallet />
            </div>
            <div className="detail">
              <h3>money back</h3>
              <p>Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </div>
        <div className="right-box">
          <div className="header">
            <img src={logo1} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, numquam quae? Aliquid?</p>
          </div>
          <div className="bottom">
            <div className="box">
              <h3>Your Account</h3>
              <ul>
                <li>About us</li>
                <li>Account</li>
                <li>payment</li>
                <li>sales</li>
              </ul>
            </div>
            <div className="box">
              <h3>products</h3>
              <ul>
                <li>Delivery</li>
                <li>Track order</li>
                <li>New product</li>
                <li>old product</li>
              </ul>
            </div>
            <div className="box">
              <h3>contact us</h3>
              <ul>
                <li>4005m Sliver Business PointIndia</li>
                <li>010-1234-5678</li>
                <li>info@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
