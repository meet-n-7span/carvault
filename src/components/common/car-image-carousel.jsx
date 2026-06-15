import { useEffect, useMemo, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export default function CarImageCarousel({ images = [], alt = "Car image" }) {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  const galleryImages = useMemo(() => {
    return images.filter(Boolean);
  }, [images]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateCurrentSlide = () => {
      setCurrent(api.selectedScrollSnap());
    };

    updateCurrentSlide();
    api.on("select", updateCurrentSlide);

    return () => {
      api.off("select", updateCurrentSlide);
    };
  }, [api]);

  if (galleryImages.length === 0) {
    return (
      <div className="flex aspect-4/3 w-full items-center justify-center rounded-xl bg-slate-100 text-sm text-slate-500 lg:max-w-190 xl:max-w-205">
        No images available
      </div>
    );
  }

  return (
    <div className="w-full">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          loop: galleryImages.length > 1,
        }}
      >
        <CarouselContent>
          {galleryImages.map((src, index) => (
            <CarouselItem key={`${src}-${index}`}>
              <figure className="overflow-hidden border border-slate-200 bg-white p-2 shadow-sm rounded-2xl">
                <img
                  src={src}
                  alt={`${alt} ${index + 1}`}
                  className="aspect-4/3 w-full bg-slate-50 object-cover lg:max-h-50 xl:max-h-90 rounded-2xl"
                />
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        {galleryImages.length > 1 ? (
          <>
            <CarouselPrevious className="left-4 top-1/2 size-9 -translate-y-1/2 border-none bg-white/90 shadow-md hover:bg-white lg:left-5 lg:size-10" />
            <CarouselNext className="right-4 top-1/2 size-9 -translate-y-1/2 border-none bg-white/90 shadow-md hover:bg-white lg:right-5 lg:size-10" />
          </>
        ) : null}
      </Carousel>

      <div className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:mt-4 lg:gap-3">
        {galleryImages.map((src, index) => (
          <button
            key={`${src}-thumb-${index}`}
            type="button"
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "shrink-0 overflow-hidden rounded-2xl border-2 bg-white p-1 transition-all",
              index === current
                ? "border-orange-500 shadow-md"
                : "border-transparent opacity-60 hover:opacity-100",
            )}
          >
            <img
              src={src}
              alt={`${alt} thumbnail ${index + 1}`}
              className="h-14 w-20 rounded-xl object-cover sm:h-16 sm:w-24 lg:h-18 lg:w-26"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
