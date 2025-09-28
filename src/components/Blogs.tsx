"use client";

import { ClockIcon, FolderIcon } from "@heroicons/react/24/outline";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";

interface BlogType {
  title: string;
  property: string;
  date: string;
  imageUrl: string;
  link: string;
}

// blogsData
const blogs: BlogType[] = [
  {
    title: "۳. چرا انتخاب محصولات سفارشی ارزشمند است؟",
    property: "طراحی اختصاصی",
    date: "16 فروردین 1403 ",
    imageUrl: "/3afed809ca17319f43299d3390f2f661083f5c07.png",
    link: "/",
  },
  {
    title: "۳. چرا انتخاب محصولات سفارشی ارزشمند است؟",
    property: "طراحی اختصاصی",
    date: "16 فروردین 1403 ",
    imageUrl: "/4e9dc13f8cc7a1e596d4ae3efcf5090d24dd6975.png",

    link: "/",
  },
  {
    title: "۳. چرا انتخاب محصولات سفارشی ارزشمند است؟",
    property: "طراحی اختصاصی",
    date: "16 فروردین 1403 ",
    imageUrl: "/a9673fa90ca5cef9574e5ae8d9e06c05c53e93d4.png",
    link: "/",
  },
  {
    title: "۳. چرا انتخاب محصولات سفارشی ارزشمند است؟",
    property: "طراحی اختصاصی",
    date: "16 فروردین 1403 ",
    imageUrl: "/ed717e5db8432410cbf35a4a7d65c72422c44212.png",
    link: "/",
  },
];
const BlogCard = ({ blog }: { blog: BlogType }) => {
  return (
    <Link
      href={blog.link}
      className="embla__slide grow-0 shrink-0 basis-[70%] flex flex-col gap-8 mx-2 md:basis-[50%] lg:basis-[calc(100%/4)]"
      draggable="false"
    >
      <Image
        alt={blog.title}
        src={blog.imageUrl}
        className="object-cover rounded-t-[150px] rounded-b-lg h-80 w-full"
        width={321}
        height={321}
        draggable="false"
      />
      <div className="flex justify-between items-center text-gray-400 text-xs md:text-sm lg:text-lg">
        <div className="flex items-center gap-2">
          <FolderIcon className="w-6 h-6" />
          <span>{blog.property}</span>
        </div>
        <div className="flex items-center gap-2">
          <ClockIcon className="w-6 h-6" />
          <span>{blog.date}</span>
        </div>
      </div>
      <div className="w-full text-sm md:text-lg lg:text-2xl font-bold">
        {blog.title}
      </div>
    </Link>
  );
};

const Blogs = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: false,
    direction: "rtl",
    slidesToScroll: "auto",
    loop: true,
  });

  return (
    <section className="rounded-3xl w-full flex flex-col relative gap-12 mt-60 mb-64">
      <div className="w-full flex justify-between h-18 items-center">
        <b className="text-2xl md:text-4xl">مقالات اخیر</b>
        <Button
          variant="bordered"
          className="w-auto bg-foreground text-background py-6 px-2 md:px-6 lg:px-8"
        >
          مشاهده همه مقالات
        </Button>
      </div>

      <div className="embla">
        <div className="embla__viewport overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {blogs.slice(0, blogs.length).map((blog, index) => (
              <BlogCard blog={blog} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
