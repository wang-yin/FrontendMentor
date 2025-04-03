import { createPortal } from "react-dom";
import { useState } from "react";
import thumbnail1 from "/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "/images/image-product-4-thumbnail.jpg";
import product1 from "/images/image-product-1.jpg";
import product2 from "/images/image-product-2.jpg";
import product3 from "/images/image-product-3.jpg";
import product4 from "/images/image-product-4.jpg";
import close from "/images/icon-close.svg";
import next from "/images/icon-next.svg";
import previous from "/images/icon-previous.svg";

function Lightbox({ openLightbox, setOpenLightbox }) {
  const [selectedImage, setSelectedImage] = useState(product1);
  if (!openLightbox) return null;

  const thumbnails = [
    { id: 1, img: thumbnail1, full: product1 },
    { id: 2, img: thumbnail2, full: product2 },
    { id: 3, img: thumbnail3, full: product3 },
    { id: 4, img: thumbnail4, full: product4 },
  ];

  const currentIndex = thumbnails.findIndex((thumb) => thumb.full === selectedImage);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % thumbnails.length;
    setSelectedImage(thumbnails[nextIndex].full);
  };
  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    setSelectedImage(thumbnails[prevIndex].full);
  };

  return createPortal(
    <div className="z-100 fixed top-[8.3rem] left-[27.8rem] w-full">
      <div className="absolute top-[-3rem] left-[33rem]">
        <button onClick={() => setOpenLightbox(false)} className="hover:cursor-pointer">
          <img src={close} alt="close" className="w-[1.5rem]"></img>
        </button>
      </div>
      <div
        className="flex flex-col justify-center h-[34.35rem] w-[34.4rem] bg-center bg-cover rounded-2xl"
        style={{ backgroundImage: `url(${selectedImage})` }}
      >
        <div className="flex justify-between">
          <button className="absolute top-[14.8rem] left-[-1.75rem] z-101 bg-White size-[3.5rem] rounded-4xl p-5 hover:cursor-pointer" onClick={handlePrevious}>
            <img src={previous} alt="Previous"></img>
          </button>
          <button className="absolute top-[14.8rem] left-[32.65rem] z-101 bg-White size-[3.5rem] rounded-4xl p-5 hover:cursor-pointer" onClick={handleNext}>
            <img src={next} alt="Next"></img>
          </button>
        </div>
      </div>
      <div className="flex mt-[2.35rem] px-[3.2rem] gap-[1.75rem]">
        {thumbnails.map((thumb) => (
          <div
            key={thumb.id}
            className={`w-[5.7rem] xl:rounded-lg xl:overflow-hidden cursor-pointer border-2 ${
              selectedImage === thumb.full
                ? "border-Orange"
                : "border-transparent"
            }`}
            onClick={() => setSelectedImage(thumb.full)}
          >
            <img
              src={thumb.img}
              alt={`Thumbnail ${thumb.id}`}
              className="transition-opacity duration-300 hover:opacity-50"
            />
          </div>
        ))}
      </div>
    </div>,
    document.body
  );
}

export default Lightbox;
