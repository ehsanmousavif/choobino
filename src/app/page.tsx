"use client";
import Banner from "@/components/banner";
import { Benefits } from "@/components/benefits";
import Blogs from "@/components/Blogs";
import Comments from "@/components/comments-components/comments";
import TopSales from "@/components/top-sales";

export default function Home() {
  return (
    <section className="w-full flex flex-col relative gap-12">
      <Banner />
      <Benefits />
      <TopSales />
      <Blogs />
      <Comments />
    </section>
  );
}
