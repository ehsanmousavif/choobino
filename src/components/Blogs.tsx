"use client";

import { ClockIcon, FolderIcon } from "@heroicons/react/24/outline";
import { Button } from "@heroui/react";
import Image from "next/image";

interface BlogsType {
  title: string;
  property: string;
  date: string;
  imageUrl: string;
}

// blogsData
const blogs: BlogsType[] = [
  {
    title: "۳. چرا انتخاب محصولات سفارشی ارزشمند است؟",
    property: "طراحی اختصاصی",
    date: "16 فروردین 1403 ",
    imageUrl: "/3afed809ca17319f43299d3390f2f661083f5c07.png",
  },
  {
    title: "۳. چرا انتخاب محصولات سفارشی ارزشمند است؟",
    property: "طراحی اختصاصی",
    date: "16 فروردین 1403 ",
    imageUrl: "/4e9dc13f8cc7a1e596d4ae3efcf5090d24dd6975.png",
  },
  {
    title: "۳. چرا انتخاب محصولات سفارشی ارزشمند است؟",
    property: "طراحی اختصاصی",
    date: "16 فروردین 1403 ",
    imageUrl: "/a9673fa90ca5cef9574e5ae8d9e06c05c53e93d4.png",
  },
  {
    title: "۳. چرا انتخاب محصولات سفارشی ارزشمند است؟",
    property: "طراحی اختصاصی",
    date: "16 فروردین 1403 ",
    imageUrl: "/ed717e5db8432410cbf35a4a7d65c72422c44212.png",
  },
];

const Blogs = () => {
  return (
    <section className="rounded-3xl w-full flex flex-col relative gap-[49px] mt-[243px] mb-[271px]">
      <div className="w-full flex justify-between h-[72px] items-center">
        <b className="text-2xl md:text-4xl">مقالات اخیر</b>
        <Button
          variant="bordered"
          className="w-auto bg-foreground text-background py-6 px-2  md:px-6 lg:px-8 "
        >
          مشاهده همه مقالات
        </Button>
      </div>

      <div className="flex gap-10 h-auto justify-between py-[71px]">
        {blogs.map((blog, index) => (
          <div className="flex flex-col gap-[30.5px] w-80" key={index}>
            <Image
              alt={blog.title}
              src={blog.imageUrl}
              className="object-cover rounded-t-[150px] rounded-b-[8px] max-h-[321px] max-w-[321px] h-[321px] w-[321px]"
              width={321}
              height={321}
            />
            <div className="flex justify-between items-center text-[#858585]">
              <div className="flex items-center gap-2">
                <FolderIcon className="size-6" />
                <span>{blog.property}</span>
              </div>{" "}
              <div className="flex items-center gap-2">
                <ClockIcon className="size-6" />
                <span>{blog.date}</span>
              </div>
            </div>
            <div className="w-full text-2xl">{blog.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
