import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Icon from "$store/components/ui/Icon.tsx";
import { JSX } from "preact/jsx-runtime";
import Tabs from "$store/islands/Tabs.tsx";

export interface TabsProps {
  label?: string;
  item: {
    title?: string;
    description?: string;
    subitems: { label: string }[];
  };
}

export interface SectionProps {
  backgroundImage: LiveImage;
  imageAlt: string;
  subtitle: string;
  title: string;
  description: string;
  productTitle: string;
  productDescription: string;
  tabs: TabsProps[];
  backgroundColor?: "Light-Gray" | "Dark-Blue" | "Pigeon-Blue";
}

export interface SectionPropsExtended extends SectionProps {
  children?: JSX.Element;
}

export interface PreviewProps {
  images?: SectionProps[];
  interval?: number;
  backgroundColor?: "Light-Gray" | "Dark-Blue" | "Pigeon-Blue";
}

interface ButtonProps {
  backgroundColor?: "Light-Gray" | "Dark-Blue" | "Pigeon-Blue";
  children?: JSX.Element;
}

function Buttons({ children, backgroundColor }: ButtonProps) {
  const bgColor = backgroundColor;
  const borderColor = bgColor === "Light-Gray"
    ? "border-black"
    : "border-white";
  const textColor = bgColor === "Light-Gray" ? "text-black" : "text-white";

  return (
    <div class="flex items-start justify-start md:items-center md:justify-between gap-8">
      <div class="hidden md:flex items-center justify-center z-10 col-start-1 row-start-2">
        <Slider.PrevButton
          class={`${borderColor} btn btn-square bg-transparent`}
        >
          <Icon
            class={textColor}
            size={20}
            id="ChevronLeft"
            strokeWidth={2}
          />
        </Slider.PrevButton>
      </div>

      {children}

      <div class="hidden md:flex items-center justify-center z-10 col-start-1 row-start-2">
        <Slider.NextButton
          class={`${borderColor} btn btn-square bg-transparent`}
        >
          <Icon
            class={textColor}
            size={20}
            id="ChevronRight"
            strokeWidth={3}
          />
        </Slider.NextButton>
      </div>
    </div>
  );
}

function Dots({ images, interval = 0, backgroundColor }: PreviewProps) {
  const bgColor = backgroundColor;
  const transitionColor = bgColor === "Light-Gray"
    ? "from-black to-pale-gray"
    : "from-white to-gray";

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
                  class={`${transitionColor} w-4 h-4 rounded-full group-disabled:animate-progress bg-gradient-to-r from-[length:var(--dot-progress)] to-[length:var(--dot-progress)]`}
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
    backgroundColor,
    children,
    tabs,
  }: SectionPropsExtended,
) {
  const bgColor = backgroundColor;
  const textColor = bgColor === "Light-Gray" ? "text-black" : "text-white";

  return (
    <section
      class={`${
        bgColor === "Dark-Blue" && "bg-dark-blue" ||
        bgColor === "Pigeon-Blue" && "bg-pigeon-blue" ||
        bgColor === "Light-Gray" && "bg-light-gray"
      }
      ${!bgColor && "bg-dark-blue"}
      ${textColor}
      w-full h-full flex flex-col lg:flex-row justify-between px-8 py-8 gap-12 md:gap-0 lg:py-28 lg:px-16`}
    >
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

      <div class="flex flex-col gap-10 justify-end max-w-md items-start w-full">
        <div class="flex items-start justify-between w-full">
          <Tabs tabs={tabs} backgroundColor={backgroundColor} />
        </div>

        <div class="flex flex-col items-start gap-2">
          <h1 class="font-bold">{productTitle}</h1>
          <p class="text-sm">{productDescription}</p>

          <div class="w-full md:w-1/2 pt-12">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Preview(
  { images, interval, backgroundColor }: PreviewProps,
) {
  return (
    <div
      id={"slide-product"}
      class="grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_64px]"
    >
      <Slider class="carousel carousel-center w-full col-span-full row-span-full scrollbar-none gap-6">
        {images?.map((product, index) => (
          <Slider.Item index={index} class="carousel-item w-full">
            <Section {...product} backgroundColor={backgroundColor}>
              <Buttons backgroundColor={backgroundColor}>
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
