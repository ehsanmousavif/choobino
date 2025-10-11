import { useCallback, useEffect, useState } from "react";
import { type EmblaCarouselType } from "embla-carousel";

type UseProgressButtontonType = {
  selectedIndex: number;
  scrollSnaps: number[];
};

export const useBlogProgressButton = (
  emblaApi: EmblaCarouselType | undefined
): UseProgressButtontonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    const snaps = emblaApi.scrollSnapList();
    setScrollSnaps(snaps);
    if (snaps.length) setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    const index = emblaApi.selectedScrollSnap();
    setSelectedIndex(index);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);

    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("reInit", onInit);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
  };
};
