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
const blogs: BlogType[] = [
  {
    title: "چرا محصولات سفارشی اهمیت دارند",
    property: "طراحی",
    date: "۱ فروردین ۱۴۰۳",
    imageUrl: "/img1.png",
    link: "/blog/1",
  },

  {
    title: "۵ روند برتر معماری داخلی",
    property: "معماری",
    date: "۵ فروردین ۱۴۰۳",
    imageUrl: "/img2.png",
    link: "/blog/2",
  },
  {
    title: "۱۰ نکته برای بهبود تجربه کاربری",
    property: "تجربه کاربری",
    date: "۱۰ فروردین ۱۴۰۳",
    imageUrl: "/img3.png",
    link: "/blog/3",
  },

  {
    title: "راهنمای کامل انتخاب رنگ در دکوراسیون",
    property: "دکوراسیون",
    date: "۱۵ فروردین ۱۴۰۳",
    imageUrl: "/img4.png",
    link: "/blog/4",
  },

  {
    title: "چگونه یک برند شخصی بسازیم",
    property: "مارکتینگ",
    date: "۲۰ فروردین ۱۴۰۳",
    imageUrl: "/img1.png",
    link: "/blog/5",
  },

  {
    title: "ترفندهای عکاسی برای شبکه‌های اجتماعی",
    property: "عکاسی",
    date: "۲۵ فروردین ۱۴۰۳",
    imageUrl: "/img2.png",
    link: "/blog/6",
  },

  {
    title: "بهینه‌سازی وبسایت برای موتورهای جستجو",
    property: "سئو",
    date: "۳۰ فروردین ۱۴۰۳",
    imageUrl: "/img3.png",
    link: "/blog/7",
  },

  {
    title: "چگونه تیم خود را مدیریت کنیم",
    property: "مدیریت",
    date: "۵ اردیبهشت ۱۴۰۳",
    imageUrl: "/img4.png",
    link: "/blog/8",
  },

  {
    title: "راهنمای جامع طراحی لوگو",
    property: "گرافیک",
    date: "۱۰ اردیبهشت ۱۴۰۳",
    imageUrl: "/img1.png",
    link: "/blog/9",
  },

  {
    title: "استراتژی محتوا برای شبکه‌های اجتماعی",
    property: "محتوا",
    date: "۱۵ اردیبهشت ۱۴۰۳",
    imageUrl: "/img2.png",
    link: "/blog/10",
  },
];

const BlogCard = ({ blog }: { blog: BlogType }) => {
  return (
    <Link
      href={blog.link}
      className="flex-[0_0_70%] flex flex-col gap-8 mx-2 md:basis-[calc(100%/2)] lg:basis-[calc(100%/4-16px)]"
      draggable="false"
    >
      <Image
        alt={blog.title}
        src={blog.imageUrl}
        className="object-cover rounded-t-[12rem] rounded-b-lg h-80 w-full"
        width={321}
        height={321}
        draggable="false"
      />

      <div className="flex justify-between items-center flex-row w-full text-gray-400 text-xs xl:text-sm 2xl:text-lg">
        <div className="flex items-center lg:gap-2">
          <FolderIcon className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
          <span>{blog.property}</span>
        </div>
        <div className="flex items-center gap-2">
          <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
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
    containScroll: "trimSnaps",
    direction: "rtl",
    slidesToScroll: "auto",
    loop: true,
    align: "center",
  });

  return (
    <section className="rounded-3xl w-full flex flex-col relative gap-12 mt-60 mb-64">
      <div className="w-full flex justify-between h-18 items-center ">
        <h2 className="text-2xl max-md:m-auto md:text-4xl">مقالات اخیر</h2>
        <Button
          variant="bordered"
          className="w-auto bg-foreground text-background py-6 px-2  md:px-6 max-md:hidden lg:px-8">
          مشاهده همه مقالات
        </Button>
      </div>

      <div className="overflow-hidden">
        <div className="embla__viewport overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {blogs.slice(0, blogs.length).map((blog) => (
              <BlogCard blog={blog} key={blog.link} />
            ))}
          </div>
        </div>
      </div>

      <Button
        variant="bordered"
        className="w-44 m-auto bg-foreground text-background py-6 px-2 md:px-6 md:hidden lg:px-8">
        مشاهده همه مقالات
      </Button>
    </section>
  );
};

export default Blogs;
