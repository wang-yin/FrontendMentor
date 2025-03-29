import menu from "/images/icon-menu.svg"
import cart from "/images/icon-cart.svg"
import avatar from "/images/image-avatar.png"
import logo from "/images/logo.svg"

function Nav() {
  return (
    <>
      <div className="flex items-center gap-4">
        <button>
          <img src={menu} alt="menu" ></img>
        </button>
        <img src={logo} alt="logo"></img>
      </div>
      <div className="flex items-center gap-5.5">
        <img src={cart} alt="cart" className="object-cover-fill"></img>
        <div className="w-6">
          <img src={avatar} alt="avatar" className=""></img>
        </div>
      </div>

    </>
  )
}

export default Nav