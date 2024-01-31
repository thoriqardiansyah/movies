import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="relative flex justify-between items-center px-16 py-6 z-10">
      <Link to={"/"} className="text-xl md:text-4xl font-bold text-white">
        Mov<span className="text-yellow-400">Flix</span>
      </Link>
      <button
        onClick={() => {
          setIsOpen(false);
        }}
        id="close-menu"
        className={`${isOpen ? "" : "hidden"} md:hidden text-white font-bold`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        id="hamburger-menu"
        className={`${isOpen ? "hidden" : ""} md:hidden text-white font-bold`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <nav
        className={`${
          isOpen ? "" : "hidden"
        } absolute top-full flex flex-col md:flex items-center md:flex-row md:top-2 z-20 right-0 mt-2 px-8 py-4 mx-10 rounded-lg gap-4 bg-black text-white`}
      >
        <Link to={"/"} className="text-lg md:text-xl font-semibold">
          Home
        </Link>
        <Link to={"/popular"} className="text-lg md:text-xl font-semibold">
          Popular
        </Link>
        <Link to={"/toprated"} className="text-lg md:text-xl font-semibold">
          Top Rated
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
