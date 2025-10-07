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

const Footer = () => {
  return (
    <footer className="w-full flex flex-col">
      <div className="relative h-80 w-full">
        <Image
          src="/images/footer-image.jpg"
          alt="footer image"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-20 px-10 md:px-32 py-20 pb-30 relative bg-foreground">
        <div className="absolute inset-0  bg-radial-[at_50%_30%] from-foreground via-foreground to-secondary-700 opacity-60 z-10" />

        <div className="flex justify-between gap-5 z-20 max-md:flex-col text-center md:text-start">
          <div className="flex gap-5 flex-col flex-1/2 max-md:flex-1">
            <span className="text-2xl text-default-700 max-lg:text-lg">
              خبرنامه چوبینو
            </span>
            <b className="text-xl text-background flex flex-col lg:text-3xl">
              <span>با عضویت در خبرنامه</span>
              <span>از آخرین اخبار و قوانین ثبت شرکت در</span>
              <span>کشور های جهان باخبر باشید.</span>
            </b>
          </div>

          <div className="flex flex-1/2 items-center justify-end max-w-1/2 max-md:max-w-full max-md:flex-1">
            <div className="flex gap-5 items-center text-background h-18 w-full max-md:flex-col">
              <div className="flex gap-4 bg-[#1C1C1C] backdrop-blur-2xl items-center px-4 max-md:w-full md:px-6 rounded-lg h-full flex-1">
                <DevicePhoneMobileIcon className="text-background size-7" />
                <div className="w-[2px] h-1/2 bg-background" />
                <input
                  type="email"
                  className="bg-none border-none outline-none h-full flex-1 py-4"
                  placeholder="شماره تلفن همراه خود را وارد کنید"
                />
              </div>
              <Button
                variant="solid"
                className="py-6 bg-secondary-500 text-background h-full px-2 md:px-6 lg:px-8 max-md:w-full"
              >
                ارسال درخواست
              </Button>
            </div>
          </div>
        </div>

        <div className="h-0.5 w-full z-20 relative opacity-20 max-md:hidden">
          <span className="absolute inset-0 bg-gradient-to-r from-background via-bg-background via-transparent to-background block h-full" />
        </div>

        <div className="flex justify-between gap-10 xl:gap-15 z-20 max-md:items-center max-md:flex-col">
          <div className="flex gap-5 flex-col w-full md:w-1/4">
            <b className="text-4xl items-center flex gap-5 text-background">
              <Image
                src="/images/Polygon.png"
                width={40}
                height={40}
                alt="footer image"
              />
              <span>چوبینو</span>
            </b>
            <span className="text-default-700 font-bold">
              چوبینو، مجموعه‌ای حرفه‌ای در زمینه‌ی تولید محصولات چوبی دست‌ساز
              است. هر قطعه با دقت و خلاقیت بالا طراحی می‌شود و ترکیبی از هنر
              سنتی و سبک مدرن را به نمایش می‌گذارد.
            </span>
          </div>

          <div className="flex gap-5 justify-between items-center w-full py-10 md:hidden">
            <span className="text-base text-default-700">پست الکترونیک</span>
            <b className="text-sm flex items-center gap-2.5 text-background">
              <span>Choobino.com@mail.com</span>
              <AtSymbolIcon className="size-7 text-secondary-500" />
            </b>
          </div>

          <div className="flex gap-5 flex-col w-full md:w-1/4 px-7">
            <b className="text-lg md:text-2xl items-center flex md:gap-5 text-background w-full justify-between">
              <span>درباره ما</span>
              <InformationCircleIcon className="size-8 md:size-10 text-secondary-500" />
            </b>
            <ul className="text-default-700 flex flex-col gap-2.5 text-lg font-bold">
              <li>
                <Link href="/about">درباره ما</Link>
              </li>
              <li>
                <Link href="/jobs">فرصت‌های شغلی</Link>
              </li>
            </ul>
          </div>

          <div className="flex gap-5 flex-col w-full md:w-1/4 px-7">
            <b className="text-lg md:text-2xl items-center flex md:gap-5 text-background w-full justify-between">
              <span>تماس با ما</span>
              <ChatBubbleOvalLeftEllipsisIcon className="size-8 md:size-10 text-secondary-500" />
            </b>
            <a
              href="tel:02191022000"
              className="text-default-700 flex flex-col gap-2.5 font-bold text-lg max-md:text-sm"
            >
              تلفن تماس : ۹۱۰۲۲۰۰۰ - ۰۲۱
            </a>
          </div>

          <div className="flex gap-5 flex-col w-full md:w-1/4 px-7">
            <b className="text-lg md:text-2xl items-center flex md:gap-5 text-background w-full justify-between">
              <span>ساعات پاسخگویی</span>
              <ClockIcon className="size-8 md:size-10 text-secondary-500" />
            </b>
            <span className="text-default-700 flex flex-col gap-2.5 text-sm md:text-lg font-bold">
              همه روزه از ۹ صبح تا ۲۱ به جز ایام تعطیل رسمی
            </span>
          </div>
        </div>

        <div className="flex justify-between gap-5 z-20 max-md:flex-col">
          <div className="flex gap-5 justify-between items-center max-md:hidden">
            <span className="text-2xl text-default-700">پست الکترونیک</span>
            <b className="text-lg flex items-center gap-2.5 text-background">
              <span>Choobino.com@mail.com</span>
              <AtSymbolIcon className="size-7 text-secondary-500" />
            </b>
          </div>

          <div className="flex gap-5 flex-col w-1/4 max-md:w-full items-center">
            <div className="flex items-center gap-2.5">
              <TelegramIcon size={40} color="secondary-500" />
              <IntagramIcon size={40} color="secondary-500" />
            </div>
            <div className="text-lg text-background flex flex-col max-md:text-center max-md:flex-row">
              پالیز کمپانی را در شبکه های اجتماعی دنبال کنید
            </div>
          </div>
        </div>

        <div className="flex gap-10 justify-between items-center z-20 max-md:flex-col">
          <div className="flex gap-5 items-center text-default-700 text-base max-md:flex-col">
            <Link href="/terms">قوانین سایت</Link>
            <Link href="/privacy">سیاست حفظ حریم خصوصی</Link>
            <Link href="/terms-and-conditions">شرایط و ضوابط</Link>
            <Link href="/modern-slavery-statement">بیانیه مدرن</Link>
          </div>
          <span className="text-background text-center">
            کلیه حقوق مادی و معنوی این وبسایت متعلق به <b>چوبینو</b> میباشد.
            1403
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
