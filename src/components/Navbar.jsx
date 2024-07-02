import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };
  function onNavClick(name) {
    console.log("hello");
    document.getElementById(name)?.scrollIntoView({ behavior: "smooth" });
  }
  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Technologies" },
    { id: 4, text: "Projects" },
    { id: 5, text: "Experience" },
    { id: 6, text: "Contact" },
  ];
  const navItemsDesktop = [
    { id: 2, text: "About" },
    { id: 4, text: "Projects" },
    { id: 5, text: "Experience" },
    { id: 6, text: "Contact" },
  ];

  return (
    <div className=" mx-auto  flex h-32  items-center justify-between text-white ">
      {/* Logo */}
      <h1
        className=" cursor-pointer text-3xl font-medium "
        onClick={() => {
          onNavClick("home");
        }}
      >
        An.
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex md:items-center">
        {navItemsDesktop.map((item) => (
          <li
            onClick={() => onNavClick(item.text.toLowerCase())}
            key={item.id}
            className="m-2 cursor-pointer rounded-xl p-4 duration-300 hover:bg-[#00df9a] hover:text-black"
          >
            {item.text}
          </li>
        ))}
        <li>
          <a
            className="m-2 cursor-pointer rounded-xl p-4 duration-300 hover:bg-[#00df9a] hover:text-black"
            href="https://docs.google.com/document/d/1e4a7oUp9nBX4P_Pw6XrtNbTSZxYD5v0eruKn6c6LsXk/"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className=" z-50 block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed right-0 top-0 z-40 h-full w-[60%] border-r border-r-gray-900 bg-[#000300] pt-20 duration-500 ease-in-out md:hidden"
            : "fixed bottom-0 right-[-100%] top-0 z-40 w-[60%] pt-16 duration-500 ease-in-out"
        }
      >
        {/* Mobile Logo */}

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            onClick={() => {
              onNavClick(item.text.toLowerCase());
              handleNav();
            }}
            key={item.id}
            className="cursor-pointer rounded-xl border-b border-gray-600 p-4 duration-300 hover:bg-[#00df9a] hover:text-black"
          >
            {item.text}
          </li>
        ))}
        <li className="cursor-pointer rounded-xl border-b border-gray-600 p-4 duration-300 hover:bg-[#00df9a] hover:text-black">
          <a
            href="https://docs.google.com/document/d/1e4a7oUp9nBX4P_Pw6XrtNbTSZxYD5v0eruKn6c6LsXk/"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
