"use client";
import Banner from "@/components/banner";
import { CustomProduct } from "@/components/custom-product";
import Blogs from "@/components/Blogs";
import Comments from "@/components/comments-components/comments";
import TopSales from "@/components/top-sales";

export default function Home() {
  return (
    <section className="w-full flex flex-col relative">
      <Banner />
      <TopSales />
    </section>
  );
}
