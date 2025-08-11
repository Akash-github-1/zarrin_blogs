import React from "react";
import Image from "./Image";


const Logo = ({ className = "", size = "text-2xl" }) => {
  return (
    <>
    <Image src="\Assets\logo.png" alt="Zarrin Logo" className="h-10 w-10" />
    </>
  );
};

export default Logo;
