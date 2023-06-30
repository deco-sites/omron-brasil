import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Logo {
  image: LiveImage;
  alt?: string;
}

export interface BannerProps {
  bgImage: LiveImage;
  bgImageAlt: string;
  title: string;
  description: string;
  logos?: Logo[];
}

export default function Banner(
  { title, description, bgImage, bgImageAlt, logos }: BannerProps,
) {
  return (
    <div class="md:card md:rounded-none w-full h-full image-full bg-[#F2F2F2] items-center">
      <figure>
        <img src={bgImage} alt={bgImageAlt} class="w-full h-full" />
      </figure>

      <div class="card-body px-16 w-full items-center md:items-start md:max-w-xl">
        <h2 class="card-title text-black font-normal text-4xl">{title}</h2>
        <p class="text-black text-normal pt-3">{description}</p>

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
