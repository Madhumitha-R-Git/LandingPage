import { useState } from "react";
import clsx from "clsx";
function ImageContent() {
  const images = [
    "/assets/Image1.png",
    "/assets/Image2.png",
    "/assets/Image3.png",
  ];
  const [hoveredIndex, setHoveredIndex] = useState(1);
  return (
    <section className="bg-sectionbgColor1 w-full flex flex-col p-5 gap-8">
      <div className="flex-1 flex flex-col items-center">
        <h1 className="text-4xl leading-normal" style={{ fontFamily: "Bayon" }}>
          DUALSENSE 2 CONTROLLER
        </h1>
        <h1 className="text-4xl leading-normal" style={{ fontFamily: "Bayon" }}>
          THE ULTIMATE GAMING COMPANION
        </h1>
        <p>Feel Every Moment, Control Every Move</p>
      </div>
      <div className="relative flex items-center justify-center mt-10 h-96">
        {images.map((src, index) => {
          const positionOffset =
            index === 0 ? "left-28" : index === 2 ? "right-28" : "";

          return (
            <img
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              className={clsx(
                "absolute w-64 h-auto object-fit transition-all  duration-300 ease-in-out cursor-pointer m-0 p-0 top-7",
                positionOffset,
                hoveredIndex === index
                  ? "z-10 scale-150  opacity-100"
                  : "z-0  opacity-80"
              )}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(1)}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ImageContent;
