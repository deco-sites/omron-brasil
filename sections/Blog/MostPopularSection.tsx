import { useId } from "preact/hooks";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import ArticleCard, {
  ArticleCardProps,
} from "$store/components/blog/ArticleCard.tsx";

export interface HeaderProps {
  hasSubtitle?: {
    label?: string;
    color?: "white" | "highlight-blue";
  };
  title: string;
  alignment?: "center" | "start";
}

export interface Props {
  header: HeaderProps;
  articles: ArticleCardProps[] | null;
  interval?: number;
}

type TDots = Omit<Props, "header">;

function Header({ hasSubtitle, title, alignment }: HeaderProps) {
  const headerAlignment = !alignment || alignment === "center"
    ? "text-center items-center"
    : "text-start items-start";

  return (
    <header class={`${headerAlignment} flex flex-col gap-2`}>
      {hasSubtitle &&
        (
          <span
            class={`font-bold text-lg 
        ${hasSubtitle.color === "white" ? "text-white" : "text-[#00F0FF]"}`}
          >
            {hasSubtitle.label}
          </span>
        )}

      <h1 class="text-white text-4xl leading-[72px] tracking-tight">{title}</h1>
    </header>
  );
}

function Dots({ articles, interval = 0 }: TDots) {
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
        {articles?.map((_, index) => (
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

export default function MostPopularSection(
  { header, articles, interval = 0 }: Props,
) {
  const id = `most-popular-slider-${useId()}`;

  return (
    <section class="flex flex-col w-full items-center justify-center h-full bg-[#003153]">
      <div class="flex flex-col gap-16 py-16 md:py-32">
        <Header {...header} />

        <div
          id={id}
          class="grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_64px]"
        >
          <Slider class="carousel carousel-center w-full col-span-full row-span-full scrollbar-none gap-6">
            {articles?.map((article, index) => (
              <Slider.Item
                index={index}
                class="carousel-item w-full md:w-[320px] lg:w-[640px] md:first:pl-12 md:last:pr-12"
              >
                <ArticleCard {...article} />
              </Slider.Item>
            ))}
          </Slider>
        </div>

        <>
          <div class="flex items-center justify-center gap-8 w-full">
            <div class="relative">
              <Slider.PrevButton
                style={{
                  minHeight: "48px",
                }}
                class="rounded-xl w-12 h-12 btn btn-square absolute opacity-100 bg-opacity-100 -left-8 bg-transparent border-white hover:bg-neutral-100"
              >
                <Icon
                  size={24}
                  id="ChevronLeft"
                  strokeWidth={3}
                  class="text-white hover:text-black"
                />
              </Slider.PrevButton>
            </div>

            <Dots articles={articles} interval={interval} />

            <div class="relative rounded-2xl">
              <Slider.NextButton
                style={{
                  minHeight: "48px",
                }}
                class="rounded-xl w-12 h-12 min-h-fit btn btn-square absolute opacity-100 bg-opacity-100 -right-8 bg-transparent border-white hover:bg-neutral-100"
              >
                <Icon
                  size={24}
                  id="ChevronRight"
                  strokeWidth={6}
                  class="text-white hover:text-black"
                />
              </Slider.NextButton>
            </div>
          </div>

          <SliderJS
            rootId={id}
            interval={interval && interval * 1e3}
            infinite
          />
        </>
      </div>
    </section>
  );
}
