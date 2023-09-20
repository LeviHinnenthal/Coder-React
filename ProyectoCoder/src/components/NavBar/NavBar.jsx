import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import heart from "../../assets/heart.svg"
import user from "../../assets/user.svg"
import user2 from "../../assets/user2.svg"
import search from "../../assets/search.svg"
import login from "../../assets/login.svg"
import logout from "../../assets/logout.svg"



const NavBar = () => {

  return (
    <>
    <div className="w-full border-b-2 backdrop-blur-2xl sticky top-0 z-2">
      <div className="flex justify-between h-14 m-auto items-center px-12 container">
        <div className="cursor-pointer">iMarket</div>
        <div className="headerOptions flex">
            <div className="headerOption cursor-pointer mx-4">Store</div>
            <div className="headerOption cursor-pointer mx-4">iPhone</div>
            <div className="headerOption cursor-pointer mx-4">iPad</div>
            <div className="headerOption cursor-pointer mx-4">Apple Watch</div>
            <div className="headerOption cursor-pointer mx-4">Accesories</div>
        </div>
        <div className="flex justify-between">
            <div className="icon cursor-pointer mx-2"><img src={user2} alt="User" /></div>
            <div className="icon cursor-pointer mx-2"><img src={heart} alt="Heart" /></div>
            <div className="icon cursor-pointer mx-2"><img src={search} alt="Search" /></div>
            <div className="icon cursor-pointer mx-2"> <CartWidget /></div>
        </div>
      </div>
    </div>
    </>
  );
};

export default NavBar;
