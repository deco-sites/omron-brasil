import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Picture } from "deco-sites/std/components/Picture.tsx";
import Image from "deco-sites/std/components/Image.tsx";

export interface BannerItemProps {
  backgroundImage: LiveImage;
  imageAlt: string;
  subtitle: string;
  title: string;
  description: string;
  price?: number;
  buttonTitle: string;
  backgroundColor?: "white" | "light-gray";
}

export interface HeroCarouselProps {
  type?: "full" | "side-to-side";
  images?: BannerItemProps[];
  interval?: number;
}

function Dots({ images, interval = 0 }: HeroCarouselProps) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @property --dot-progress {
            syntax: '<percentage>';
            inherits: false;
            initial-value: 0%;
          }
          `,
        }}
      />
      <ul class="carousel justify-start col-span-full gap-4 z-10 row-start-4 px-6 ml-1">
        {images?.map((_, index) => (
          <li class="carousel-item">
            <Slider.Dot index={index}>
              <div class="py-5">
                <div
                  class="w-4 h-4 rounded-full group-disabled:animate-progress bg-gradient-to-r from-base-100 from-[length:var(--dot-progress)] to-[rgba(255,255,255,0.4)] to-[length:var(--dot-progress)]"
                  style={{ animationDuration: `${interval}s` }}
                />
              </div>
            </Slider.Dot>
          </li>
        ))}
      </ul>
    </>
  );
}

function BannerItemFull(
  {
    backgroundImage,
    imageAlt,
    subtitle,
    title,
    description,
    price,
    buttonTitle,
  }: BannerItemProps,
) {
  return (
    <div class="md:card md:rounded-none w-full h-full image-full bg-[#003153] items-center">
      {backgroundImage && (
        <Picture>
          <Image
            media="(min-width: 220px, max-width: 767px)"
            src={backgroundImage}
            alt={imageAlt}
            width={1220}
            height={600}
            class="w-full rounded-r-[32px] rounded-tr-[52px] -translate-x-6 md:translate-x-0 md:rounded-none pt-10 md:pt-0"
          />
        </Picture>
      )}

      <div class="card-body w-full items-start md:max-w-xl">
        <h2 class="text-white font-bold text-sm">{subtitle}</h2>
        <h1 class="card-title text-white text-2xl pt-3">{title}</h1>
        <p class="text-white text-normal pt-3 text-normal">{description}</p>

        <div class="card-actions justify-start items-center grid grid-cols-2 py-8 gap-x-4 gap-y-8">
          <p class="font-bold text-3xl text-white">R$ {price}</p>
          <button className="btn bg-white text-black rounded-xl">
            {buttonTitle}
          </button>
        </div>
      </div>
    </div>
  );
}

function BannerItemSideToSide(
  {
    backgroundImage,
    imageAlt,
    subtitle,
    title,
    description,
    price,
    buttonTitle,
    backgroundColor,
  }: BannerItemProps,
) {
  const bgColor = !backgroundColor || backgroundColor === "white" ? 'bg-white' : 'bg-[#E5E5E5]';

  return (
    <div class={`${bgColor} grid md:grid-cols-2 items-center w-full h-full justify-between pt-4 md:px-6 md:py-24`}>
      <div class="order-2 md:order-1 card-body w-full items-start md:max-w-xl">
        <h2 class="text-black font-bold text-lg">{subtitle}</h2>
        <h1 class="card-title text-black text-3xl pt-3">{title}</h1>
        <p class="text-black text-normal pt-3 text-normal">{description}</p>

        <div class="card-actions justify-start items-center grid grid-cols-2 py-8 gap-x-4 gap-y-8">
          {price && <p class="font-bold text-3xl text-black">R$ {price}</p>}
          <button className="btn border-black bg-transparent text-black rounded-xl hover:bg-white">
            {buttonTitle}
          </button>
        </div>
      </div>

      <div class="order-1 md:order-2 left-0 md:right-0">
        {backgroundImage && (
          <Picture>
            <Image
              media="(min-width: 220px, max-width: 767px)"
              src={backgroundImage}
              alt={imageAlt}
              width={940}
              height={600}
              class="w-full rounded-tr-[52px] rounded-br-[32px] md:rounded-tl-[32px] md:rounded-bl-[32px] md:rounded-tr-[0%] md:rounded-br-[0%] -translate-x-6 md:-translate-x-0 pt-10 md:pt-0"
            />
          </Picture>
        )}
      </div>
    </div>
  );
}

export default function HeroCarousel(
  { images, interval, type }: HeroCarouselProps,
) {
  if (!type || type === "full") {
    return (
      <div
        id={"slide-principal"}
        class="grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_64px]"
      >
        <Slider class="carousel carousel-center w-full col-span-full row-span-full scrollbar-none gap-6">
          {images?.map((image, index) => (
            <Slider.Item index={index} class="carousel-item w-full">
              <BannerItemFull {...image} />
            </Slider.Item>
          ))}
        </Slider>

        <Dots images={images} interval={interval} />

        <SliderJS
          rootId={"slide-principal"}
          interval={interval && interval * 1e3}
          infinite
        />
      </div>
    );
  }

  return (
    <div
      id={"slide-principal"}
      class="grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_64px]"
    >
      <Slider class="carousel carousel-center w-full col-span-full row-span-full scrollbar-none gap-6">
        {images?.map((image, index) => (
          <Slider.Item index={index} class="carousel-item w-full">
            <BannerItemSideToSide {...image} />
          </Slider.Item>
        ))}
      </Slider>
    </div>
  );
}
