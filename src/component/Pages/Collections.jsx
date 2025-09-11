import React, { useEffect, useState, useRef } from "react";

const Collections = () => {
  const [products, setProducts] = useState([]);
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // JSON fetch
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // 👇 Scroll-based animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.2 } // jab 20% section visible hoga tab animate karega
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-zinc-400 px-4 sm:px-6 lg:px-16 py-12 sm:py-16"
    >
      {/* Animated + Responsive Heading */}
      <h1
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 transform transition-all duration-700 ${
          animate ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}
      >
        Our Collections
      </h1>

      {/* Responsive Product Grid */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 transform transition-all duration-1000 ${
          animate
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0"
        }`}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md p-3 sm:p-4 hover:shadow-xl transition"
          >
            {/* Image */}
            <img
              src={product.image}
              alt={product.product}
              className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-md mb-3 sm:mb-4 transition-transform duration-300 hover:scale-110"
            />

            {/* Product Name */}
            <h2 className="flex text-lg sm:text-xl md:text-2xl font-semibold mb-2 items-center justify-center transition duration-300 hover:text-red-400 hover:underline">
              {product.product}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
