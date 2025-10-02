"use client";
import { cn } from "@heroui/theme";
import React, { useEffect, useRef, useState } from "react";

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

const CommentsCaroselV2: React.FC<CommentsCaroselProps> = ({
  direction,
  className,
  comments,
}) => {
  const [startCarousel, setStartCarousel] = useState<boolean>(false);
  // Ref to the outer container, used to control animation direction and speed
  const containerRef = useRef<HTMLDivElement>(null);
  // Ref to the scrolling list, used to duplicate items and manipulate content
  const scrollerRef = useRef<HTMLDivElement>(null);

  async function addAnimation() {
    if (scrollerRef.current && !startCarousel) {
      const items = Array.from(scrollerRef.current.children);
      items.forEach((i) => {
        const clone = i.cloneNode(true);
        scrollerRef.current?.appendChild(clone);
      });
      setStartCarousel(true);
    }

    getDirection();
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  useEffect(() => {
    addAnimation();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "py-10 bg-gray-300 overflow-hidden relative z-20",
        className
      )}
    >
      <div
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          startCarousel && "comments-carosel"
        )}
        style={
          {
            "--animation-direction":
              direction === "left" ? "forwards" : "reverse",
          } as React.CSSProperties
        }
      >
        {comments.map((i,idx) => (
          <div
            className="w-72 h-36 shrink-0 rounded-2xl bg-default-700 p-6"
            key={idx}
          >
            {i.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsCaroselV2;
