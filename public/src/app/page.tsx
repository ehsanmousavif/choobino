import Banner from "@/components/banner";
import Blogs from "@/components/Blogs";

export default function Home() {
  return (
    <section className="w-full flex flex-col font-sans">
      <Banner />
      <Blogs />
    </section>
  );
}
