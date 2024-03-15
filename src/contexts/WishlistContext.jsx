import React, { createContext, useState, useEffect } from 'react';

export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const initialWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const [wishlist, setWishlist] = useState(initialWishlist);

  const wishlistAmount = wishlist.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.amount;
  }, 0);

  const addToWishlist = (product, id, amount = 1) => {
    const existingItemIndex = wishlist.findIndex(item => item.id === id);
    if (existingItemIndex !== -1) {
      const updatedWishlist = [...wishlist];
      updatedWishlist[existingItemIndex].amount += amount;
      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    } else {
      const newItem = { ...product, id, amount };
      const updatedWishlist = [...wishlist, newItem];
      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    }
  };

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter(item => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <WishlistContext.Provider value={{ addToWishlist, wishlistAmount, removeFromWishlist, wishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
