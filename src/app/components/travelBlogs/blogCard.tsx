import Image from "next/image";
import Avatar from "../../../../public/img/Blog Avatar 1.png";

interface BlogCardProps {
  backgroundImage: string;
}

function BlogCard({ backgroundImage }: BlogCardProps) {
  return (
    <div
      className="w-[338px] h-[400px] relative rounded-3xl px-2 py-4 cursor-pointer overflow-hidden bg-cover bg-center before:bg-black/40 before:absolute before:inset-0 before:content-['']"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="relative flex flex-col justify-between">
        <div>
          <span className="text-sm mt-10 ml-4 bg-white rounded-full px-4 py-2">
            International flight
          </span>
        </div>
        <div className="flex flex-col gap-2 mt-[215px]">
          <h3 className="text-xl font-bold text-white text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h3>
          <div className="flex justify-between items-center mt-6">
            <div className="flex items-center gap-3 ml-4">
              <Image src={Avatar} alt="avatar" />
              <span className="text-sm text-white">Author’s name</span>
            </div>
            <span className="text-white mr-4">01/01/2025</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
``
