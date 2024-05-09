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
  ];

  return (
    <div className=" mx-auto mb-16 flex h-32 items-center justify-between text-white">
      {/* Logo */}
      <h1 className="w-full text-3xl font-medium text-slate-500">REACT.</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            onClick={() => onNavClick(item.text.toLowerCase())}
            key={item.id}
            className="m-2 cursor-pointer rounded-xl p-4 duration-300 hover:bg-[#00df9a] hover:text-black"
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? " fixed left-0 top-0 z-50 h-full w-[60%] border-r border-r-gray-900 bg-[#000300] duration-500 ease-in-out md:hidden"
            : "fixed bottom-0 left-[-100%] top-0 z-50 w-[60%] duration-500 ease-in-out"
        }
      >
        {/* Mobile Logo */}
        <h1 className="m-4 w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>

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
      </ul>
    </div>
  );
}

export default Navbar;
