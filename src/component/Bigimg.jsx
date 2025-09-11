import React, { useState, useEffect } from "react";

const Bigimg = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 2000); // 2 sec ke baad overlay hatao

    return () => clearTimeout(timer);
  }, []);

  return (
    <header
      className="h-screen w-full bg-cover bg-center flex items-center justify-center text-white relative"
      style={{ backgroundImage: "url('backgroundimg.png')" }}
    >
      {/* Overlay for shadow effect */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-1000 ${
          showOverlay ? "opacity-50" : "opacity-0"
        }`}
      ></div>

      {/* Content */}
      <div className="text-center px-4 relative z-10">
        <h2 className="text-4xl sm:text-6xl font-bold mb-4 drop-shadow-lg">
          Welcome to Our Brand
        </h2>
        <p className="text-lg sm:text-xl mb-6 drop-shadow-md">
          Discover the latest trends in fashion
        </p>
      </div>
    </header>
  );
};

export default Bigimg;
