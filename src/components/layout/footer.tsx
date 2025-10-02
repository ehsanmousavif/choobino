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
import TelegramIcon from "../icons/TelegramIcon";
import IntagramIcon from "../icons/InstagramIcon";

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

      <div className="flex flex-col gap-20 px-32 py-20 pb-30 relative bg-black">
        <span className="absolute inset-0 bg-gradient-to-tl from-secondary-500 opacity-30 to-black z-10" />
        <span className="absolute inset-0 bg-gradient-to-tr from-secondary-500 opacity-30 to-transparent z-10" />

        <div className="flex justify-between gap-5 z-20">
          <div className="flex gap-5 flex-col flex-1/2 max-w-1/2 xl:max-w-1/4">
            <span className="text-2xl text-[#959595]">خبرنامه چوبینو</span>
            <b className="text-3xl text-white">
              با عضویت در خبرنامه از آخرین اخبار و قوانین ثبت شرکت در کشور های
              جهان باخبر باشید.
            </b>
          </div>
          <div className="flex flex-1/2 items-center justify-end max-w-1/2">
            <div className="flex gap-5 items-center text-white h-18 w-full">
              <div className="flex gap-2.5 bg-[#1C1C1C] backdrop-blur-2xl items-center px-2 md:px-6 rounded-lg h-full flex-1">
                <DevicePhoneMobileIcon className="text-white size-7" />
                <div className="w-[2px] h-1/2 bg-white" />
                <input
                  type="email"
                  className="bg-none border-none outline-none h-full flex-1"
                  placeholder="شماره تلفن همراه خود را وارد کنید"
                />
              </div>
              <Button
                variant="solid"
                className="py-6 bg-secondary-500 text-background h-full px-2 md:px-6 lg:px-8"
              >
                ارسال درخواست
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-[linear-gradient(90deg,rgba(222,222,222,0.5)_0%,_rgba(222,222,222,0.2)_25%,_rgba(0,0,0,0)_50%,_rgba(222,222,222,0.2)_75%,_rgba(222,222,222,0.5)_100%)] h-0.5 w-full z-20" />

        <div className="flex justify-between gap-10 xl:gap-15 z-20">
          <div className="flex gap-5 flex-col w-1/4">
            <b className="text-4xl items-center flex gap-5 text-white">
              <Image
                src="/images/Polygon.png"
                width={40}
                height={40}
                alt="footer image"
              />
              <span>چوبینو</span>
            </b>
            <span className="text-[#A7A7A7] font-bold lg:text-lg">
              چوبینو، مجموعه‌ای حرفه‌ای در زمینه‌ی تولید محصولات چوبی دست‌ساز
              است. هر قطعه با دقت و خلاقیت بالا طراحی می‌شود و ترکیبی از هنر
              سنتی و سبک مدرن را به نمایش می‌گذارد.
            </span>
          </div>

          <div className="flex gap-5 flex-col w-1/4">
            <b className="text-2xl items-center flex gap-5 text-white w-full justify-between">
              <span>درباره ما</span>
              <InformationCircleIcon className="size-10 text-secondary-500" />
            </b>
            <ul className="text-[#A7A7A7] flex flex-col gap-2.5 text-lg font-bold">
              <li>
                <Link href="/about">درباره ما</Link>
              </li>
              <li>
                <Link href="/jobs">فرصت‌های شغلی</Link>
              </li>
            </ul>
          </div>

          <div className="flex gap-5 flex-col w-1/4">
            <b className="text-2xl items-center flex gap-5 text-white w-full justify-between">
              <span>تماس با ما</span>
              <ChatBubbleOvalLeftEllipsisIcon className="size-10 text-secondary-500" />
            </b>
            <a
              href="tel:02191022000"
              className="text-[#A7A7A7] flex flex-col gap-2.5 font-bold text-lg"
            >
              تلفن تماس : ۹۱۰۲۲۰۰۰ - ۰۲۱
            </a>
          </div>
          <div className="flex gap-5 flex-col w-1/4">
            <b className="text-2xl items-center flex gap-5 text-white w-full justify-between">
              <span>ساعات پاسخگویی</span>
              <ClockIcon className="size-10 text-secondary-500" />
            </b>
            <span className="text-[#A7A7A7] flex flex-col gap-2.5 text-lg font-bold">
              همه روزه از ۹ صبح تا ۲۱ به جز ایام تعطیل رسمی
            </span>
          </div>
        </div>

        <div className="flex justify-between gap-5 z-20">
          <div className="flex gap-5 flex-1/2 justify-between items-center max-w-1/4">
            <span className="text-2xl text-[#959595]">پست الکترونیک</span>
            <b className="text-lg flex items-center gap-2.5 text-white">
              <span>Choobino.com@mail.com</span>
              <AtSymbolIcon className="size-7 text-secondary-500" />
            </b>
          </div>
          <div className="flex gap-5 flex-col max-w-1/4">
            <div className="flex items-center gap-2.5">
              <TelegramIcon size={10} color="secondary-500" />
              <IntagramIcon size={10} color="secondary-500" />
            </div>
            <b className="text-lg text-white">
              پالیز کمپانی را در شبکه های اجتماعی دنبال کنید
            </b>
          </div>
        </div>

        <div className="flex gap-10 justify-between items-center z-20">
          <div className="flex gap-5 items-center text-[#9F9F9F] md:text-lg">
            <Link href="/terms">قوانین سایت</Link>
            <Link href="/privacy">سیاست حفظ حریم خصوصی</Link>
            <Link href="/terms-and-conditions">شرایط و ضوابط</Link>
            <Link href="/modern-slavery-statement">بیانیه مدرن</Link>
          </div>
          <span className="text-white">
            کلیه حقوق مادی و معنوی این وبسایت متعلق به چوبینو میباشد. 1403
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
