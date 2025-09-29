import Banner from "@/components/banner";
import Benefits from "@/components/benefits";

export default function Home() {
  return (
    <section className="w-full flex flex-col">
      <Banner />
      <div className=" hidden md:block w-full pt-6">
        {" "}
        <Benefits />
      </div>
    </section>
  );
}
