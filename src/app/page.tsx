"use client";
import Banner from "@/components/banner";
import { Benefits } from "@/components/benefits";

export default function Home() {
  return (
    <section className="w-full flex flex-col relative">
      <Banner />
      <div className="hidden md:block">
        <Benefits />
      </div>
    </section>
  );
}
