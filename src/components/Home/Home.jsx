import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Homeproduct from "./Home_product";
import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
import imageT1 from "../../image/T1.avif";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import Banner1 from "../../image/Multi-Banner-1.avif";
import Banner2 from "../../image/Multi-banner-2.avif";
import Banner3 from "../../image/Multi-Banner-3.webp";
import Banner4 from "../../image/Multi-banner-4.avif";
import Banner5 from "../../image/Multi-Banner-5.webp";
import Recommend from "../Product/Recommend";
import FeaturedProduct from "../Product/FeaturedProduct";

const Home = () => {
  const [newProduct, setNewProduct] = useState([]);
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct);
  const [visibleCount, setVisibleCount] = useState(4);
  const [loadRecomendProduct, setLoadRecomendProduct] = useState([]);
  function filtercate(productType) {
    const filterproduct = Homeproduct.filter(
      (curElm) => curElm.type === productType
    );
    setTrendingProduct(filterproduct);
    // console.log(filterproduct)
  }
  function loadMore() {
    setVisibleCount((prev) => prev + 4);
  }

  function recommendProduct(productTaste) {
    setLoadRecomendProduct((prev) => [...prev, productTaste]);
    // console.log(loadRecomendProduct)
  }
  //product type
  useEffect(() => {
    productCategory();
  }, []);
  const productCategory = () => {
    const newcategory = Homeproduct.filter((x) => {
      return x.type === "new";
    });
    setNewProduct(newcategory);
  };
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
                {trendingProduct.slice(0, visibleCount).map((curElm) => {
                  // console.log(trendingProduct);
                  return (
                    <div className="box">
                      <div className="img_box">
                        <img src={`${curElm.image}`} alt={curElm.Name} />
                        <div className="icon">
                          <div className="icon_box">
                            <FaEye />
                          </div>
                          <div
                            className="icon_box"
                            onClick={() => recommendProduct(curElm.taste)}
                          >
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
                  );
                })}
              </div>
              <button onClick={() => loadMore()}>Show More</button>
            </div>
          </div>
          <div className="right_box">
            <div className="right_container">
              <div className="testimonial">
                <div className="head">
                  <h3>our testimonial</h3>
                </div>
                <div className="detail">
                  <div className="img_box">
                    <img src={imageT1} alt="" />
                  </div>
                  <div className="info">
                    <h3>stephan robot</h3>
                    <h4>web designer</h4>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      In, soluta?
                    </p>
                  </div>
                </div>
              </div>
              <div className="newsletter">
                <div className="head">
                  <h3>newsletter</h3>
                </div>
                <div className="form">
                  <p>join our malling list</p>
                  <input type="email" placeholder="E-mail" autoComplete="off" />
                  <button>subscribe</button>
                  <div className="icon_box">
                    <div className="icon">
                      <FaFacebookF />
                    </div>
                    <div className="icon">
                      <FaTwitter />
                    </div>
                    <div className="icon">
                      <FaSquareInstagram />
                    </div>
                    <div className="icon">
                      <FaYoutube />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banners">
        <div className="container">
          <div className="left_box">
            <div className="box">
              <img src={Banner1} alt="" />
            </div>
            <div className="box">
              <img src={Banner2} alt="" />
            </div>
          </div>
          <div className="right_box">
            <div className="top">
              <img src={Banner3} alt="" />
              <img src={Banner4} alt="" />
            </div>
            <div className="bottom">
              <img src={Banner5} alt="banner5" />
            </div>
          </div>
        </div>
      </div>
      <div className="product_recommend">
        {loadRecomendProduct.length > 0 ? (
          <Recommend
            loadRecomendProduct={loadRecomendProduct}
            setLoadRecomendProduct={setLoadRecomendProduct}
          />
        ) : (
          ""
        )}
      </div>
      <div className="product_type">
        <FeaturedProduct
          newProduct={newProduct}
          setNewProduct={setNewProduct}
          Homeproduct={Homeproduct}
        />
      </div>
    </div>
  );
};

export default Home;
