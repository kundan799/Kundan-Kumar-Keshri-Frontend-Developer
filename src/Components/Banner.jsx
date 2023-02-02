import React from "react";
import Navbar from "./Navbar";
const Banner = () => {
  return (
    <div>
        <Navbar />
      <img
        className="h-600 w-full"
        src="https://images.foxtv.com/static.fox35orlando.com/www.fox35orlando.com/content/uploads/2021/04/764/432/SpaceX-HLS-Starship-Artemis.jpg?ve=1&tl=1"
      />
    </div>
  );
};

export default Banner;
