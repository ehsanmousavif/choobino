"use client";
import Banner from "@/components/banner/banner";
import { Benefits } from "@/components/benefits/benefits";
import Blogs from "@/components/blog-components/Blogs";
import Comments from "@/components/comments-components/comments";
import { CustomProduct } from "@/components/custom-product/custom-product";
import TopSales from "@/components/top-sales/top-sales";
import Poducts from "@/components/products/products";

export default function Home() {
  return (
    <section className="w-full flex flex-col relative gap-24">
      <Banner />
      <div className="hidden xl:block">
        <Benefits />
      </div>
      <TopSales />
      <Poducts />
      <CustomProduct />
      <Blogs />
      <Comments />
    </section>
  );
}
