import cart from "/images/icon-cart.svg"
import plus from "/images/icon-plus.svg"
import minus from "/images/icon-minus.svg"

function AddToCart() {
  return(
    <>
      <div className="flex justify-between px-6 bg-Light-grayish-blue p-4 rounded-xl">
        <button>
          <img src={minus}></img>
        </button>

        <p className="font-fw-700">0</p>

        <button>
          <img src={plus}></img>
        </button>
      </div>
      <div className="flex justify-center bg-Orange p-4 rounded-xl shadow-Orange/30 shadow-xl">
        <button className="flex gap-4 font-fw-700 items-center">
        <img src={cart} className="w-4 h-4"></img>
        Add to cart
      </button>
      </div>
    </>
  )
}

export default AddToCart