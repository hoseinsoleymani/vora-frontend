import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import defaultAvatar from "../../../../public/img/Blog Avatar 1.png";

interface BlogCardProps {
  backgroundImage: string;
  category?: string;
  title: string;
  authorName: string;
  date: string;
  avatar?: string | StaticImport;
}

function BlogCard({
  backgroundImage,
  category = "International flight",
  title,
  authorName,
  date,
  avatar = defaultAvatar,
}: BlogCardProps) {
  return (
    <div
      className="w-[338px] h-[400px] relative rounded-3xl px-2 py-4 cursor-pointer overflow-hidden group"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />
      <div className="relative flex flex-col justify-between h-full">
        <div>
          <span className="text-sm  ml-4 bg-white rounded-full px-4 py-2 inline-block">
            {category}
          </span>
        </div>
        <div className="flex flex-col gap-2 mt-auto">
          <h3 className="text-xl font-bold text-white text-center px-4">
            {title}
          </h3>
          <div className="flex justify-between items-center mt-6 px-4">
            <div className="flex items-center gap-3">
              <Image
                src={avatar}
                alt={`${authorName}'s avatar`}
                width={32}
                height={32}
              />
              <span className="text-sm text-white">{authorName}</span>
            </div>
            <span className="text-white">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
