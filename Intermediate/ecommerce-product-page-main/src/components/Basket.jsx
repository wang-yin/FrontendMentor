import { createPortal } from "react-dom";
import product1 from "/images/image-product-1-thumbnail.jpg";
import deleteicon from "/images/icon-delete.svg";

function Basket({ isOpenBasket, setIsOpenBasket }) {
  if (!isOpenBasket) return null;

  return createPortal(
    <div className="absolute top-24 right-22 w-90 bg-White border-1 border-White pt-[.95rem] pb-[2rem] pr-[.1rem] shadow-2xl rounded-lg">
      <h1 className="pl-[1.35rem] font-fw-700 mb-[1.58rem]">Cart</h1>
      <div className="border-t border-Grayish-blue">
        <div className="flex justify-center items-center py-[1.5rem] gap-[1.28rem]">
          <div className="w-[3.1rem] rounded-sm overflow-hidden">
            <img src={product1} alt="product"></img>
          </div>
          <div className="flex flex-col ml-[-.3rem] leading-[1.55rem]">
            <p className="text-Dark-grayish-blue">Fall Limited Edition Sneakers </p>
            <p className="tracking-[.025rem] text-Dark-grayish-blue">$125.00 x 3 <span className="font-fw-700 ml-[0.2rem] tracking-[.04rem] text-Black">$375.00</span></p>
          </div>
          <div>
            <img src={deleteicon} alt="delete"></img>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-0.5">
        <button className="bg-Orange px-[7.45rem] py-[1rem] font-fw-700 rounded-[.6rem]">Checkout</button>
      </div>
    </div>,

    document.body
  );
}

export default Basket;
