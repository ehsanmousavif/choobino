import CheckOutImageInput from "./CheckOutImageInput";

const CheckOutImageInputSection = () => {
  return (
    <section className="py-15 gap-8 flex flex-col">
      <div className="flex flex-col gap-2.5">
        <b className="text-lg">آپلود تصویر نمونه </b>
        <span className="text-content4">
          اگر تصویر نمونه ای دارید برامون بفرستید :)
        </span>
      </div>
      <CheckOutImageInput />
    </section>
  );
};

export default CheckOutImageInputSection;
