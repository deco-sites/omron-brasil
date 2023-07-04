import { useId, useState } from "preact/hooks";
import { Picture } from "deco-sites/std/components/Picture.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface ImageCardProps {
  title: string;
  hasButton?: {
    title?: string;
  };
  backgroundImage: LiveImage;
  imageAlt?: string;
}

export interface Props {
  images: ImageCardProps[];
  interval?: number;
}

function Dots({ images, interval = 0 }: Props) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @property --dot-progress {
            syntax: '<percentage>';
            inherits: false;
            initial-value: 0%;
          }
          `,
        }}
      />
      <ul class="carousel justify-center col-span-full gap-4 z-10 row-start-4">
        {images?.map((_, index) => (
          <li class="carousel-item">
            <Slider.Dot index={index}>
              <div class="py-5">
                <div
                  class="w-16 sm:w-20 h-0.5 rounded group-disabled:animate-progress bg-gradient-to-r from-[#000] from-[length:var(--dot-progress)] to-[#C9C9C9] to-[length:var(--dot-progress)]"
                  style={{ animationDuration: `${interval}s` }}
                />
              </div>
            </Slider.Dot>
          </li>
        ))}
      </ul>
    </>
  );
}

function MobileSlider({ images, interval }: Props) {
  const id = `mobile-list-${useId()}`;

  return (
    <div
      id={id}
      class="flex flex-col md:hidden gap-8 w-full h-full"
    >
      <Slider class="carousel carousel-start gap-4 lg:gap-8 row-start-2 row-end-5">
        {images.map((item, index) => (
          <Slider.Item
            index={index}
            class="flex flex-col gap-4 carousel-item first:pl-6 last:pr-6"
          >
            <a href="#" class="flex flex-col gap-4 w-72">
              <div class="flex relative w-full h-full rounded-[52px]">
                {item.backgroundImage && (
                  <figure>
                    <Image
                      class="card w-full rounded-[52px]"
                      src={item.backgroundImage}
                      alt={item.imageAlt}
                      width={237}
                      height={271}
                      loading="lazy"
                    />
                  </figure>
                )}

                <div class="absolute bottom-0 justify-end items-start text-white p-8">
                  <button class="w-full flex flex-col justify-between gap-2 h-full text-start pb-3">
                    <h2 className="text-white">{item.title}</h2>

                    {item?.hasButton?.title && (
                      <div class="flex items-center justify-center gap-2 text-white">
                        <p>{item.hasButton?.title}</p>
                        <svg
                          width="19"
                          height="15"
                          viewBox="0 0 19 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.77 6.62L11.15 0L10.02 1.13L15.28 6.39H0V7.99H15.27L10.01 13.25L11.14 14.38L17.76 7.76C18.08 7.44 18.08 6.94 17.77 6.62Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </a>
          </Slider.Item>
        ))}
      </Slider>

      <Dots images={images} interval={interval} />

      <SliderJS rootId={id} interval={interval && interval * 1e3} infinite />
    </div>
  );
}

export default function ImageSlider({ images }: Props) {
  const [selectedItem, setSelectedItem] = useState(
    images?.length > 0 ? images[0] : null,
  );

  return (
    <div class="flex w-full h-full bg-white md:px-12 py-14 md:py-32">
      <MobileSlider images={images} />

      {selectedItem && (
        <div className="hidden md:flex items-center justify-center relative w-full h-full image-full max-h-full rounded-[52px]">
          {selectedItem.backgroundImage && (
            <Picture class="w-full h-full rounded-[52px]">
              <img
                src={selectedItem.backgroundImage}
                alt={selectedItem.imageAlt}
                width={1270}
                height={512}
                class="bg-cover w-full h-full rounded-[52px]"
              />
            </Picture>
          )}

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
                      <svg
                        width="19"
                        height="15"
                        viewBox="0 0 19 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.77 6.62L11.15 0L10.02 1.13L15.28 6.39H0V7.99H15.27L10.01 13.25L11.14 14.38L17.76 7.76C18.08 7.44 18.08 6.94 17.77 6.62Z"
                          fill="white"
                        />
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
  );
}
