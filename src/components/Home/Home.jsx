import React, { useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Homeproduct from "../Home_product";
import { FaEye, FaHeart } from "react-icons/fa";

const Home = () => {
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct);
  function filtercate(x) {
    const filterproduct = Homeproduct.filter((curElm) => curElm.type === x);
    setTrendingProduct(filterproduct);
    // console.log(filterproduct)
  }

  return (
    <div className="home">
      <div className="top_banner">
        <div className="contant">
          <h3>silver aluminum</h3>
          <h2>Apple Watch</h2>
          <p>30% off at your first order</p>
          <Link to="/shop" className="link">
            Shop Now
          </Link>
        </div>
      </div>
      <div className="trending">
        <div className="container">
          <div className="left_box">
            <div className="header">
              <div className="heading">
                <h2>trending product</h2>
              </div>
              <div className="cate">
                <h3 onClick={() => setTrendingProduct(Homeproduct)}>All</h3>
                <h3 onClick={() => filtercate("new")}>New</h3>
                <h3 onClick={() => filtercate("featured")}>Featured</h3>
                <h3 onClick={() => filtercate("top")}>top selling</h3>
              </div>
            </div>
            <div className="products">
              <div className="container">
                {trendingProduct.map((curElm) => {
                  console.log(curElm.image);
                  return (
                    <>
                      <div className="box">
                        <div className="img_box">
                          <img
                            src={`../../${curElm.image}`}
                            alt={curElm.Name}
                          />
                          <div className="icon">
                            <div className="icon_box">
                              <FaEye />
                            </div>
                            <div className="icon_box">
                              <FaHeart />
                            </div>
                          </div>
                        </div>
                        <div className="info">
                          <h3>{curElm.Name}</h3>
                          <p>${curElm.price}</p>
                          <button className="btn">Add to cart</button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="right_box">
            <div className="container">
              <div className="testimonial">
                <div className="head">
                  <h3>our testimonial</h3>
                </div>
                <div className="detail">
                  <div className="img_box"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
