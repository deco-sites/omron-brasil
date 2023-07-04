import { useState } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";
import { Picture } from "deco-sites/std/components/Picture.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface ImageCardProps {
  title: string;
  hasButton?: {
    title?: string;
  }
  backgroundImage?: LiveImage;
  imageAlt?: string;
}

export interface Props {
  images: ImageCardProps[];
}

export default function ImageSlider({ images }: Props) {
  const [selectedItem, setSelectedItem] = useState(
    images?.length > 0 ? images[0] : null,
  );

  return (
    <div class="flex w-full h-full bg-white md:px-12 py-14 md:py-32">
      {selectedItem && (
        <div className="hidden md:flex items-center justify-center relative w-full h-full image-full max-h-full rounded-[52px]">
          <Picture class="w-full h-full rounded-[52px]">
            <img
              src={selectedItem.backgroundImage}
              alt={selectedItem.imageAlt}
              width={1270}
              height={512}
              class="bg-cover w-full h-full rounded-[52px]"
            />
          </Picture>

          <div className="absolute bottom-0 justify-center items-center text-white -translate-y-20">
            <div class="flex items-center justify-center text-start w-full h-full max-w-4xl gap-16 border-b border-b-[#7F7F7F] -translate-y-4">
              {images?.map((item) => (
                <button
                  onClick={() => setSelectedItem(item)}
                  class={`${
                    selectedItem === item &&
                    "border-[#005EB8] border-b-4 font-bold"
                  } w-full flex flex-col justify-between gap-2 h-full min-h-[110px] text-start pb-3`}
                >
                  <h2 className="text-white text-lg">{item.title}</h2>
                  
                  {item?.hasButton?.title && (
                    <div class="flex items-center justify-center gap-2 text-white">
                      <p>{item.hasButton?.title}</p>
                      <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.77 6.62L11.15 0L10.02 1.13L15.28 6.39H0V7.99H15.27L10.01 13.25L11.14 14.38L17.76 7.76C18.08 7.44 18.08 6.94 17.77 6.62Z" fill="white"/>
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
