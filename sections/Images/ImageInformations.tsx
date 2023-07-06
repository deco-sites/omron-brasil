import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Picture } from "deco-sites/std/components/Picture.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import Benefits, {
  Props as BenefitsProps,
} from "$store/sections/Content/Benefits.tsx";

export interface ImageInformationsProps {
  backgroundImage?: LiveImage;
  imageAlt?: string;
  title?: string;
  description?: string;
  benefit: BenefitsProps;
}

export default function ImageInformations(
  { backgroundImage, imageAlt, title, description, benefit }:
    ImageInformationsProps,
) {
  return (
    <section class="flex w-full h-full">
      <div class="relative flex flex-col items-start text-start image-full md:min-h-[823px]">
        {backgroundImage && (
          <Picture>
            <Image
              src={backgroundImage}
              alt={imageAlt}
              width={1220}
              height={600}
              class="w-full h-full"
              loading="lazy"
            />
          </Picture>
        )}

        <div class="md:absolute flex flex-col items-start justify-between top-0 bottom-0 text-white bg-[#003153] md:bg-transparent w-full">
          <div class="flex flex-col items-start justify-start gap-5 pt-16 px-12 md:max-w-xl w-full">
            <h1 class="text-2xl md:text-4xl leading-[36px] md:leading-[52px]">
              {title}
            </h1>
            <p class="leading-5">{description}</p>

            <div class="flex items-center justify-center gap-2 font-bold pt-6">
              <span class="text-sm">Get to know more about OMRON connect</span>
              <svg
                width="19"
                height="15"
                viewBox="0 0 19 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7973 6.62L11.1773 0L10.0473 1.13L15.3073 6.39H0.0273438V7.99H15.2973L10.0373 13.25L11.1673 14.38L17.7873 7.76C18.1073 7.44 18.1073 6.94 17.7973 6.62Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <div class="flex pb-12 px-6 md:px-12 w-full">
            <Benefits {...benefit} />
          </div>
        </div>
      </div>
    </section>
  );
}
