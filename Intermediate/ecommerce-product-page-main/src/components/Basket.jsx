import { createPortal } from "react-dom";
import CartContext from "./store/cart-context";
import { useContext } from "react";
import BasketInfoEmpty from "./BasketInfoEmpty";
import BasketInfoFilled from "./BasketInfoFilled";

function Basket({ isOpenBasket, setIsOpenBasket }) {
  if (!isOpenBasket) return null;
  const cartCtx = useContext(CartContext);

  return createPortal(
    <div className="absolute top-19 right-[0.45rem] xl:top-24 xl:right-22 w-[22.5rem] bg-White border-1 border-White pt-[.95rem] pb-[2rem] pr-[.1rem] shadow-2xl rounded-lg z-99">
      <h1 className="pl-[1.4rem] pt-[0.1rem] xl:pt-0 mb-[1.58rem] xl:pl-[1.35rem] font-fw-700 xl:mb-[1.58rem]">Cart</h1>
      {cartCtx.count === 0 ? <BasketInfoEmpty /> : <BasketInfoFilled />}
    </div>,

    document.body
  );
}

export default Basket;
