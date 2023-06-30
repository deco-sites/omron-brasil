import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Icon from "$store/components/ui/Icon.tsx";

export interface SectionProps {
  backgroundImage: LiveImage;
  imageAlt: string;
  subtitle: string;
  title: string;
  description: string;
  productTitle: string;
  productDescription: string;
}

export interface PreviewProps {
  images?: SectionProps[];
  interval?: number;
}

function Buttons() {
  return (
    <>
      <div class="flex items-center justify-center z-10 col-start-1 row-start-2">
        <Slider.PrevButton class="btn btn-circle glass">
          <Icon
            class="text-base-100"
            size={20}
            id="ChevronLeft"
            strokeWidth={3}
          />
        </Slider.PrevButton>
      </div>
      <div class="flex items-center justify-center z-10 col-start-3 row-start-2">
        <Slider.NextButton class="btn btn-circle glass">
          <Icon
            class="text-base-100"
            size={20}
            id="ChevronRight"
            strokeWidth={3}
          />
        </Slider.NextButton>
      </div>
    </>
  );
}

function Dots({ images, interval = 0 }: PreviewProps) {
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
      <ul class="carousel justify-end col-span-full gap-4 z-10 row-start-4 px-6">
        {images?.map((_, index) => (
          <li class="carousel-item">
            <Slider.Dot index={index}>
              <div class="py-5">
                <div
                  class="w-4 h-4 rounded-full group-disabled:animate-progress bg-gradient-to-r from-base-100 from-[length:var(--dot-progress)] to-[rgba(255,255,255,0.4)] to-[length:var(--dot-progress)]"
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

function Section(
  {
    title,
    subtitle,
    description,
    backgroundImage,
    imageAlt,
    productDescription,
    productTitle,
  }: SectionProps,
) {
  return (
    <section class="w-full h-full flex flex-col lg:flex-row justify-between bg-[#306F95] text-white px-8 py-8 gap-12 md:gap-0 lg:py-28 lg:px-16">
      <div class="flex flex-col gap-3 items-start justify-start max-w-lg w-full">
        <span class="font-bold text-sm">{subtitle}</span>
        <h1 class="text-4xl tracking-wide leading-tight">{title}</h1>
        <p>{description}</p>
      </div>

      {backgroundImage && (
        <picture class="flex items-center justify-center">
          <img
            media="(min-width: 220px, max-width: 767px)"
            src={backgroundImage}
            alt={imageAlt}
            class="lg:w-full lg:h-full object-fit"
            loading="lazy"
          />
        </picture>
      )}

      <div class="flex flex-col gap-10 justify-end max-w-md w-full">
        <div class="flex items-center justify-between w-full">
          <div className="tabs w-full">
            <span className="tab tab-bordered tab-active text-white">
              Tab 1
            </span>
            <span className="tab tab-bordered text-white">Tab 2</span>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <h1 class="font-bold">{productTitle}</h1>
          <p class="text-sm">{productDescription}</p>
        </div>
      </div>
    </section>
  );
}

export default function Preview(
  { images, interval }: PreviewProps,
) {
  return (
    <div
      id={"slide-product"}
      class="grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_64px]"
    >
      <Slider class="carousel carousel-center w-full col-span-full row-span-full scrollbar-none gap-6">
        {images?.map((product, index) => (
          <Slider.Item index={index} class="carousel-item w-full">
            <Section {...product} />
          </Slider.Item>
        ))}
      </Slider>

      <Buttons />

      <Dots images={images} interval={interval} />

      <SliderJS
        rootId={"slide-product"}
        interval={interval && interval * 1e3}
        infinite
      />
    </div>
  );
}
