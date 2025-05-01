import React from "react";
import FaceBookLogo from "../../../public/img/icons8-facebook.svg"
import Image from "next/image";

interface FaceBookIconProps {
  className?: string;
  alt?: string;
}

function FaceBookIcon({ className = "", alt = "Facebook" }: FaceBookIconProps) {
  return (
    <Image src={FaceBookLogo} alt={alt} className={`${className} h-6 w-6`} />
  );
}

export { FaceBookIcon };
