import Banner from "@/components/banner";
import TopSales from "@/components/top-sales";

export default function Home() {
  return (
    <section className="w-full flex flex-col">
      <Banner />
      <TopSales />
    </section>
  );
}
