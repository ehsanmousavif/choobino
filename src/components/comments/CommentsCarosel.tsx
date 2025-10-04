"use client";
import { cn } from "@heroui/theme";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

type commentsType = {
  quote: string;
  name: string;
  title: string;
  profileUrl: string;
  identity: string;
};

interface CommentsCaroselProps {
  comments: commentsType[];
  direction: "left" | "right";
  className?: string;
}

const CommentsCarosel: React.FC<CommentsCaroselProps> = ({
  direction,
  className,
  comments,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  async function addAnimation() {
    if (scrollerRef.current && containerRef.current) {
      const items = Array.from(scrollerRef.current.children);
      items.forEach((i) => {
        const clone = i.cloneNode(true);
        scrollerRef.current?.appendChild(clone);
      });
    }
    getDirection();
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--scroll-amount",
        direction === "left" ? "-50%" : "50%"
      );
    }
  };

  useEffect(() => {
    addAnimation();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "overflow-hidden relative z-20 flex comments-carosel-container py-2",
        className,
        direction === "left" ? "flex-row-reverse" : "flex-row"
      )}
    >
      <div
        ref={scrollerRef}
        className="flex w-max min-w-full shrink-0 flex-nowrap gap-8 py-2 comments-carosel"
      >
        {comments.map((i, idx) => (
          <div
            className="w-120 flex flex-col justify-between gap-4 rounded-2xl py-4 md:py-8 px-5 md:px-10 shrink-0 bg-content2"
            key={idx}
          >
            <span className="text-7xl text-danger-900">;;</span>
            <b className="text-2xl">{i.title}</b>
            <span className="text-lg flex-1">{i.quote}</span>
            <span className="text-5xl text-danger-900">-</span>

            <div className="flex items-center gap-6">
              <Image
                src={i.profileUrl}
                height={63}
                width={63}
                alt={i.name}
                className="object-cover rounded-full"
              />
              <div className="flex flex-col">
                <b className="text-lg">{i.name}</b>
                <span>{i.identity}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsCarosel;
