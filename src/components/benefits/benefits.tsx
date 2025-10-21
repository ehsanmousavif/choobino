// components/benefits.tsx

import {
  CheckBadgeIcon,
  PencilSquareIcon,
  ReceiptPercentIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

const benefitsData = [
  {
    title: "تضمین ضمانت اصل کالا",
    description:
      "تمامی محصولات با ضمانت اصل بودن و کیفیت عالی عرضه می‌شوند تا با خیالی آسوده خرید کنید.",
    icon: CheckBadgeIcon,
  },
  {
    title: "ارسال به سراسر کشور",
    description:
      "هر جایی از ایران که باشید، سفارش شما با بسته‌بندی مطمئن و در کوتاه‌ترین زمان به دستتان خواهد رسید.",
    icon: TruckIcon,
  },
  {
    title: "پرداخت آنلاین",
    description:
      "امکان پرداخت اینترنتی از درگاه‌های امن فراهم است تا تجربه‌ای راحت و بدون دغدغه داشته باشید.",
    icon: ReceiptPercentIcon,
  },
  {
    title: "سفارشی سازی محصول",
    description:
      "هر محصول قابلیت طراحی و ساخت اختصاصی دارد تا کاملاً متناسب با سلیقه و نیاز شما ساخته شود.",
    icon: PencilSquareIcon,
  },
];

export function Benefits() {
  return (
    <section className="w-full relative">
      <div className="w-full flex items-center justify-center gap-6">
        {benefitsData.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="h-auto flex flex-col items-start gap-4 p-0 mx-0"
            >
              <div className="w-fit h-fit bg-secondary-500/10 p-5 text-secondary-400 rounded-full mx-0">
                {/* HeroUI size prop handles icon sizing */}
                <Icon className="w-10 h-10" aria-hidden="true" />
              </div>
              <div className="bg-secondary w-4 h-0.5 mt-8"></div>
              <div className="flex flex-col gap-2 items-start">
                <span className="text-xl font-bold">{item.title}</span>
                <span className="text-sm text-foreground-800 font-light">
                  {item.description}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
