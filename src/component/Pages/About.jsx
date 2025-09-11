import React, { useState, useRef, useEffect } from "react";

const About = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.3 } // 30% section visible hone par animation trigger
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
      className="min-h-screen flex flex-col items-center justify-center bg-zinc-400 px-6 py-16"
    >
      {/* Heading with animation */}
      <h1
        className={`font-bold  mb-6 transform transition-all duration-700 ${
          animate
            ? "translate-y-0 opacity-100 text-4xl text-black"
            : "-translate-y-20 opacity-0 text-3xl text-black"
        }`}
      >
        About Our Brand
      </h1>

      {/* Paragraph with animation */}
      <p
        className={`max-w-2xl text-center transform transition-all duration-1000 ${
          animate
            ? "translate-y-0 opacity-100 text-xl text-gray-700"
            : "translate-y-10 opacity-0 text-lg text-gray-500"
        }`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        sunt, quae similique, eveniet illo voluptatum quisquam mollitia delectus
        voluptas voluptates maxime fugit doloribus a omnis quod molestiae modi
        voluptatibus error.
      </p>
    </div>
  );
};

export default About;
