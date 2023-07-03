import { Picture } from "deco-sites/std/components/Picture.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Logo {
  image: LiveImage;
  alt?: string;
}

export interface BannerProps {
  backgroundColor?: "white" | "dark-blue";
  bgImage: LiveImage;
  bgImageAlt: string;
  title: string;
  description: string;
  logos?: Logo[];
  buttonTitle?: string;
}

export default function Banner(
  { title, description, bgImage, bgImageAlt, logos, buttonTitle, backgroundColor }: BannerProps,
) {
  const bgColor = !backgroundColor || backgroundColor === "white" ? 'bg-[#F2F2F2]' : 'bg-[#003153]';
  const textColor = !backgroundColor || backgroundColor === "white" ? 'text-black' : 'text-white';

  return (
    <div class={`${bgColor} ${textColor} md:card md:rounded-none w-full h-full image-full items-center`}>
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

      <div class="card-body px-16 w-full items-center md:items-start md:max-w-xl">
        <h2 class={`${textColor} card-title font-normal text-4xl`}>{title}</h2>
        <p class={`${textColor} text-normal pt-3`}>{description}</p>

        {buttonTitle && (
          <button class="flex items-center justify-center btn bg-[#005EB8] hover:bg-[#005EB8] border-none max-w-[172px] w-full rounded-xl text-white mt-12">
            <span class="text-xs font-bold">{buttonTitle}</span>
          </button>
        )}

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
      </div>
    </div>
  );
}
