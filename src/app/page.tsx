import Banner from "@/components/banner";
import Blogs from "@/components/Blogs";
import Comments from "@/components/comments/Comments";

export default function Home() {
  return (
    <section className="w-full flex flex-col font-sans">
      <Banner />
      <Blogs />
      <Comments/>
    </section>
  );
}
