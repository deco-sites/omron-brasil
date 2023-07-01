import Icon from "$store/components/ui/Icon.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";

export interface ItemProps {
  title: string;
}

export interface ExploreProps {
  title?: string;
  items?: ItemProps[];
  interval?: number;
}

function Dots({ items, interval = 0 }: ExploreProps) {
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
      <ul class="carousel justify-start col-span-full gap-4 z-10 row-start-4 px-6">
        {items?.map((_, index) => (
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

function MobileSection({ title, items, interval }: ExploreProps) {
  return (
    <div id={"explore-slider"} class="grid md:hidden">
      <Slider class="carousel carousel-center w-full col-span-full row-span-full scrollbar-none gap-6 px-6">
        {items?.map((item, index) => (
          <Slider.Item index={index} class="carousel-item w-full grid">
            <h1 class="font-bold text-sm">{title}</h1>

            <div class="flex flex-col items-start h-full justify-between gap-12 py-8">
              <h1 key={item.title} class="leading-tight text-2xl">{item.title}</h1>

              <span class="flex items-start justify-center text-sm font-bold gap-2 cursor-pointer hover:underline">
                Learn more
                <Icon
                  id="ChevronRight"
                  class="text-white"
                  width={18}
                  height={18}
                  strokeWidth={0.01}
                  fill="currentColor"
                />
              </span>
            </div>
          </Slider.Item>
        ))}
      </Slider>

      <Dots items={items} interval={interval} />

      <SliderJS
        rootId={"explore-slider"}
        interval={interval && interval * 1e3}
        infinite
      />
    </div>
  )
}

function GridSection({ title, items }: ExploreProps) {
  return (
    <div class="hidden md:flex flex-col w-full h-full max-w-6xl items-start justify-between px-24 xl:px-0">
      <h1 class="font-bold text-sm">{title}</h1>

      <div class="grid grid-cols-3 divide-x divide-x-black gap-x-12 w-full h-full items-start justify-start pt-12">
        {items?.map((item) => (
          <div class="flex flex-col items-start h-full justify-between gap-12 pl-16 first:pl-0">
            <h1 key={item.title} class="leading-tight text-2xl">{item.title}</h1>

            <span class="flex items-start justify-center text-sm font-bold gap-2 cursor-pointer hover:underline">
              Learn more
              <Icon
                id="ChevronRight"
                class="text-white"
                width={18}
                height={18}
                strokeWidth={0.01}
                fill="currentColor"
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Explore({ title, items }: ExploreProps) {
  return (
    <section class="flex items-center justify-center py-20 w-full min-h-[420px] bg-[#306F95] text-white">
      <>
      <MobileSection title={title} items={items} />
      <GridSection title={title} items={items} />
      </>
    </section>
  )
}
