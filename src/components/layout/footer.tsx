"use client";
import {
  AtSymbolIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ClockIcon,
  DevicePhoneMobileIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import TelegramIcon from "../icons/telegram-icon";
import IntagramIcon from "../icons/instagram-icon";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col">
      {/* پس‌زمینه اصلی */}
      <div className="relative h-80 w-full">
        <Image
          src="/images/footer-image.jpg"
          alt="footer background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative flex flex-col gap-20 px-10 md:px-32 py-20 bg-foreground">
        <div className="absolute inset-0 bg-radial-[at_50%_30%] from-foreground via-foreground to-secondary-700 opacity-70 z-0" />

        <div className="relative z-10 flex justify-between gap-5 max-md:flex-col text-center md:text-start">
          <div className="flex flex-col gap-5 w-full md:w-1/2 max-md:items-center">
            <span className="text-2xl text-default-700 max-lg:text-lg">
              خبرنامه چوبینو
            </span>
            <b className="text-xl lg:text-3xl text-background flex flex-col">
              <span>با عضویت در خبرنامه</span>
              <span>از آخرین اخبار و قوانین ثبت شرکت در</span>
              <span>کشورهای جهان باخبر باشید.</span>
            </b>
          </div>

          <div className="flex w-full md:w-1/2 items-center justify-end max-md:flex-col">
            <div className="flex gap-5 items-center text-background w-full">
              <div className="flex gap-4 bg-[#1C1C1C] backdrop-blur-2xl items-center px-6 rounded-lg flex-1 h-16">
                <DevicePhoneMobileIcon className="text-background w-7 h-7" />
                <div className="w-[2px] h-1/2 bg-background/50" />
                <input
                  type="text"
                  inputMode="numeric"
                  className="bg-transparent border-none outline-none text-background placeholder:text-background/50 flex-1"
                  placeholder="شماره تلفن همراه خود را وارد کنید"
                />
              </div>
              <Button
                variant="solid"
                className="py-6 bg-secondary-500 text-background h-16 px-6 md:px-8 max-md:w-full"
              >
                ارسال درخواست
              </Button>
            </div>
          </div>
        </div>

        <div className="relative h-px w-full bg-gradient-to-r from-background/10 via-transparent to-background/10 opacity-30" />
        <div className="relative z-10 flex justify-between gap-10 xl:gap-15 max-md:flex-col max-md:items-center">
          <div className="flex flex-col gap-5 w-full md:w-1/4">
            <b className="flex items-center gap-5 text-4xl text-background">
              <Image
                src="/images/Polygon.png"
                width={40}
                height={40}
                alt="logo"
              />
              <span>چوبینو</span>
            </b>
            <span className="text-default-700 font-bold leading-relaxed">
              چوبینو، مجموعه‌ای حرفه‌ای در زمینه‌ی تولید محصولات چوبی دست‌ساز
              است. هر قطعه با دقت و خلاقیت بالا طراحی می‌شود و ترکیبی از هنر
              سنتی و سبک مدرن را به نمایش می‌گذارد.
            </span>
          </div>

          <div className="flex flex-col gap-5 w-full md:w-1/4 px-7">
            <b className="text-lg md:text-2xl flex items-center gap-3 justify-between text-background">
              <span>درباره ما</span>
              <InformationCircleIcon className="w-8 h-8 text-secondary-500" />
            </b>
            <ul className="flex flex-col gap-2.5 text-lg font-bold text-default-700">
              <li>
                <Link href="/about">درباره ما</Link>
              </li>
              <li>
                <Link href="/jobs">فرصت‌های شغلی</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-5 w-full md:w-1/4 px-7">
            <b className="text-lg md:text-2xl flex items-center gap-3 justify-between text-background">
              <span>تماس با ما</span>
              <ChatBubbleOvalLeftEllipsisIcon className="w-8 h-8 text-secondary-500" />
            </b>
            <a
              href="tel:02191022000"
              className="text-default-700 font-bold text-lg max-md:text-sm"
            >
              تلفن تماس : ۹۱۰۲۲۰۰۰ - ۰۲۱
            </a>
          </div>
          <div className="flex flex-col gap-5 w-full md:w-1/4 px-7">
            <b className="text-lg md:text-2xl flex items-center gap-3 justify-between text-background">
              <span>ساعات پاسخگویی</span>
              <ClockIcon className="w-8 h-8 text-secondary-500" />
            </b>
            <span className="text-default-700 font-bold text-sm md:text-lg leading-relaxed">
              همه‌روزه از ۹ صبح تا ۲۱ به جز ایام تعطیل رسمی
            </span>
          </div>
        </div>

        <div className="relative z-10 flex justify-between gap-5 max-md:flex-col">
          <div className="flex gap-5 justify-between items-center max-md:hidden">
            <span className="text-2xl text-default-700">پست الکترونیک</span>
            <b className="text-lg flex items-center gap-2.5 text-background">
              <span>Choobino.com@mail.com</span>
              <AtSymbolIcon className="w-7 h-7 text-secondary-500" />
            </b>
          </div>

          <div className="flex flex-col items-center gap-3 w-1/4 max-md:w-full">
            <div className="flex items-center gap-3">
              {[TelegramIcon, IntagramIcon].map((Icon, idx) => (
                <div
                  key={idx}
                  className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors duration-300"
                >
                  <Icon size={40} color="secondary-500" />
                </div>
              ))}
            </div>
            <span className="text-background text-center text-lg max-md:text-base">
              چوبینو را در شبکه‌های اجتماعی دنبال کنید
            </span>
          </div>
        </div>

        <div className="relative z-10 flex justify-between items-center gap-10 max-md:flex-col">
          <div className="flex gap-5 flex-wrap items-center text-default-700 text-base justify-center">
            <Link href="/terms">قوانین سایت</Link>
            <Link href="/privacy">سیاست حفظ حریم خصوصی</Link>
            <Link href="/terms-and-conditions">شرایط و ضوابط</Link>
            <Link href="/modern-slavery-statement">بیانیه مدرن</Link>
          </div>
          <span className="text-background text-center text-sm md:text-base">
            کلیه حقوق مادی و معنوی این وب‌سایت متعلق به <b>چوبینو</b> می‌باشد.
            ۱۴۰۳
          </span>
        </div>
      </div>
    </footer>
  );
}
