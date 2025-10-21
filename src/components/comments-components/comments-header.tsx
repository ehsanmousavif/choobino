import Image from "next/image";

export default function CommentsHeader() {
  return (
    <div className="flex justify-center max-md:text-center md:justify-between md:pr-28">
      <div className="flex flex-col gap-5 max-md:items-center">
        <Image
          src="/images/635fd0a699c1c847bf2834e084409a65e49ab8b1.png"
          height={100}
          width={100}
          alt="header comments image"
          className="object-cover"
        />
        <span className="text-foreground text-lg">نظر مشتریان</span>
        <div className="text-2xl font-bold xl:text-2xl flex flex-col">
          <span>مشتریان درمورد چوبینو</span>
          <span>چه میگویند ؟</span>
        </div>
      </div>

      <div className="w-16 h-16 relative">
        <Image
          src="/images/7f5dc44dafdcf64d322bb599506aaf510b720c7b.png"
          fill
          alt="comment symbol"
          className="-rotate-150 w-14 h-14 max-md:hidden"
        />
      </div>
    </div>
  );
}
