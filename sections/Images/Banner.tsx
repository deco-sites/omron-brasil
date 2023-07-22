import { Picture } from "deco-sites/std/components/Picture.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Logo {
  image: LiveImage;
  alt?: string;
}

export interface BannerProps {
  backgroundColor?: "white" | "dark-blue";
  alignment?: "center" | "start";
  bgImage: LiveImage;
  bgImageAlt: string;
  subtitle?: string;
  title: string;
  description: string;
  duration?: string;
  logos?: Logo[];
  buttonTitle?: string;
}

export default function Banner(
  {
    subtitle,
    title,
    description,
    alignment,
    duration,
    bgImage,
    bgImageAlt,
    logos,
    buttonTitle,
    backgroundColor,
  }: BannerProps,
) {
  const bgColor = !backgroundColor || backgroundColor === "white"
    ? "bg-pale-gray"
    : "bg-dark-blue";
  const textColor = !backgroundColor || backgroundColor === "white"
    ? "text-black"
    : "text-white";

  return (
    <div
      class={`${bgColor} ${textColor} md:card md:rounded-none w-full h-full image-full items-center`}
    >
      <Picture class="w-full h-full">
        <Image
          media="(min-width: 220px, max-width: 767px)"
          src={bgImage}
          alt={bgImageAlt}
          width={1220}
          height={600}
          class="w-full h-full"
        />
      </Picture>

      <div
        class={`${
          alignment === "center" ? "items-center md:items-start" : "items-start"
        } card-body px-16 w-full md:max-w-2xl`}
      >
        {subtitle && (
          <span class="text-highlight-blue font-bold text-normal pt-3">
            {subtitle}
          </span>
        )}
        <h2 class={`${textColor} card-title font-normal text-2xl lg:text-4xl`}>
          {title}
        </h2>
        <p class={`${textColor} text-normal pt-3`}>{description}</p>
        {duration && (
          <span class={`${textColor} pt-4 uppercase text-sm font-bold`}>
            {duration}
          </span>
        )}

        {buttonTitle && (
          <button class="flex items-center justify-center btn bg-blue-middle hover:bg-blue-middle border-none max-w-[172px] w-full rounded-xl text-white mt-12">
            <span class="text-xs font-bold">{buttonTitle}</span>
          </button>
        )}

        {logos && (
          <div class="card-actions justify-start grid md:grid-cols-2 pt-12 gap-x-16 gap-y-8 pb-12">
            {logos?.map((logo) => (
              <Image
                class="object-center"
                src={logo?.image}
                alt={logo?.alt}
                width={180}
                height={60}
                loading="lazy"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
