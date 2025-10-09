import Banner from "@/components/banner";
import { CustomProduct } from "@/components/custom-product";

export default function Home() {
  return (
    <section className="w-full flex flex-col">
      <Banner />
      <CustomProduct />
    </section>
  );
}
