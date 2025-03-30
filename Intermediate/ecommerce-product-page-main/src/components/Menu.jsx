import close from "/images/icon-close.svg";

function Menu() {
  return (
    <>
      <div className="fixed top-0 left-0 h-full w-62.5 bg-White py-[1.3rem] px-[1.535rem] z-150 hidden">
        <button>
          <img src={close}></img>
        </button>
        <div className="flex flex-col gap-[1.15rem] mt-[2.75rem] text-[1.15rem] font-fw-700 tracking-[-0.01rem]">
          <h3>Collections</h3>
          <h3>Men</h3>
          <h3>Women</h3>
          <h3>About</h3>
          <h3>Contact</h3>
        </div>
      </div>
    </>
  );
}

export default Menu;
