import React from "react";

const Contact = () => {
  return (
    <div className="flex h-70 w-full items-center justify-center bg-zinc-400">
      <form>
        <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={() => window.open("https://wa.me/91XXXXXXXXXX", "_blank")}
            className="bg-green-500 text-white rounded px-6 py-3 
                       hover:bg-green-700 transition 
                       animate-bounce"
          >
            WhatsApp Button
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
