import menu from "/images/icon-menu.svg";
import cart from "/images/icon-cart.svg";
import avatar from "/images/image-avatar.png";
import logo from "/images/logo.svg";
import Menu from "./menu";
import Basket from "./Basket";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenBasket, setIsOpenBasket] = useState(false)

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-Black opacity-75 z-40" onClick={() => setIsOpen(false)}></div>}
      <Menu isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div className="flex items-center gap-4 xl:gap-14">
        <button className="xl:hidden" onClick={() => setIsOpen(true)}>
          <img src={menu} alt="menu"></img>
        </button>
        <img src={logo} alt="logo"></img>
        <div className="hidden xl:flex xl:gap-[2rem] text-Dark-grayish-blue">
          <div>
            <h3 className="relative tracking-[-0.0248rem] after:absolute after:left-0 after:bottom-[-46px] after:w-full after:h-[3px] after:bg-Orange after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 cursor-pointer">Collections</h3>
          </div>
          <div>
            <h3 className="relative tracking-[-0.0248rem] after:absolute after:left-0 after:bottom-[-46px] after:w-full after:h-[3px] after:bg-Orange after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 cursor-pointer">Men</h3>
          </div>
          <div>
            <h3 className="relative tracking-[-0.0248rem] after:absolute after:left-0 after:bottom-[-46px] after:w-full after:h-[3px] after:bg-Orange after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 cursor-pointer">Women</h3>
          </div>
          <div>
            <h3 className="relative tracking-[-0.0248rem] after:absolute after:left-0 after:bottom-[-46px] after:w-full after:h-[3px] after:bg-Orange after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 cursor-pointer">About</h3>
          </div>
          <div>
            <h3 className="relative tracking-[-0.0248rem] after:absolute after:left-0 after:bottom-[-46px] after:w-full after:h-[3px] after:bg-Orange after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 cursor-pointer">Contact</h3>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5.5 xl:gap-12">
        <img src={cart} alt="cart" className="object-cover-fill cursor-pointer" onClick={() => setIsOpenBasket(!isOpenBasket)}></img>
        <Basket isOpenBasket={isOpenBasket} setIsOpenBasket={setIsOpenBasket}/>
        <div className="w-6 xl:w-[3.1rem] cursor-pointer ">
          <img src={avatar} alt="avatar" className="hover:border-Orange hover:border-3 rounded-3xl"></img>
        </div>
      </div>
    </>
  );
}

export default Nav;
