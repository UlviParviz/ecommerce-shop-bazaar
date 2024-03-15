import React, { useContext } from "react";
import { WishlistContext } from "../contexts/WishlistContext";
import WishlistItem from "../components/WishlistItem";
import Empty from '../assets/images/empty.png'

const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);

  return (
<section className='pt-[80px] pb-16 min-h-[750px] lg:pt-[7%]'>
  <div className='container mx-auto'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
      {wishlist && wishlist.length > 0 ? (
        wishlist.map(item => (
          <WishlistItem key={item.id} item={item}/>
        ))
      ) : (
        <div className="absolute inset-0 flex justify-center items-center">
            <div className="flex flex-col items-center justify-center gap-6">
          <img src={Empty} alt="" />
          <p className="capitalize text-gray-500">There is no product in your wishlist</p>
            </div>
        </div>
      )}
    </div>
  </div>
</section>

  );
};

export default Wishlist;
