function Header() {
  return (
    <header className="px-16 pt-7 flex flex-col gap-6">
    <div className="w-full flex justify-between items-center">
      <div>
        <img src="/assets/logo.png" className="w-36 h-12" />
      </div>
      <nav>
        <ul className="flex justify-between flex-row gap-10">
          <li><a href="#hero">PLAYSTATION 6</a></li>
          <li><a href="#section1">FEATURES</a></li>
          <li><a href="#section2">GAMES</a></li>
          <li><a href="#section3">ACCESSORIES</a></li>
          <li><a href="#section3">CONTACT</a></li>
        </ul>
      </nav>
      <div className="flex justify-center items-center">
        <div className="relative w-[150px] h-[30px] overflow-hidden">
          <button className="group absolute inset-0 flex items-center justify-center w-full h-full px-5 py-1 text-white border border-white transition-transform duration-400 ease-in-out hover:bg-white hover:text-black hover:scale-105">
            <div className="relative flex items-center gap-4 hover:font-semibold">
              PRE BOOK
              <div className="relative w-6 h-4">
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
      </div>
      </div>
      <hr className="h-0.5 w-full border-none bg-gradient-to-r from-[#06091D] via-[#3F4FB5] to-[#070924]" />
      </header>
  );
}

export default Header;
