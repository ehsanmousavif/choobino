import {
  CheckBadgeIcon,
  TruckIcon,
  ReceiptPercentIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

import React from "react";

interface BenefitTypes {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const BENEFIT_TEXTS: Record<string, BenefitTypes> = {
  guarantee: {
    title: "تضمین ضمانت اصل کالا",
    description:
      "تمامی محصولات با ضمانت اصل بودن و کیفیت عالی عرضه می‌شوند تا با خیالی آسوده خرید کنید.",
    Icon: CheckBadgeIcon,
  },
  delivery: {
    title: "ارسال به سراسر کشور",
    description:
      "هر جایی از ایران که باشید، سفارش شما با بسته‌بندی مطمئن و در کوتاه‌ترین زمان به دستتان خواهد رسید.",
    Icon: TruckIcon,
  },
  payment: {
    title: "پرداخت آنلاین",
    description:
      "امکان پرداخت اینترنتی از درگاه‌های امن فراهم است تا تجربه‌ای راحت و بدون دغدغه داشته باشید.",
    Icon: ReceiptPercentIcon,
  },
  customization: {
    title: "سفارشی سازی محصول",
    description:
      "هر محصول قابلیت طراحی و ساخت اختصاصی دارد تا کاملاً متناسب با سلیقه و نیاز شما ساخته شود.",
    Icon: PencilSquareIcon,
  },
};

function BenefitCard({ title, description, Icon }: BenefitTypes) {
  return (
    <div className="flex flex-col items-start gap-4 p-4">
      <div className="w-fit h-fit bg-secondary-500/10 p-5 text-secondary-400 rounded-full">
        <Icon className="h-10 w-10" aria-label={title} />
      </div>
      <div className="flex flex-col gap-2 items-start">
        <div className="w-3 h-0.5 bg-secondary mt-6"></div>

        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-foreground-800 font-light line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Benefits() {
  return (
    <section className="w-full py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.values(BENEFIT_TEXTS).map((benefit, index) => (
          <BenefitCard key={index} {...benefit} />
        ))}
      </div>
    </section>
  );
}
