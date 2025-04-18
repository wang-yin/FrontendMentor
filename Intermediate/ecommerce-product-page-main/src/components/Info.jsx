import AddToCart from "./AddToCart";

function Info() {
  return (
    <>
      <p className="uppercase text-xs font-fw-700 tracking-[.115rem] text-Dark-grayish-blue xl:tracking-[.14rem] xl:text-[.79rem]">Sneaker Company</p>
      <h1 className="font-fw-700 text-[1.8rem] mt-[0.65rem] tracking-[-0.0248rem] leading-[2.1rem] xl:mt-[1.1rem] xl:text-[2.85rem] xl:tracking-[-0.055rem] xl:leading-[3rem]">Fall Limited Edition Sneakers</h1>
      <p className="mt-3.5 tracking-[-.027rem] text-Dark-grayish-blue font-fw-400 leading-[1.558rem] xl:mt-[2.3rem] xl:tracking-[0rem] xl:leading-[1.64rem]">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="flex gap-22.5 items-center mt-[1.3rem] xl:flex-col xl:items-start xl:gap-1 xl:mt-[1.1rem]">
        <div className="flex gap-4 items-center xl:gap-[0.95rem]">
          <h3 className="text-[1.82rem] font-fw-700 tracking-[0.03rem] xl:tracking-[0.04rem]">$125.00</h3>
          <span className="font-fw-700 mt-[0.15rem] px-[0.61rem] py-[0.115rem] bg-Black rounded-md text-White">50%</span>
        </div>
        <p className="font-fw-700 tracking-[0.025rem] text-Dark-grayish-blue line-through">$250.00</p>
      </div>
      <div className="flex flex-col mt-4.5 gap-4.5 xl:flex-row xl:justify-between xl:mt-[2.1rem] xl:gap-[1rem]">
        <AddToCart />
      </div>
    </>
  );
}

export default Info;
