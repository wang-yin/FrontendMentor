import next from '/images/icon-next.svg'
import previous from '/images/icon-previous.svg'

function Image() {
  return (
    <>
      <div className="flex justify-between px-4 mb-0.5 md:hidden">
        <button className="z-10 bg-White size-10 rounded-3xl p-4">
          <img src={previous}></img>
        </button>
        <button className="z-10 bg-White size-10 rounded-3xl p-4">
          <img src={next}></img>
        </button>
      </div>
    </>
  );
}

export default Image;
