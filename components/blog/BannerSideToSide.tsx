import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Picture } from "deco-sites/std/components/Picture.tsx";
import Image from "deco-sites/std/components/Image.tsx";

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
  hasReadingTime?: {
    time?: string;
  }
  hasLearnMore?: boolean;
  hasButton?: {
    buttonTitle?: string;
    buttonBackground?: "white" | "dark-blue" | "border-black";
  };
  backgroundColor?: "white" | "light-gray" | "dark-blue";
}

export default function BannerItemSideToSide(
  {
    backgroundImage,
    imageAlt,
    subtitle,
    title,
    description,
    price,
    hasButton,
    backgroundColor,
    hasLearnMore,
    hasReadingTime,
  }: BannerItemProps,
) {
  const bgColor = !backgroundColor || 
  backgroundColor === "white" && "bg-white text-black" || 
  backgroundColor === "light-gray" && "bg-[#E5E5E5] text-black" ||
  backgroundColor === "dark-blue" && 'bg-[#003153] text-white';

  return (
    <div
      class={`${bgColor} grid md:grid-cols-2 items-center w-full h-full justify-between pt-4 md:pt-0 md:pl-6`}
    >
      <div class="order-2 md:order-1 card-body w-full items-start md:max-w-xl">
        <h2 class="font-bold text-lg text-[#00F0FF]">{subtitle}</h2>
        <h1 class="card-title text-3xl pt-3">{title}</h1>
        <p class="text-normal pt-3 text-normal">{description}</p>
        {hasReadingTime && (
          <p class="text-normal text-xs pt-8 uppercase font-bold">Reading time: {hasReadingTime.time}</p>
        )}

        <div class="card-actions justify-start items-center grid grid-cols-2 py-8 gap-x-4 gap-y-8">
          {price && <p class="font-bold text-3xl text-black">R$ {price}</p>}

          {hasLearnMore && (
            <div class="flex items-center justify-center gap-2 font-bold hover:underline cursor-pointer">
              <span>Learn more</span>
              <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.57043 17.9595L15.1904 11.3395L14.0604 10.2095L8.80043 15.4695L8.80043 0.189453L7.20043 0.189453L7.20043 15.4595L1.94043 10.1995L0.810428 11.3295L7.43043 17.9495C7.75043 18.2695 8.25043 18.2695 8.57043 17.9595Z" fill="white"/>
              </svg>
            </div>
          )}

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
          <>
          <Picture class="block md:hidden">
            <Image
              media="(min-width: 220px, max-width: 767px)"
              src={backgroundImage}
              alt={imageAlt}
              width={940}
              height={600}
              loading="lazy"
              class="w-full rounded-tr-[52px] rounded-br-[32px] -translate-x-6 md:-translate-x-0 pt-10"
            />
          </Picture>

          <Picture class="hidden md:block">
            <Image
              media="(min-width: 220px, max-width: 767px)"
              src={backgroundImage}
              alt={imageAlt}
              width={850}
              height={850}
              loading="lazy"
              class="w-full rounded-l-full"
            />
          </Picture>
          </>
        )}
      </div>
    </div>
  );
}
