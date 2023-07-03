import { Picture } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface PopularProductCardProps {
  backgroundImage?: LiveImage;
  bgImageAlt?: string;
  subtitle?: string;
  title: string;
  description: string;
}

export default function PopularProductCard(
  { backgroundImage, bgImageAlt, subtitle, title, description }:
    PopularProductCardProps,
) {
  return (
    <div className="flex flex-col max-w-xs lg:w-[90%] 2xl:w-full h-full bg-[#F2F2F2] text-black shadow-xl cursor-pointer hover:scale-105 duration-150 transition">
      {backgroundImage && (
        <Picture class="flex w-full h-[218px] bg-white items-center justify-center">
          <img
            media="(min-width: 220px, max-width: 767px)"
            src={backgroundImage}
            alt={bgImageAlt}
            width={180}
            height={180}
          />
        </Picture>
      )}

      <div className="card-body">
        <span class="font-bold">{subtitle}</span>
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
