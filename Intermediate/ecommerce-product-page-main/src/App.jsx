import "./App.css";
import thumbnail1 from "/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "/images/image-product-4-thumbnail.jpg";
import Nav from "./components/Nav";
import Image from "./components/Image";
import Info from "./components/Info";

function App() {

  return (
    <main className="xl:flex xl:flex-col xl:mt-[.7rem]">
      <nav className='flex justify-between items-center px-6 pt-4.5 pb-6.5 bg-White md:border-b-1 md:border-Grayish-blue xl:pb-[2.1rem] xl:px-[1.5rem]'>
        <Nav />
      </nav>
      <div className="md:flex md:gap-10 md:pt-[1.5rem] xl:px-[1.5rem] xl:pt-0">
        <div className="md:flex md:pt-[9rem] md:px-[1rem] xl:pt-[5.65rem] xl:px-[3rem] xl:gap-[7.8rem] ">
          <div className="md:mr-10 xl:mr-0">
            <div className="flex flex-col justify-center w-full h-[18.9rem] bg-[url(/images/image-product-1.jpg)] bg-center bg-cover md:rounded-2xl xl:w-[27.8rem] xl:h-[27.8rem]">
              <Image />
            </div>
            <div className="hidden md:flex md:mt-10 xl:mt-8 xl:gap-[1.875rem]">
              <div className="xl:rounded-lg xl:overflow-hidden ">
                <img src={thumbnail1} className="transition-opacity duration-300 hover:opacity-50 cursor-pointer" ></img>
              </div>
              <div className="xl:rounded-lg xl:overflow-hidden ">
                <img src={thumbnail2} className="transition-opacity duration-300 hover:opacity-50 cursor-pointer" ></img>
              </div>
              <div className="xl:rounded-lg xl:overflow-hidden ">
                <img src={thumbnail3} className="transition-opacity duration-300 hover:opacity-50 cursor-pointer" ></img>
              </div>
              <div className="xl:rounded-lg xl:overflow-hidden ">
                <img src={thumbnail4} className="transition-opacity duration-300 hover:opacity-50 cursor-pointer" ></img>
              </div>
            </div>
          </div>
          <div className="px-6 pt-5.5 xl:px-0 xl:pt-[3.9rem]">
            <Info />
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
