import { useId } from "preact/hooks";
import Image from "deco-sites/std/components/Image.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Icon from "$store/components/ui/Icon.tsx";

export interface ImageCardProps {
  subtitle: string;
  title: string;
  readTime: string;
  backgroundImage: LiveImage;
  imageAlt?: string;
}

export interface RelatedBlogPostsProps {
  images: ImageCardProps[];
  interval?: number;
}

export default function RelatedBlogPosts(
  { images, interval }: RelatedBlogPostsProps,
) {
  const id = `mobile-list-${useId()}`;

  return (
    <div
      id={id}
      class="grid grid-cols-[48px_1fr_48px] px-0 sm:px-5"
    >
      <Slider class="carousel carousel-center sm:carousel-end gap-6 col-span-full row-start-2 row-end-5">
        {images?.map((item, index) => (
          <Slider.Item
            index={index}
            class="carousel-item sm:first:pl-16 last:pr-6 sm:last:pr-0"
          >
            <a href="#" class="flex flex-col gap-4 w-72">
              <div class="flex relative w-full h-full rounded-[52px]">
                {item.backgroundImage && (
                  <figure>
                    <Image
                      class="card w-full rounded-[52px]"
                      src={item.backgroundImage}
                      alt={item.imageAlt}
                      width={293}
                      height={461}
                      loading="lazy"
                    />
                  </figure>
                )}

                <div class="absolute bottom-0 justify-end items-start text-white p-8">
                  <button class="w-full flex flex-col justify-between gap-2 h-full text-start pb-3">
                    <h2 className="font-bold">{item.subtitle}</h2>
                    <h1>{item.title}</h1>
                    <span class="font-bold">Read time: {item.readTime}</span>
                  </button>
                </div>
              </div>
            </a>
          </Slider.Item>
        ))}
      </Slider>

      <>
        <div class="hidden relative sm:block z-10 col-start-1 row-start-3">
          <Slider.PrevButton class="btn btn-circle btn-outline absolute right-1/2 bg-base-100">
            <Icon size={20} id="ChevronLeft" strokeWidth={3} />
          </Slider.PrevButton>
        </div>
        <div class="hidden relative sm:block z-10 col-start-3 row-start-3">
          <Slider.NextButton class="btn btn-circle btn-outline absolute left-1/2 bg-base-100">
            <Icon size={20} id="ChevronRight" strokeWidth={3} />
          </Slider.NextButton>
        </div>
      </>

      {/* <SliderJS rootId={id} interval={interval && interval * 1e3} infinite /> */}
      <SliderJS rootId={id} />
    </div>
  );
}
