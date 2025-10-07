import Image from "next/image";
import Link from "next/link";
import { BlogType } from "../Blogs";
import { ClockIcon, FolderIcon } from "@heroicons/react/24/outline";

export default function BlogCard({
  blog,
}: {
  blog: BlogType & { number: number };
}) {
  return (
    <Link
      href={blog.link}
      className="flex-[0_0_70%] flex flex-col gap-8 mx-2 md:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(25%-16px)]"
      draggable="false"
    >
      <div className="relative">
        <Image
          alt={blog.title}
          src={blog.imageUrl}
          className="object-cover rounded-t-[12rem] rounded-b-lg h-80 w-full"
          width={321}
          height={321}
          draggable="false"
        />
      </div>

      <div className="flex justify-between items-center w-full text-gray-400 text-xs xl:text-sm 2xl:text-lg">
        <div className="flex items-center lg:gap-2">
          <FolderIcon className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
          <span>{blog.property}</span>
        </div>
        <div className="flex items-center gap-2">
          <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
          <span>{blog.date}</span>
        </div>
      </div>

      <div className="w-full text-sm md:text-lg lg:text-2xl font-">
        {blog.number}.{blog.title}
      </div>
    </Link>
  );
}
