import React, { useContext, useEffect, useState } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import {BsBag} from 'react-icons/bs'
import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.svg'
import { FaRegHeart } from "react-icons/fa";
import { WishlistContext } from '../contexts/WishlistContext'

const Header = () => {

  const [isActive, setIsActive] = useState(false)

  const {isOpen, setIsOpen} = useContext(SidebarContext)
  const {itemAmount} = useContext(CartContext)
  const {wishlistAmount} = useContext(WishlistContext)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })

  return (
    <header className={`${isActive ? 'bg-white py-1 shadow-md' : 'py-2 bg-none'} fixed w-full z-10`}>
      <div className='container mx-auto flex items-center justify-between h-full transition-all '>
      <Link to={'/'}>
        <img className='w-[80px]' src={Logo} alt="" />
      </Link>
      <div className='flex gap-8 justify-between items-center'>
        <Link to={'/wishlist'} className='cursor-pointer flex relative'><FaRegHeart className='text-2xl '/>
        <div className='bg-primary absolute -right-2 -top-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{wishlistAmount}</div>
        </Link>
      <div onClick={handleOpen} className='cursor-pointer flex relative'>
      <BsBag className='text-2xl '/>
      
      <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
      
      </div>
      </div>
      
      </div>

    </header>
  )
}

export default Header