import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Icon from "$store/components/ui/Icon.tsx";
import { JSX } from "preact/jsx-runtime";

export interface SectionProps {
  backgroundImage: LiveImage;
  imageAlt: string;
  subtitle: string;
  title: string;
  description: string;
}

export interface SectionPropsExtended extends SectionProps {
  children?: JSX.Element;
}

export interface ProductSliderProps {
  images?: SectionProps[];
  interval?: number;
}

interface ButtonProps {
  children?: JSX.Element;
}

function Dots({ images, interval = 0 }: ProductSliderProps) {
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
      <ul class="carousel justify-center col-span-full gap-4 z-10 row-start-4 md:px-6">
        {images?.map((_, index) => (
          <li class="carousel-item">
            <Slider.Dot index={index}>
              <div class="py-5">
                <div
                  class="w-4 h-4 rounded-full group-disabled:animate-progress bg-gradient-to-r from-black from-[length:var(--dot-progress)] to-[#F2F2F2] to-[length:var(--dot-progress)]"
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

function Buttons({ children }: ButtonProps) {
  return (
    <div class="flex items-start justify-start md:items-center md:justify-between gap-8">
      <div class="hidden md:flex items-center justify-center z-10 col-start-1 row-start-2">
        <Slider.PrevButton class="btn btn-square border-black bg-transparent">
          <Icon
            class="text-black"
            size={20}
            id="ChevronLeft"
            strokeWidth={2}
          />
        </Slider.PrevButton>
      </div>

      {children}

      <div class="hidden md:flex items-center justify-center z-10 col-start-1 row-start-2">
        <Slider.NextButton class="btn btn-square border-black bg-transparent">
          <Icon
            class="text-black"
            size={20}
            id="ChevronRight"
            strokeWidth={3}
          />
        </Slider.NextButton>
      </div>
    </div>
  );
}

function Section(
  {
    title,
    subtitle,
    description,
    backgroundImage,
    imageAlt,
    children,
  }: SectionPropsExtended,
) {
  return (
    <section
      id={"slide-product"}
      class="w-full h-full grid md:grid-cols-2 items-center bg-white text-black px-8 py-16 gap-12 lg:px-0 lg:py-0"
    >
      <div class="order-2 lg:order-1 flex flex-col gap-3 justify-center max-w-lg w-full lg:pl-12">
        <span class="font-bold text-sm">{subtitle}</span>
        <h1 class="text-4xl tracking-wide leading-tight pb-6">{title}</h1>
        <p class="border-t-2 border-t-light-gray pt-6">{description}</p>

        <div class="w-full md:w-1/2 pt-12">
          {children}
        </div>
      </div>

      <div class="order-1 lg:order-2 w-full h-full">
        {backgroundImage && (
          <picture class="flex items-center justify-center w-full h-full">
            <img
              media="(min-width: 220px, max-width: 767px)"
              src={backgroundImage}
              alt={imageAlt}
              class="lg:w-full lg:h-full object-fit"
              loading="lazy"
            />
          </picture>
        )}
      </div>
    </section>
  );
}

export default function ProductSlider(
  { images, interval }: ProductSliderProps,
) {
  return (
    <div
      id={"slide-product"}
      class="grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_64px]"
    >
      <Slider class="carousel carousel-center w-full col-span-full row-span-full scrollbar-none gap-6">
        {images?.map((product, index) => (
          <Slider.Item index={index} class="carousel-item w-full">
            <Section {...product}>
              <Buttons>
                <Dots images={images} interval={interval} />
              </Buttons>
            </Section>
          </Slider.Item>
        ))}
      </Slider>

      <SliderJS
        rootId={"slide-product"}
        interval={interval && interval * 1e3}
        infinite
      />
    </div>
  );
}
