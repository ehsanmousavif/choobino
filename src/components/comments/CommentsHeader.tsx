import Image from "next/image";

const CommentsHeader = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-5">
        <Image
          src={"/images/635fd0a699c1c847bf2834e084409a65e49ab8b1.png"}
          height={100}
          width={100}
          alt="header comments image"
          className="object-cover"
        />
        <span className="default-700 xl:text-lg">نظر مشتریان</span>
        <div className="text-2xl font-bold xl:text-4xl flex flex-col">
          <span>مشتریان درموردچوبینو</span>
          <span>چه میگویند ؟</span>
        </div>
      </div>

      <Image src={"/images/7f5dc44dafdcf64d322bb599506aaf510b720c7b.png"} height={54} width={54} alt="comment symbol" className="rotate-30 w-15 h-15"/>
    </div>
  );
};

export default CommentsHeader;
