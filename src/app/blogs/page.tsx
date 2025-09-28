"use client";
import { ClockIcon } from "@heroicons/react/24/outline";
import { Button } from "@heroui/react";
import Image from "next/image";
interface BlogsType {
  title: string;
  property: string;
  date: string;
  imageUrl: string;
}

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
    imageUrl: "/3afed809ca17319f43299d3390f2f661083f5c07.png",
  },
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
    imageUrl: "/3afed809ca17319f43299d3390f2f661083f5c07.png",
  },
];
const Blogs = () => {
  return (
    <section className="rounded-3xl w-full flex flex-col relative  gap-8 ">
      {/* header  */}
      <div className="w-full flex justify-between items-center">
        <b className="text-2xl md:text-4xl">مقالات اخیر</b>
        <Button
          variant="bordered"
          className="w-auto bg-foreground text-background py-6 px-2  md:px-6 lg:px-8 "
        >
          مشاهده فروشگاه
        </Button>
      </div>
      <div className="flex gap-[38px] h-auto justify-between">
        {
            blogs.map((blog,index)=>(

        <div className="flex flex-col gap-[37px] w-[321px]" key={index}>
          <Image
            alt={blog.title}
            src={blog.imageUrl}
            className="object-cover rounded-t-[150px] rounded-b-[8px] max-h-[321px] max-w-[321px]"
            width={321}
            height={321}
          />
          <div className="flex justify-between items-center text-[#858585]">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                />
              </svg>
              <span>طراحی اختصاصی</span>
            </div>{" "}
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <span></span>
            </div>
          </div>
          <div className="w-full">
            ۳. چرا انتخاب محصولات سفارشی ارزشمند است؟
          </div>
        </div>
            ))
        }
      </div>
    </section>
  );
};

export default Blogs;
