import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { WishlistContext } from "../contexts/WishlistContext";

const WishlistItem = ({ item }) => {
  const { id, image, category, title, price } = item;

  const { addToCart } = useContext(CartContext);
  const { addToWishlist, removeFromWishlist, wishlist } = useContext(
    WishlistContext
  );

  const [isInWishlist, setIsInWishlist] = useState(
    wishlist.some((item) => item.id === id)
  );

  const handleAddToWishlist = () => {
    if (!isInWishlist) {
      addToWishlist(product, id);
      setIsInWishlist(true);
    } else {
      removeFromWishlist(id);
      setIsInWishlist(false);
    }
  };

  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center ">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt={title}
            />
          </div>
        </div>
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button>
            <div
              onClick={() => addToCart(item, id)}
              className="flex justify-center items-center text-white w-12 h-12 bg-red-500"
            >
              <BsPlus className="text-3xl" />
            </div>
            <Link
              to={`/product/${id}`}
              className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
            >
              <BsEyeFill className="text-xl" />
            </Link>
            <div
              onClick={handleAddToWishlist}
              className="w-12 h-12 bg-primary flex justify-center items-center text-primary drop-shadow-x"
            >
              {isInWishlist ? (
                <FaHeart className="text-xl text-red-500 overflow-hidden" />
              ) : (
                <FaRegHeart className="text-xl text-white overflow-hidden" />
              )}
            </div>
          </button>
        </div>
      </div>
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold">$ {price}</div>
      </div>
    </div>
  );
};

export default WishlistItem;
