import React, { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-zinc-300 shadow-md text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold"> <a href="#home"> Clothing Brand</a> </h1>
        <ul className="flex space-x-6 font-medium">
          <li><a href="#home" className="hover:text-red-500">Home</a></li>
          <li><a href="#about" className="hover:text-red-500">About</a></li>
          <li><a href="#collections" className="hover:text-red-500">Collections</a></li>
          <li><a href="#contact" className="hover:text-red-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
