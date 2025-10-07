import { HeartIcon } from "@heroicons/react/24/outline";

const CustomTextContent = () => {
  return (
    <div className="flex flex-col gap-8">
      <b className="text-lg">محتوای متنی</b>
      <label className="flex w-full h-60 rounded-2xl border-content3 border-solid border-1 gap-2 md:gap-5 p-8 shadow max-md:flex-col">
        <span className="font-bold flex gap-5 pt-2 text-lg">
          <HeartIcon className="size-5 md:size-7"/>
          <span>با عشق برای</span>
        </span>
        <div className="mt-2 bg-content4 w-0.5 h-6 max-md:hidden"/>
        <textarea
          placeholder="اینجا حرف دلتو بنویس"
          className="resize-none flex-1 outline-none border-none bg-none py-2"></textarea>
      </label>
    </div>
  );
};

export default CustomTextContent;
