import Image from "next/image";
import GoogleLogo from "../../../public/img/icons8-google.svg";

interface GoogleIconProps {
  className?: string;
  alt?: string;
}

function GoogleIcon({ className = "", alt = "Google" }: GoogleIconProps) {
  return <Image src={GoogleLogo} alt={alt} className={`${className} h-6 w-6`} />;
}

export { GoogleIcon };
