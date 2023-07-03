import Image from "deco-sites/std/components/Image.tsx";
import { Picture } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Icon from "$store/components/ui/Icon.tsx";

export interface ArticleCardProps {
  image: LiveImage;
  imageAlt: string;
  title: string;
  description: string;
  duration?: string;
}

export default function ArticleCard({ title, description, image, imageAlt, duration }: ArticleCardProps) {
  return (
    <div className="card card-compact w-full h-full rounded-none bg-[#FFFFFF]">
      <Picture>
        {image && (
          <Image
            media="(min-width: 220px, max-width: 767px)"
            class="w-full h-full object-contain"
            src={image}
            alt={imageAlt}
            width={402}
            height={240}
            loading="lazy"
          />
        )}
      </Picture>
      <div className="flex flex-col gap-4 pt-7">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        {duration && <span class="font-bold text-sm uppercase">Read time: {duration}</span>}

        <div className="card-actions justify-start pt-6">
          <span class="flex items-center justify-center text-sm font-bold gap-2 cursor-pointer hover:underline">
            Read More
            <Icon
              id="ChevronRight"
              class="text-black"
              width={18}
              height={18}
              strokeWidth={0.01}
              fill="currentColor"
            />
          </span>
        </div>
      </div>
    </div>
  )
}
