import { Picture } from "deco-sites/std/components/Picture.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface SectionRoundedProps {
  title: string;
  description: string;
  buttonTitle?: string;
  backgroundImage?: LiveImage;
  imageAlt?: string;
}

export default function SectionRounded(
  { title, description, buttonTitle, backgroundImage, imageAlt }:
    SectionRoundedProps,
) {
  return (
    <div class="flex items-center justify-center w-full h-full my-4 mt-8 md:mt-20 px-6 md:px-0">
      <div class="grid md:grid-cols-2 gap-x-2 gap-y-8 w-full h-full min-h-[410px] max-w-3xl xl:max-w-6xl bg-[#E5E5E5] md:rounded-[52px]">
        <div class="order-2 md:order-1 flex flex-col gap-1 items-start justify-center px-6 pb-16 md:px-0 md:pb-0 md:pl-12">
          <h1 class="card-title text-black text-3xl pt-3">{title}</h1>
          <p class="text-black text-normal pt-3 text-normal pb-4">
            {description}
          </p>

          <button className="flex items-center justify-center btn border-black bg-transparent text-black rounded-xl hover:bg-white">
            {buttonTitle}
          </button>
        </div>

        <div class="order-1 md:order-2 left-0 md:right-0">
          {backgroundImage && (
            <Picture>
              <Image
                media="(min-width: 220px, max-width: 767px)"
                src={backgroundImage}
                alt={imageAlt}
                width={800}
                height={600}
                class="w-full h-full md:rounded-br-[52px] md:rounded-tr-[52px]"
              />
            </Picture>
          )}
        </div>
      </div>
    </div>
  );
}
