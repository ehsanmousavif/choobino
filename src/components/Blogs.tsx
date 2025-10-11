"use client";

import { Button } from "@heroui/react";
import useEmblaCarousel from "embla-carousel-react";
import { useBlogProgressButton } from "@/app/hooks/useBlogProgressButton";
import BlogProgressButton from "./blog-components/blog-progress-button";
import BlogCard from "./blog-components/blog-card";

export interface BlogType {
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
];

const blogsWithNumber = blogs.map((b, i) => ({ ...b, number: i + 1 }));


const Blogs = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: "trimSnaps",
    direction: "rtl",
    slidesToScroll: "auto",
    loop: true,
    breakpoints: {
      "(max-width: 767px)": {
        align: "center",
      },
      "(min-width: 768px)": {
        align: "start",
      },
    },
  });

  const { selectedIndex, scrollSnaps } = useBlogProgressButton(emblaApi);

  return (
    <section className="rounded-3xl w-full flex flex-col relative gap-12 my-60">
      <div className="w-full flex justify-between h-18 items-center">
        <h2 className="text-2xl max-md:m-auto md:text-4xl">مقالات اخیر</h2>
        <Button
          variant="bordered"
          className="w-auto bg-foreground text-background py-6 px-2 md:px-6 max-md:hidden lg:px-8"
        >
          مشاهده همه مقالات
        </Button>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {blogsWithNumber.map((blog) => (
            <BlogCard blog={blog} key={blog.link} />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 items-center mx-auto w-full">
        {scrollSnaps.map((_, i) => (
          <BlogProgressButton
            key={i}
            className={`flex-1 h-0.5 transition-background md:hidden ${
              i === selectedIndex ? "bg-[#B7B7B7]" : "bg-[#F5F5F5]"
            }`}
          />
        ))}
      </div>

      <Button
        variant="bordered"
        className="w-1/2 mx-auto bg-foreground text-background py-6 px-2 md:px-6 md:hidden lg:px-8"
      >
        مشاهده همه مقالات
      </Button>
    </section>
  );
};

export default Blogs;
