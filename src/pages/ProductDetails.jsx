import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import { Rating } from "@mui/material";
import { WishlistContext } from "../contexts/WishlistContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { wishlist, addToWishlist, removeFromWishlist } = useContext(
    WishlistContext
  );

  const product = products.find((product) => product.id === parseInt(id));

  const [inWishlist, setInWishlist] = useState(false);

  useEffect(() => {
    const isInWishlist = wishlist.some((item) => item.id === product.id);
    setInWishlist(isInWishlist);
  }, [wishlist, product.id]);

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading ...
      </section>
    );
  }

  const { title, price, description, image, rating } = product;

  const handleWishlistToggle = () => {
    if (inWishlist) {
      
      removeFromWishlist(product.id);
    } else {
      
      addToWishlist(product, product.id);
    }
    setInWishlist(!inWishlist);
  };

  return (
    <section className="pt-32 pb-12 lg:py-32 min-h-[800px] flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-sm" src={image} alt="" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6 ">
              $ {price}
            </div>
            <div className="mb-3">
              <Rating value={rating.rate} readOnly />
            </div>
            <p className="mb-8 capitalize">{description}</p>
            <div className="flex gap-3 items-center justify-center flex-col lg:justify-start lg:flex-row">

            <a
              href="#_"
              onClick={handleWishlistToggle}
              className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group "
            >
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
              </span>
            </a>

            <button
              onClick={() => addToCart(product, product.id)}
              className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
            >
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                Add To Cart
              </span>
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
