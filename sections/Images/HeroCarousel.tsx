import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Picture } from "deco-sites/std/components/Picture.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import Icon from "$store/components/ui/Icon.tsx";

export interface BannerItemProps {
  backgroundImage: LiveImage;
  imageAlt: string;
  subtitle: string;
  title: string;
  description: string;
  hasDate?: {
    label?: string;
    startDate?: string;
    endDate?: string;
  };
  price?: number;
  hasButton?: {
    buttonTitle?: string;
    buttonBackground?: "white" | "dark-blue" | "border-black";
  };
  backgroundColor?: "white" | "light-gray" | "dark-blue";
}

export interface HeroCarouselProps {
  type?: "full" | "side-to-side" | "side-to-side-with-input";
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
    hasDate,
    price,
    hasButton,
    backgroundColor,
  }: BannerItemProps,
) {
  const bgColor = !backgroundColor ||
    backgroundColor === "white" && "bg-white" ||
    backgroundColor === "dark-blue" && "bg-[#003153]" ||
    backgroundColor === "light-gray" && "bg-[#E5E5E5]";

  const textColor = backgroundColor === "white"
    ? "text-black md:text-white"
    : "text-white";

  return (
    <div
      class={`${bgColor} ${textColor} md:card md:rounded-none w-full h-full image-full items-center`}
    >
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

      <div class={`card-body w-full items-start md:max-w-xl ${textColor}`}>
        <h2 class={`font-bold text-sm ${textColor}`}>{subtitle}</h2>
        <h1 class={`card-title text-2xl lg:text-5xl pt-3 ${textColor}`}>
          {title}
        </h1>
        <p class="text-normal pt-3 text-normal">{description}</p>
        {hasDate && (
          <div class="flex flex-col gap-1 font-bold text-xs py-3">
            <span>{hasDate.label}</span>
            <span>
              {hasDate.startDate} {hasDate.startDate && hasDate.endDate && "-"}
              {" "}
              {hasDate.endDate}
            </span>
          </div>
        )}

        <div class="card-actions justify-start items-center grid grid-cols-2 py-8 gap-x-4 gap-y-8">
          {price && <p class="font-bold text-3xl">R$ {price}</p>}
          {hasButton && hasButton.buttonTitle && (
            <button
              className={`
              ${
                !hasButton.buttonBackground ||
                hasButton.buttonBackground === "white" &&
                  "bg-white text-black" ||
                hasButton.buttonBackground === "dark-blue" &&
                  "bg-[#003153] text-white" ||
                hasButton.buttonBackground === "border-black" &&
                  "border-black bg-transparent text-black hover:bg-[#003153]"
              } btn rounded-xl`}
            >
              {hasButton.buttonTitle}
            </button>
          )}
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
    hasButton,
    backgroundColor,
  }: BannerItemProps,
) {
  const bgColor = !backgroundColor || backgroundColor === "white"
    ? "bg-white"
    : "bg-[#E5E5E5]";

  return (
    <div
      class={`${bgColor} grid md:grid-cols-2 items-center w-full h-full justify-between pt-4 md:px-6 md:py-24`}
    >
      <div class="order-2 md:order-1 card-body w-full items-start md:max-w-xl">
        <h2 class="text-black font-bold text-lg">{subtitle}</h2>
        <h1 class="card-title text-black text-3xl pt-3">{title}</h1>
        <p class="text-black text-normal pt-3 text-normal">{description}</p>

        <div class="card-actions justify-start items-center grid grid-cols-2 py-8 gap-x-4 gap-y-8">
          {price && <p class="font-bold text-3xl text-black">R$ {price}</p>}
          {hasButton && (
            <button
              className={`
            ${
                !hasButton.buttonBackground ||
                hasButton.buttonBackground === "white" &&
                  "bg-white text-black" ||
                hasButton.buttonBackground === "dark-blue" &&
                  "bg-[#003153] text-white" ||
                hasButton.buttonBackground === "border-black" &&
                  "border-black bg-transparent text-black hover:bg-[#003153] hover:text-white"
              } btn rounded-xl`}
            >
              {hasButton.buttonTitle}
            </button>
          )}
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

function BannerItemSideToSideWithInput(
  {
    backgroundImage,
    imageAlt,
    subtitle,
    title,
    description,
    price,
    hasButton,
    backgroundColor,
  }: BannerItemProps,
) {
  const bgColor = !backgroundColor ||
    backgroundColor === "white" && "bg-white" ||
    backgroundColor === "dark-blue" && "bg-[#003153]" ||
    backgroundColor === "light-gray" && "bg-[#E5E5E5]";

  const textColor = backgroundColor === "white" ? "text-black" : "text-white";

  return (
    <div
      class={`${bgColor} ${textColor} grid md:grid-cols-2 items-center w-full h-full justify-between pt-4 md:px-6 md:py-24`}
    >
      <div class="order-2 md:order-1 card-body w-full items-start md:max-w-xl">
        <h2 class="font-bold text-lg">{subtitle}</h2>
        <h1 class="card-title text-3xl pt-3">{title}</h1>
        <p class="text-normal pt-3 text-normal">{description}</p>

        {price && (
          <div class="card-actions justify-start items-center grid grid-cols-2 py-8 gap-x-4 gap-y-8">
            {price && <p class="font-bold text-3xl">R$ {price}</p>}
          </div>
        )}

        {hasButton && (
          <div class="flex items-center justify-between mt-8 py-2 px-4 bg-white border border-black rounded-xl w-full max-w-lg">
            <input
              type="text"
              placeholder={hasButton.buttonTitle}
              className="w-full max-w-lg focus:outline-none placeholder:text-black"
            />
            <Icon
              id="MagnifyingGlass"
              class="text-black"
              width={18}
              height={18}
              strokeWidth={0.01}
              fill="currentColor"
            />
          </div>
        )}
      </div>

      <div class="order-1 md:order-2 p-3 md:p-0">
        {backgroundImage && (
          <Picture>
            <Image
              media="(min-width: 220px, max-width: 767px)"
              src={backgroundImage}
              alt={imageAlt}
              width={860}
              height={800}
              class="w-full"
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

        {images!.length > 1 && (
          <>
            <Dots images={images} interval={interval} />

            <SliderJS
              rootId={"slide-principal"}
              interval={interval && interval * 1e3}
              infinite
            />
          </>
        )}
      </div>
    );
  }

  if (!type || type === "side-to-side-with-input") {
    return (
      <div
        id={"slide-principal"}
        class="grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_64px]"
      >
        <Slider class="carousel carousel-center w-full col-span-full row-span-full scrollbar-none gap-6">
          {images?.map((image, index) => (
            <Slider.Item index={index} class="carousel-item w-full">
              <BannerItemSideToSideWithInput {...image} />
            </Slider.Item>
          ))}
        </Slider>
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
