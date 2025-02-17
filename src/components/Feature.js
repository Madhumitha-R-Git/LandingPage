import clsx from "clsx";
import { useState } from "react";

function Feature() {
  const [index, setIndex] = useState(0);
  const featureArr = [
    {
      id: 1,
      src: "/assets/Feature1.png",
      title: "8K ULTRA HD GRAPHICS",
      description:
        "Experience breathtaking visuals like never before with true 8K Ultra HD resolution. Every detail, from lifelike character expressions to stunning open-world environments, is rendered with unparalleled clarity and depth, making your games more immersive than ever.",
    },
    {
      id: 2,
      src: "/assets/Feature2.png",
      title: "NEXT-GEN RAY TRACING",
      description:
        "Step into a world of real-time lighting and reflections with the most advanced ray tracing technology. Enjoy hyper-realistic shadows, reflections, and global illumination that bring your favorite games to life with cinematic-level realism.",
    },
    {
      id: 3,
      src: "/assets/Feature3.png",
      title: "AI-POWERED GAMEPLAY",
      description:
        "Harness the power of cutting-edge AI that adapts to your playstyle, creating more dynamic enemies, smarter NPCs, and unpredictable challenges. The PS6 revolutionizes gaming with self-learning AI that makes every playthrough unique and engaging.",
    },
    {
      id: 4,
      src: "/assets/Feature4.png",
      title: "DUALSENSE 2 CONTROL",
      description:
        "Feel every moment like never before with the enhanced DualSense 2 controller. Featuring next-gen haptic feedback, improved adaptive triggers, and precision motion sensors, the PS6 delivers unmatched control and responsiveness, pulling you deeper.",
    },
    {
      id: 5,
      src: "/assets/Feature5.png",
      title: "SSD 3.0 SPEED",
      description:
        "Say goodbye to loading screens with the lightning-fast SSD 3.0. Games load in an instant, worlds render seamlessly, and transitions are smoother than ever. With speeds that redefine next-gen gaming, every second counts in your immersive experience. ",
    },
  ];
  return (
   <section className="flex w-full flex-col bg-sectionbgColor2 gap-3">
      <h1
        className="text-4xl leading-normal text-center flex w-full flex-1 justify-center"
        style={{ fontFamily: "Bayon" }}
      >
        REVOLUTIONARY FEATURES
      </h1>
      <div className="relative min-h-[500px]">
        <div className="left-container absolute left-0 max-w-[600px]">
          {featureArr.map((item, index) => {
            return (
              <div
                className={clsx(
                  "flex flex-row items-center inset-0  my-5 bg-gradient-to-r from-[#031A85] border-1 to-[#01061F]   h-16 hover:scale-110 transition-transform duration-600 ease-in-out shadow-[0_0_15px_rgba(0,0,255,0.4)]  hover:shadow-[0_0_20px_rgba(0,0,255,1.3)]  cursor-pointer "
                )}
                style={{ width: `calc(600px - ${index * 80}px)` }}
                onMouseEnter={() => setIndex(index)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className={clsx("py-3 object-fit h-16 brightness-75")}
                  style={{ width: `calc(400px - ${index * 80}px)` }}
                ></img>
                <h1
                  className="text-xl font-bold text-center flex w-full flex-1 justify-center"
                  style={{ fontFamily: "Bayon" }}
                >
                  {item.title}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="right-container absolute left-[600px] top-36 max-w-[700px]">
          <img
            src="/assets/FeatureImg1.png"
            alt="Logo"
            className="absolute -top-20 -right-12 w-28 h-24"
          />
          <img
            src="/assets/Rectangle 16.png"
            alt="Logo"
            className="absolute -bottom-20 -right-32 w-28 h-auto"
          />
          <h1 className="font-bold text-xl" style={{ fontFamily: "Bayon" }}>
            {featureArr[index].title}
          </h1>
          <p className="leading-none text-lg h-40 max-w-[280px]">
            {featureArr[index].description}
          </p>
          <div className="flex gap-6 mt-4">
            <div className="relative w-[160px] h-[30px] overflow-hidden">
              <button className="group absolute inset-0 flex items-center justify-center w-full h-full px-1 py-1 text-white border border-white transition-transform duration-400 ease-in-out hover:bg-white hover:text-black hover:scale-105">
                <div className="relative text-sm  -mt-1 flex items-center gap-4 hover:font-semibold">
                  MORE FEATURES
                  <div className="relative w-4 h-4">
                    <img
                      src="/assets/Feature.png"
                      alt="Logo"
                      className="absolute inset-0 w-full h-full transition-opacity duration-400 ease-in-out group-hover:opacity-0"
                    />
                    <img
                      src="/assets/Feature-Hover.png"
                      alt="Logo Hover"
                      className="absolute inset-0 w-full h-full transition-opacity duration-400 ease-in-out opacity-0 group-hover:opacity-100"
                    />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
