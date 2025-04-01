import Image from "next/image";
import Airplane from "../../../public/img/Frame 1000002244.svg";

interface AirplaneIconProps {
  className?: string;
  alt?: string;
}

const AirplaneIcon = ({
  className = "",
  alt = "Airplane",
}: AirplaneIconProps) => {
  return <Image src={Airplane} alt={alt} className={className} />;
};

export { AirplaneIcon };
