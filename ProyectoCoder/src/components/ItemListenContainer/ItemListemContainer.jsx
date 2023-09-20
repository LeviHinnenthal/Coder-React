import React from "react";
import CardProduct from "./CardProduct";
import iphone14pro from "../../assets/iPhone14Pro.jpg";
import iphone15pro from "../../assets/iphone15pro.jpg";
import macbookpro from "../../assets/macbookpro.jpeg";
import applewatchultra from "../../assets/applewatchultra.webp";

const ItemListemContainer = ({ greeting, img }) => {
  return (
    <div className="h-screen">
      <div className="flex flex-col items-center justify-center my-6">
        <h1 className="text-2xl">{greeting}</h1>
      </div>
      <div className="productsContainer flex justify-center m-auto flex-wrap max-w-[1000px]">
        <CardProduct img={iphone14pro} />
        <CardProduct img={iphone15pro} />
        <CardProduct img={macbookpro} />
        <CardProduct img={applewatchultra} />
        <CardProduct img={iphone14pro} />
        <CardProduct img={iphone15pro} />
        <CardProduct img={macbookpro} />
        <CardProduct img={applewatchultra} />
      </div>
    </div>
  );
};

export default ItemListemContainer;
