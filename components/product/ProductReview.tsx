import Image from "deco-sites/std/components/Image.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type {
  Image as LiveImage,
  Video as LiveVideo,
} from "deco-sites/std/components/types.ts";
import { useId } from "preact/hooks";

export interface TopSectionProps {
  subtitle: string;
  title: string;
  description?: string;
  image: LiveImage;
  altImage?: string;
}

export interface MiddleSectionProps {
  productImage: LiveImage;
  altImage?: string;
  description: string;
}

export interface BottomSectionProps {
  subtitle: string;
  title: string;
  description?: string;
  video: LiveVideo;
  altVideo?: string;
}

export interface ProductReviewProps {
  topSection: TopSectionProps;
  middleSection: MiddleSectionProps;
  bottomSection: BottomSectionProps;
}

export interface Props {
  products?: ProductReviewProps[];
  interval?: number;
}

function TopSection(
  { subtitle, title, description, image, altImage }: TopSectionProps,
) {
  return (
    <div class="relative grid lg:grid-cols-[1fr_500px] xl:grid-cols-[1fr_800px] items-center justify-center w-full h-full lg:min-h-[800px] bg-light-gray">
      <div class="flex flex-1 items-center justify-center pt-16 px-6 lg:px-0 lg:pt-0">
        <div class="flex flex-col items-start justify-center text-start gap-2 md:max-w-[510px] lg:-translate-y-24">
          <span class="font-bold">{subtitle}</span>
          <h2 class="text-2xl border-b border-b-gray pb-7">{title}</h2>
          {description && (
            <h1 class="pt-5 pb-16 lg:pb-0 text-3xl md:text-5xl font-bold">
              {description}
            </h1>
          )}
        </div>
      </div>

      {image && (
        <Picture class="w-full h-full">
          <Source
            media="(max-width: 767px)"
            fetchPriority="auto"
            src={image}
            alt={altImage}
            width={800}
            height={558}
          />
          <Source
            media="(min-width: 768px)"
            fetchPriority="auto"
            src={image}
            alt={altImage}
            width={800}
            height={558}
          />
          <Image
            class="object-cover w-full h-full"
            loading="lazy"
            width={800}
            height={558}
            src={image}
            alt={altImage}
          />
        </Picture>
      )}
    </div>
  );
}

function MiddleSection(
  { productImage, altImage, description }: MiddleSectionProps,
) {
  return (
    <div className="flex-grow relative lg:absolute md:inset-0 lg:-translate-y-48 flex items-center justify-center z-10">
      <div className="flex relative flex-col bg-white max-w-[836px] h-full md:max-h-[376px] text-start items-center justify-center px-6 py-4 md:py-16 group">
        {productImage && (
          <Image
            class="object-cover -translate-y-12 md:-translate-y-28 md:group-hover:-translate-y-32 transition duration-200"
            loading="lazy"
            width={580}
            height={264}
            src={productImage}
            alt={altImage ?? "Imagem do produto"}
          />
        )}

        <span class="pb-8">{description}</span>
      </div>
    </div>
  );
}

function BottomSection(
  { subtitle, title, description, video, altVideo }: BottomSectionProps,
) {
  return (
    <div class="relative flex flex-col py-12 lg:py-32 text-center items-center justify-between gap-14 bg-dark-blue w-full h-full">
      <div class="flex flex-col gap-2 text-white lg:pt-52">
        <h2 class="text-highlight-blue">{subtitle}</h2>
        <h1 class="text-3xl">{title}</h1>
        {description && <span class="pt-2">{description}</span>}
      </div>

      {video && (
        <video
          loading="lazy"
          width={1280}
          height={900}
          class="px-6 lg:px-0 rounded-[38px]"
          controls
        >
          <source
            src={video}
            alt={altVideo ?? "Vídeo demonstrativo do produto"}
            type="video/mp4"
            class="object-cover rounded-[38px]"
            loading="lazy"
          />
        </video>
      )}
    </div>
  );
}

function Buttons() {
  return (
    <div class="flex-grow hidden absolute inset-0 lg:flex items-center justify-center w-full">
      <div class="flex w-full items-center justify-between lg:max-w-5xl">
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
              strokeWidth={6}
            />
          </Slider.NextButton>
        </div>
      </div>
    </div>
  );
}

export default function ProductReview({ products, interval = 0 }: Props) {
  const id = useId();

  return (
    <section id={id} className="w-full h-full flex flex-col">
      <div class="relative flex flex-col h-full">
        <Slider className="carousel carousel-center w-full col-span-full row-span-full scrollbar-none gap-6">
          {products?.map((item, index) => (
            <Slider.Item
              index={index}
              class="carousel-item w-full relative flex flex-col h-full"
            >
              <>
                <TopSection {...item.topSection} />

                <>
                  <MiddleSection {...item.middleSection} />
                  <Buttons />
                </>

                <BottomSection {...item.bottomSection} />
              </>
            </Slider.Item>
          ))}
        </Slider>
      </div>

      <SliderJS rootId={id} interval={interval && interval * 1e3} infinite />
    </section>
  );
}
