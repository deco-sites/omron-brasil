import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Icon from "$store/components/ui/Icon.tsx";
import { JSX } from "preact/jsx-runtime";

export interface SectionProps {
  order?: "image-first" | "image-second";
  backgroundColor?: "white" | "pale-gray";
  backgroundImage: LiveImage;
  hasBorderRadiusOnBackgroundImage?: boolean;
  hasPadding?: boolean;
  imageAlt: string;
  subtitle: string;
  title: string;
  description: string;
  hasButton?: {
    title?: string;
    width?: "full" | "110px";
    bgColor: "border-none" | "omron-blue";
  };
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
    order,
    title,
    subtitle,
    backgroundColor,
    hasPadding,
    description,
    backgroundImage,
    imageAlt,
    children,
    hasBorderRadiusOnBackgroundImage,
    hasButton,
  }: SectionPropsExtended,
) {
  const orderFirstDivByProps = !order || order === "image-second"
    ? "order-2 lg:order-1"
    : "order-2";
  const orderSecondDivByProps = !order || order === "image-second"
    ? "order-1 lg:order-2"
    : "order-1";
  const bgColor = !backgroundColor || backgroundColor === "white"
    ? "bg-white"
    : "bg-[#F2F2F2]";
  const buttonWidth = !hasButton?.width || hasButton.width === "full"
    ? "w-full md:max-w-[110px]"
    : "max-w-[110px]";
  const buttonColor =
    !hasButton?.bgColor || hasButton?.bgColor === "border-none"
      ? "border-black text-black bg-transparent"
      : "bg-[#005EB8] text-white";

  return (
    <section
      id={"slide-product"}
      class={`${bgColor} w-full h-full grid md:grid-cols-2 items-center text-black px-8 py-16 gap-12 lg:px-0 ${
        !hasPadding && "lg:py-0"
      }`}
    >
      <div
        class={`${orderFirstDivByProps} flex flex-col gap-3 justify-center max-w-lg w-full lg:pl-12`}
      >
        <span class="font-bold text-sm">{subtitle}</span>
        <h1 class="text-4xl tracking-wide leading-tight pb-6">{title}</h1>
        <p class="border-t-2 border-t-light-gray pt-6">{description}</p>
        {hasButton && hasButton.title && (
          <button
            class={`mt-12 flex items-center justify-center gap-2 btn rounded-xl ${buttonColor} ${buttonWidth}`}
          >
            <span class="text-xs font-bold">{hasButton.title}</span>
          </button>
        )}

        <div class="w-full md:w-1/2 pt-12">
          {children}
        </div>
      </div>

      <div class={`${orderSecondDivByProps} w-full h-full`}>
        {backgroundImage && (
          <picture class="flex items-center justify-center w-full h-full">
            <img
              media="(min-width: 220px, max-width: 767px)"
              src={backgroundImage}
              alt={imageAlt}
              class={`w-full h-full object-cover ${
                hasBorderRadiusOnBackgroundImage &&
                "rounded-[96px] lg:rounded-r-[220px] lg:rounded-none"
              }`}
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
