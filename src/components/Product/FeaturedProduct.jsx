import React, { useEffect, useState } from "react";

import Homeproduct from "../Home/Home_product";
import "./FeaturedProduct.css";
import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";


const FeaturedProduct = ({Homeproduct}) => {
  const [newProduct, setNewProduct] =  useState([])
  const [featuredProduct, setFeaturdProduct] =  useState([])
  const [topProduct, setTopProduct] =  useState([])
  useEffect(() => {
    productCategory();
  }, []);
  const productCategory = () => {
    const newcategory = Homeproduct.filter((x) => {
      return x.type === "new";
    });
    setNewProduct(newcategory);

    const featuredcategory = Homeproduct.filter((x) => {
      return x.type === "featured";
    });
    setFeaturdProduct(featuredcategory);

    const topcategory = Homeproduct.filter((x) => {
      return x.type === "top";
    });
    setTopProduct(topcategory);
  };

  return (
    <div className="container">
      <div className="box">
        <div className="header">
          <h2>New Product</h2>
        </div>
        {newProduct.map((curElm) => {
          return (
            <div className="productBox">
              <div className="img-box">
                <img src={curElm.image} alt="" />
              </div>
              <div className="detail">
                <h3>{curElm.Name}</h3>
                <p>${curElm.price}</p>
                <div className="icon">
                  <button>
                    <FaEye />
                  </button>
                  <button>
                    <FaHeart />
                  </button>
                  <button>
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="box">
        <div className="header">
          <h2>New Product</h2>
        </div>
        {featuredProduct.map((curElm) => {
          return (
            <div className="productBox">
              <div className="img-box">
                <img src={curElm.image} alt="" />
              </div>
              <div className="detail">
                <h3>{curElm.Name}</h3>
                <p>${curElm.price}</p>
                <div className="icon">
                  <button>
                    <FaEye />
                  </button>
                  <button>
                    <FaHeart />
                  </button>
                  <button>
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="box">
        <div className="header">
          <h2>New Product</h2>
        </div>
        {topProduct.map((curElm) => {
          return (
            <div className="productBox">
              <div className="img-box">
                <img src={curElm.image} alt="" />
              </div>
              <div className="detail">
                <h3>{curElm.Name}</h3>
                <p>${curElm.price}</p>
                <div className="icon">
                  <button>
                    <FaEye />
                  </button>
                  <button>
                    <FaHeart />
                  </button>
                  <button>
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProduct;
