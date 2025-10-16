import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function CheckoutHeader() {
  return (
    <div className="flex flex-col items-center text-center gap-5">
      <b className="text-2xl flex items-center justify-center gap-5">
        <span>ایده ای که دادی نهایی میشه !</span>
        <div className="w-8 h-8">
          <CheckCircleIcon />
        </div>
      </b>

      <span className="text-foreground/40 text-base md:text-lg font-medium flex items-center">
        اگر سفارشی که دادی طبق چیزی هست که بالا نوشتی بزن روی دکمه بریم مرحله
        بعدی <ArrowLongLeftIcon className="w-5 h-5" />
      </span>
    </div>
  );
}
