import {
  CheckBadgeIcon,
  PencilSquareIcon,
  ReceiptPercentIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
("@heroicons/react/outline");
export function Benefits() {
  return (
    <section className="w-full rounded-3xl h-[20vh] min-h-52 max-h-98 relative pt-16">
      <div className="w-full flex itmes-center justify-center gap-6">
        <div className="w-1/4 h-auto flex flex-col items-start gap-4 p-0 mx-0">
          <div className=" w-fit h-fit bg-secondary-500/10 p-5 text-secondary-400 rounded-full mx-0">
            <CheckBadgeIcon className="size-10" />
          </div>
          <div className="bg-secondary w-4 h-0.5 mt-8"></div>
          <div className="flex flex-col gap-2 itmes-start">
            <span className="text-xl font-bold">تضمین ضمانت اصل کالا</span>
            <span className="text-sm text-foreground-800 font-light">
              تمامی محصولات با ضمانت اصل بودن و کیفیت عالی عرضه می‌شوند تا با
              خیالی آسوده خرید کنید.
            </span>
          </div>
        </div>
        <div className="w-1/4 h-auto flex flex-col items-start gap-4 p-0 mx-0">
          <div className=" w-fit h-fit bg-secondary-500/10 p-5 text-secondary-400 rounded-full max-0">
            <TruckIcon className="size-10" />
          </div>
          <div className="bg-secondary w-4 h-0.5 mt-8"></div>
          <div className="flex flex-col gap-2 itmes-start">
            <span className="text-xl font-bold">ارسال به سراسر کشور</span>
            <span className="text-sm text-foreground-800 font-light">
              هر جایی از ایران که باشید، سفارش شما با بسته‌بندی مطمئن و در
              کوتاه‌ترین زمان به دستتان خواهد رسید.
            </span>
          </div>
        </div>
        <div className="w-1/4 h-auto flex flex-col items-start gap-4 p-0 mx-0">
          <div className=" w-fit h-fit bg-secondary-500/10 p-5 text-secondary-400 rounded-full max-0">
            <ReceiptPercentIcon className="size-10" />
          </div>
          <div className="bg-secondary w-4 h-0.5 mt-8"></div>
          <div className="flex flex-col gap-2 itmes-start">
            <span className="text-xl font-bold">پرداخت آنلاین</span>
            <span className="text-sm text-foreground-800 font-light">
              امکان پرداخت اینترنتی از درگاه‌های امن فراهم است تا تجربه‌ای راحت
              و بدون دغدغه داشته باشید.
            </span>
          </div>
        </div>
        <div className="w-1/4 h-auto flex flex-col items-start gap-4 p-0 mx-0">
          <div className=" w-fit h-fit bg-secondary-500/10 p-5 text-secondary-400 rounded-full max-0">
            <PencilSquareIcon className="size-10" />
          </div>
          <div className="bg-secondary w-4 h-0.5 mt-8"></div>
          <div className="flex flex-col gap-2 itmes-start">
            <span className="text-xl font-bold">سفارشی سازی محصول</span>
            <span className="text-sm text-foreground-800 font-light">
              هر محصول قابلیت طراحی و ساخت اختصاصی دارد تا کاملاً متناسب با
              سلیقه و نیاز شما ساخته شود.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
