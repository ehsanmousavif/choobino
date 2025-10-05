import { HeartIcon } from "@heroicons/react/24/outline";

const CustomTextContent = () => {
  return (
    <div className="flex flex-col gap-8">
      <b className="text-lg">توضیحات تکمیلی </b>
      <label className="flex w-full h-60 rounded-2xl border-content3 border-solid border-1 gap-5 p-8 shadow">
        <span className="font-bold flex gap-5 pt-2 text-lg">
          <HeartIcon className="size-5 md:size-7"/>
          <span>با عشق برای</span>
        </span>
        <div className="pt-0.5 text-content4 text-2xl">|</div>
        <textarea
          placeholder="اینجا حرف دلتو بنویس "
          className="resize-none flex-1 outline-none border-none bg-none py-2"
        ></textarea>
      </label>
    </div>
  );
};

export default CustomTextContent;
