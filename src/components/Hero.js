import Header from "../components/Header";
function Hero() {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/Background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="flex flex-col gap-7 w-full h-screen"
    >
      <Header />
      <div className="flex flex-row md:flex-nowrap flex-wrap">
        <div className="left-container color-white px-20 mr-16 w-2/3 gap-3 flex flex-col">
          <div>
            <h2>The Future of Gaming is Here</h2>
            <hr class="m-0 h-0.5 bg-white border-none w-11"></hr>
          </div>

          <h1
            className="text-4xl leading-normal"
            style={{ fontFamily: "Bayon" }}
          >
            INTRODUCING PLAYSTATION 6 WITH POWER AND PRECISION
          </h1>
          <p className="leading-relaxed w-[350px]">
            A New Era of Gaming Begins. Where Every Moment Feels More Real,
            Every Action More Precise, and Every Experience More Immersive Than
            Ever Before, Redefining What's Possible in the World of Play.
          </p>
          <div className="flex gap-6 mt-4">
            <div className="relative w-[140px] h-[30px] overflow-hidden">
              <button className="group absolute inset-0 flex items-center justify-center w-full h-full px-5 py-1 text-white border border-white transition-transform duration-400 ease-in-out hover:bg-white hover:text-black hover:scale-105">
                <div className="relative text-sm  -mt-1 flex items-center gap-4 hover:font-semibold">
                  PRE BOOK
                  <div className="relative w-4 h-4">
                    <img
                      src="/assets/Prebook.png"
                      alt="Logo"
                      className="absolute inset-0 w-full h-full transition-opacity duration-400 ease-in-out group-hover:opacity-0"
                    />
                    <img
                      src="/assets/Prebook-Hover.png"
                      alt="Logo Hover"
                      className="absolute inset-0 w-full h-full transition-opacity duration-400 ease-in-out opacity-0 group-hover:opacity-100"
                    />
                  </div>
                </div>
              </button>
            </div>
            <div className="relative w-[180px] h-[30px] overflow-hidden">
              <button className="group absolute inset-0 flex items-center justify-center w-full h-full px-3 py-1 text-white border border-white transition-transform duration-400 ease-in-out hover:bg-white hover:text-black hover:scale-105">
                <div className="relative flex items-center -mt-1 text-sm gap-4 hover:font-semibold">
                  WATCH THE REVEAL
                  <div className="relative w-4 h-4">
                    <img
                      src="/assets/Glasses.png"
                      alt="Glass"
                      className="absolute inset-0 w-full h-full transition-opacity duration-400 ease-in-out group-hover:opacity-0"
                    />
                    <img
                      src="/assets/Glasses-Hover.png"
                      alt="Glass Hover"
                      className="absolute inset-0 w-full h-full transition-opacity duration-400 ease-in-out opacity-0 group-hover:opacity-100"
                    />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="right-container w-1/2  flex h-96 justify-end pr-9">
          <img src="/assets/HeroImage.png" alt="HeroImage" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
