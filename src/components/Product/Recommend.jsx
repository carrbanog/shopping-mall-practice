import React from "react";
import Homeproduct from "../Home/Home_product";
import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
import "./Recommend.css";

const Recommend = ({ loadRecomendProduct, setLoadRecomendProduct }) => {
  const findMostFrequentTaste = (arr) => {
    const tasteCount = arr.reduce((acc, taste) => {
      acc[taste] = (acc[taste] || 0) + 1;
      return acc;
    }, {});

    return Object.keys(tasteCount).reduce(
      (a, b) => (tasteCount[a] > tasteCount[b] ? a : b),
      ""
    );
  };
  const mostFrequentTaste = findMostFrequentTaste(loadRecomendProduct);
  const filteredProducts = Homeproduct.filter(
    (product) => product.taste === mostFrequentTaste
  );
  console.log(filteredProducts);
  return (
    <div className="container">
      <div className="box">
        {/* <div className="header">
          <h2>New Product</h2>
        </div> */}
        {filteredProducts.map((curElm) => {
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

export default Recommend;
