import { Picture } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface AcademyCourseCardProps {
  backgroundImage?: LiveImage;
  bgImageAlt?: string;
  title: string;
  description: string;
  duration?: string;
}

export default function AcademyCourseCard({
  backgroundImage,
  bgImageAlt,
  title,
  description,
  duration,
}: AcademyCourseCardProps) {
  return (
    <div className="flex flex-col max-w-xs lg:w-[90%] 2xl:w-full h-full min-h-[400px] md:min-h-[460px] bg-white text-black shadow-xl cursor-pointer hover:scale-105 duration-150 transition">
      {backgroundImage && (
        <Picture class="flex w-full h-[175px] bg-white items-center justify-center">
          <img
            media="(min-width: 220px, max-width: 767px)"
            src={backgroundImage}
            alt={bgImageAlt}
            class="w-full h-full object-cover"
          />
        </Picture>
      )}

      <div className="card-body items-start justify-between">
        <div class="flex flex-col gap-4">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <span class="font-bold text-sm pb-6">{duration}</span>
        </div>

        <div class="flex items-center gap-2 justify-center font-bold text-sm">
          <span class="hover:underline">Read more</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.3083 9.68366L11.7917 4.16699L10.85 5.10866L15.2333 9.49199H2.5V10.8253H15.225L10.8417 15.2087L11.7833 16.1503L17.3 10.6337C17.5667 10.367 17.5667 9.95033 17.3083 9.68366Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
