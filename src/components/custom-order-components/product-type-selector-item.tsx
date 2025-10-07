import { FC, ReactNode } from "react";

interface ProductTypeSelectorItemProp {
  title: string;
  value: string;
  icon: ReactNode;
}

const ProductTypeSelectorItem: FC<ProductTypeSelectorItemProp> = ({
  icon,
  title,
  value,
}) => {
  return (
    <>
      <label className="group flex-1 flex items-center justify-around cursor-pointer max-md:flex-col max-md:gap-4 min-w-20">
        <input
          type="radio"
          name="productType"
          value={value}
          className="hidden"
          defaultChecked
        />

        <span className="flex items-center justify-center w-12 h-12 md:w-22 md:h-22 rounded-full transition duration-300 bg-amber-50 group-has-[:checked]:bg-secondary-400">
          {icon}
        </span>

        <span className="max-md:text-sm font-bold transition duration-300 text-content4 group-has-[:checked]:text-content4-foreground">
          {title}
        </span>
      </label>

      <div className="min-w-0.5 h-7 bg-secondary-400 last:hidden"></div>
    </>
  );
};

export default ProductTypeSelectorItem;
