import React from "react";

function Splashscreen() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="flex flex-col items-center gap-5">
        <div className="h-16 w-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        <h1 className="text-white text-xl font-semibold">Loading...</h1>
      </div>
    </div>
  );
}

export default Splashscreen;
