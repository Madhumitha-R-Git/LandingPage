import { useState } from "react";

function Game() {
  const [index, setIndex] = useState(0);
  const imgArr = [
    {
      id: 1,
      ellipseImg: "/assets/Ellipse 2.png",
      title: "ASTROBOT",
      titleImg: "/assets/Rectangle 8.png",
      heroImg: "/assets/Rectangle 18.png",
    },
    {
      id: 2,
      ellipseImg: "/assets/Ellipse 4.png",
      title: "THE LAST OF US",
      titleImg: "/assets/Rectangle 12.png",
      heroImg: "/assets/Rectangle 18 (1).png",
    },
    {
      id: 3,
      ellipseImg: "/assets/Ellipse 3.png",
      title: "RATCHET & CLANK",
      titleImg: "/assets/Rectangle 11.png",
      heroImg: "/assets/Rectangle 18 (2).png",
    },
    {
      id: 4,
      ellipseImg: "/assets/Ellipse 1.png",
      title: "EA SPORTS F 25",
      titleImg: "/assets/Rectangle 11.png",
      heroImg: "/assets/Rectangle 18 (4).png",
    },
    {
      id: 5,
      ellipseImg: "/assets/Ellipse 6.png",
      title: "HELLDIVERS 2",
      titleImg: "/assets/Rectangle 13.png",
      heroImg: "/assets/Rectangle 18 (5).png",
    },
    {
      id: 6,
      ellipseImg: "/assets/Ellipse 5.png",
      title: "SPIDERMAN",
      titleImg: "/assets/Rectangle 10.png",
      heroImg: "/assets/Rectangle 18 (3).png",
    },
  ];

  return (
    <section className="relative min-h-[550px]">
      <div className="top-container absolute top-0 left-0 w-44">
        <img
          src={imgArr[index].titleImg}
          className="object-fit w-auto h-auto"
        ></img>
      </div>
      <div className="middle-container top-20 left-[200px] absolute">
        <h1 className="font-bold text-xl" style={{ fontFamily: "Bayon" }}>
          PLAY YOUR WAY !
        </h1>
        <p className="max-w-[300px] mt-3 mb-5">
          Embark on Epic Adventures, Conquer New Worlds, and Redefine Your
          Gaming Journey with PS6 Exclusive Titles and Enhanced Classics.
        </p>
        <div className="flex flex-wrap max-w-72 gap-8">
          {imgArr.map((item, index) => {
            return (
              <div
                className="inset-0 w-16 h-16 rounded-full items-center transition  hover:border-gray-400  hover:border-2 duration-400 ease-in-out hover:shadow-[0_0_30px_rgba(0,0,0,2.3)] cursor-pointer"
                onMouseEnter={() => setIndex(index)}
              >
                <img
                  src={item.ellipseImg}
                  className="object-fit"
                  alt="ellipse image"
                />
              </div>
            );
          })}
        </div>
        <div className="relative w-[150px] h-[30px] overflow-hidden mt-10">
          <button className="group absolute inset-0 flex items-center justify-center w-full h-full px-1 py-1 text-white border border-white transition-transform duration-400 ease-in-out hover:bg-white hover:text-black hover:scale-105">
            <div className="relative text-sm h-10 -mt-1 flex items-center gap-4 hover:font-semibold">
              GET GAME NOW
              <div className="relative w-4 h-4">
                <img
                  src="/assets/Game Controller.png"
                  alt="Logo"
                  className="absolute inset-0 w-full h-full transition-opacity duration-400 ease-in-out group-hover:opacity-0"
                />
                <img
                  src="/assets/Hover-Game Controller.png"
                  alt="Logo Hover"
                  className="absolute inset-0 w-full h-full transition-opacity duration-400 ease-in-out opacity-0 group-hover:opacity-100"
                />
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="right-container right-0 top-10 w-1/2 absolute h-96">
        <img
          src={imgArr[index].heroImg}
          className="w-full h-auto"
          alt="Hero Image"
        />
        <div className="absolute -bottom-20 right-0 w-1/2 text-center bg-black bg-opacity-50 text-white px-6  py-2">
          <h1
            style={{ fontFamily: "Bayon" }}
            className="text-2xl font-semibold"
          >
            {imgArr[index].title}
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Game;
