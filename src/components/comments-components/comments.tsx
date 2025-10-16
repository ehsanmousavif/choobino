import Image from "next/image";
import CommentsCarosel from "./comments-carosel";
import CommentsHeader from "./comments-header";

const comments = [
  {
    quote:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    name: "محمد رحمانی گلیان",
    title: "چوبینو بی نظیر ترینه !",
    profileUrl: "/images/user1.jpg",
    identity: "اینستاگرام",
  },
  {
    quote: "تجربه خرید خیلی خوبی داشتم، کیفیت محصولات فوق‌العاده بود.",
    name: "زهرا احمدی",
    title: "مشتری دائمی",
    profileUrl: "/images/user1.jpg",
    identity: "تلگرام",
  },
  {
    quote: "ارسال به موقع و پشتیبانی عالی، واقعا راضی هستم.",
    name: "رضا مرادی",
    title: "کارآفرین",
    profileUrl: "/images/user1.jpg",
    identity: "اینستاگرام",
  },
  {
    quote: "محصولات خیلی با دقت و طراحی حرفه‌ای ساخته شده بودن.",
    name: "سمیه کریمی",
    title: "طراح داخلی",
    profileUrl: "/images/user1.jpg",
    identity: "واتساپ",
  },
  {
    quote: "پیشنهاد می‌کنم حتما از خدماتشون استفاده کنید، پشیمون نمیشید.",
    name: "علی موسوی",
    title: "توسعه‌دهنده وب",
    profileUrl: "/images/user1.jpg",
    identity: "اینستاگرام",
  },
  {
    quote: "بسته‌بندی محصولات خیلی شیک و باکیفیت بود.",
    name: "ندا شریفی",
    title: "دانشجو",
    profileUrl: "/images/user1.jpg",
    identity: "تلگرام",
  },
  {
    quote: "رنگ و طرح دقیقا همون چیزی بود که انتظار داشتم.",
    name: "حسین جعفری",
    title: "معمار",
    profileUrl: "/images/user1.jpg",
    identity: "اینستاگرام",
  },
  {
    quote: "پشتیبانی صبور و خوش‌برخورد بودن، خیلی کمکم کردن.",
    name: "مریم رضایی",
    title: "مدرس",
    profileUrl: "/images/user1.jpg",
    identity: "واتساپ",
  },
  {
    quote: "قیمت‌ها نسبت به کیفیت واقعا منصفانه‌ست.",
    name: "مجتبی شریعتی",
    title: "بازاریاب",
    profileUrl: "/images/user1.jpg",
    identity: "اینستاگرام",
  },
  {
    quote: "به همه دوستانم معرفی کردم چون خیلی راضی بودم.",
    name: "الهام کاظمی",
    title: "عکاس",
    profileUrl: "/images/user1.jpg",
    identity: "تلگرام",
  },
];

export default function Comments() {
  return (
    <section className="flex flex-col gap-28">
      <CommentsHeader />
      <div className="flex flex-col">
        <CommentsCarosel comments={comments} direction="right" />
        <CommentsCarosel comments={comments} direction="left" />

        <div className="flex justify-end w-36 h-36 relative">
          <Image
            src={"/images/635fd0a699c1c847bf2834e084409a65e49ab8b1.png"}
            fill
            alt="comments image"
            className="object-cover -rotate-15 grayscale max-md:hidden"
          />
        </div>
      </div>
    </section>
  );
}
