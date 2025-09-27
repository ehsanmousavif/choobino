import BannerImage from "@/public/banner.png";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="rounded-3xl w-full h-[40vh] md:h-[50vh] min-h-80 max-h-112 relative overflow-hidden">
      <Image
        src={BannerImage}
        alt="Banner"
        className="object-cover object-[50%_60%] z-10"
        fill
        priority
      />
      <span className="absolute inset-0 z-20 bg-gradient-to-l from-[black] to-transparent" />

      <div className="min-w-96 w-1/2 absolute inset-y-0 start-0 flex flex-col z-30">

      </div>
    </div>
  );
}
