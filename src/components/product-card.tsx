import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import { cn } from "@heroui/theme";
import Image from "next/image";

export interface ProductCardDataType {
  imageUrl: string;
  title: string;
  price: string;
  offer?: number;
  offerOnPrice?: string;
}
export function ProductCard({
  imageUrl,
  title,
  price,
  offer,
  offerOnPrice,
}: ProductCardDataType) {
  return (
    <div>
      <div className="w-fit h-fit border-foreground/5 border-2 border-solid p-2 rounded-t-full rounded-br-xl rounded-bl-xl">
        <div className="w-full relative z-10 rounded-xl">
          <Image
            src={imageUrl}
            alt={title}
            width={265}
            height={265}
            className="object-cover h-64 rounded-t-full object-center rounded-xl z-20"
            style={{
              clipPath:
                " polygon(0% 15%, 0 0, 15% 0%, 85% 0%, 100% 0, 100% 15%, 100% 85%, 100% 100%, 85% 100%, 48% 100%, 32.15% 75%, 0 75%)",
            }}
          />
          <div className="absolute left-0 bottom-1 w-1/3 h-16 bg-background rounded-tr-xl"></div>
        </div>
        <div className=" w-full flex items-end justify-between mb-4">
          {offer ? (
            <div className="text-background px-2 py-2 rounded-full font-medium text-sm bg-gradient-to-r from-red-500 to-orange-400">
              {offer}% تخفیف
            </div>
          ) : (
            <div className="p-4"></div>
          )}
          <div>
            <div className=" p-2 md:p-4 rounded-full bg-secondary text-default ">
              <BuildingStorefrontIcon className="w-6 h-6" />
            </div>
          </div>
        </div>
        <span className="text-sm my-4">{title}</span>
        <div className="w-full flex items-center justify-start gap-2 ">
          <span className="font-bold text-sm md:text-md">{price} تومان </span>
          <span
            className={cn(
              offer ? "font-bold text-foreground/30 text-sm" : "hidden"
            )}
          >
            {offerOnPrice} تومان
          </span>
        </div>
      </div>
    </div>
  );
}
