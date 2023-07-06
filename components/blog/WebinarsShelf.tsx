import type { LoaderReturnType } from "$live/types.ts";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import WebinarsCard, {
  WebinarCardProps,
} from "$store/components/blog/WebinarsCard.tsx";
import { useId } from "preact/hooks";

export interface WebinarHeaderProps {
  subtitle?: string;
  title: string;
  hasButton?: {
    buttonTitle: string;
    buttonBackground?: "white" | "dark-blue" | "border-black";
  };
}

export interface Props {
  header: WebinarHeaderProps;
  webinars: WebinarCardProps[] | null;
  interval: number;
}

type TDots = Omit<Props, "header">;

function BlogHeader({ subtitle, title, hasButton }: WebinarHeaderProps) {
  return (
    <header class="flex flex-col md:flex-row gap-y-10 md:gap-y-0 items-center text-center md:text-start md:items-end justify-between text-black px-12 md:pb-24">
      <div class="flex flex-col gap-4">
        <span class="font-bold text-sm">{subtitle}</span>
        <h1 class="text-3xl lg:text-5xl">{title}</h1>
      </div>
      {hasButton && (
        <button
          className={`
          ${
            !hasButton.buttonBackground ||
            hasButton.buttonBackground === "white" && "bg-white text-black" ||
            hasButton.buttonBackground === "dark-blue" &&
              "bg-[#003153] text-white" ||
            hasButton.buttonBackground === "border-black" &&
              "border-black bg-transparent text-black hover:bg-[#003153] hover:text-white"
          } btn rounded-xl w-full md:w-auto`}
        >
          {hasButton.buttonTitle}
        </button>
      )}
    </header>
  );
}

function Dots({ webinars, interval = 0 }: TDots) {
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
      <ul class="carousel justify-center col-span-full gap-4 z-10 row-start-4 pt-12">
        {webinars?.map((_, index) => (
          <li class="carousel-item">
            <Slider.Dot index={index}>
              <div>
                <div
                  class="w-2 h-2 rounded-full group-disabled:animate-progress bg-gradient-to-r from-black from-[length:var(--dot-progress)] to-[rgba(255,255,255,0.4)] to-[length:var(--dot-progress)]"
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

export default function WebinarsShelf({ header, webinars, interval }: Props) {
  const id = useId();

  return (
    <section class="flex flex-col gap-16 w-full h-full bg-[#E5E5E5] py-14 lg:py-32">
      <BlogHeader {...header} />

      <div
        id={id}
        class="grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_64px] px-6 md:px-0"
      >
        <Slider class="carousel carousel-center w-full col-span-full row-span-full scrollbar-none gap-6">
          {webinars?.map((webinar, index) => (
            <Slider.Item
              index={index}
              class="carousel-item w-full md:w-[327px] md:first:pl-12 md:last:pr-12"
            >
              <WebinarsCard {...webinar} />
            </Slider.Item>
          ))}
        </Slider>
      </div>

      <div class="flex items-center justify-center gap-8 w-full">
        <div class="relative">
          <Slider.PrevButton
            style={{
              minHeight: "48px",
            }}
            class="rounded-xl w-12 h-12 btn btn-square absolute opacity-100 bg-opacity-100 -left-8 bg-transparent border-black hover:bg-neutral-100"
          >
            <Icon
              size={24}
              id="ChevronLeft"
              strokeWidth={3}
              class="text-base-content"
            />
          </Slider.PrevButton>
        </div>

        <Dots webinars={webinars} interval={interval} />

        <div class="relative rounded-2xl">
          <Slider.NextButton
            style={{
              minHeight: "48px",
            }}
            class="rounded-xl w-12 h-12 min-h-fit btn btn-square absolute opacity-100 bg-opacity-100 -right-8 bg-transparent border-black hover:bg-neutral-100"
          >
            <Icon
              size={24}
              id="ChevronRight"
              strokeWidth={6}
              class="text-base-content"
            />
          </Slider.NextButton>
        </div>
      </div>
      <SliderJS rootId={id} interval={interval && interval * 1e3} infinite />
    </section>
  );
}
