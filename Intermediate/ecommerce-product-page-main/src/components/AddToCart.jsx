import cart from "/images/icon-cart.svg"
import plus from "/images/icon-plus.svg"
import minus from "/images/icon-minus.svg"

function AddToCart() {
  return(
    <>
      <div className="flex justify-between px-6 bg-Light-grayish-blue p-4 rounded-xl xl:px-[.99rem] xl:gap-11.5">
        <button className="cursor-pointer transition-opacity duration-300 hover:opacity-50">
          <img src={minus} alt="minus"></img>
        </button>

        <p className="font-fw-700">0</p>

        <button className="cursor-pointer transition-opacity duration-300 hover:opacity-50">
          <img src={plus} alt="plus"></img>
        </button>
      </div>
      <div className="flex justify-center bg-Orange p-4 rounded-xl shadow-Orange/30 shadow-xl transition-opacity duration-300 hover:opacity-70 xl:px-[4.8rem] xl:shadow-none cursor-pointer">
        <button className="flex gap-4 font-fw-700 items-center cursor-pointer">
        <img src={cart} className="w-4 h-4 cursor-pointer"></img>
        Add to cart
      </button>
      </div>
    </>
  )
}

export default AddToCart