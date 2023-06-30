import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Icon from "$store/components/ui/Icon.tsx";
import Header from "$store/components/ui/SectionHeader.tsx";

export interface SolutionProps {
  title: string;
  size?: "Small" | "Large";
  image?: LiveImage;
  alt?: string;
}

export interface SectionProps {
  title: string;
  label: string;
  description: string;
  buttonTitle: string;
}

export interface Props {
  title?: string;
  description?: string;
  layout?: {
    variation?: "Full" | "Compact";
    headerAlignment?: "center" | "left";
  };
  solutions?: SolutionProps[];
  section?: SectionProps;
}

const DEFAULT_PROPS = {
  title: "",
  description: "",
  section: {
    title: "OMRON resellers",
    label: "Find the nearest store if you can not buy online",
    description:
      "Click below or search for the map icon in the header for navigating to our Store locator.",
    buttonTitle: "Find a store",
  },
};

function Solution({ title, image, alt, size }: SolutionProps) {
  if (!size || size === "Large") {
    return (
      <div class="flex flex-1 flex-col lg:flex-row justify-between items-start md:items-center lg:items-start bg-white text-black py-4 pt-12 px-6 w-full h-full">
        <div class="flex flex-col items-start gap-2 w-full">
          <h1 class="text-lg md:text-xl">{title}</h1>

          <span class="flex items-center justify-center text-sm font-bold gap-2 cursor-pointer hover:underline">
            View All
            <Icon
              id="ChevronRight"
              class="text-black"
              width={18}
              height={18}
              strokeWidth={0.01}
              fill="currentColor"
            />
          </span>
        </div>

        {image && (
          <figure class="flex w-[300px] h-[300px]">
            <Image
              media="(min-width: 220px, max-width: 767px)"
              class="w-full h-full object-fit"
              src={image}
              alt={alt}
              width={200}
              height={100}
              loading="lazy"
            />
          </figure>
        )}
      </div>
    );
  }

  return (
    <div class="card w-full h-full py-4 bg-white shadow-xl rounded-none">
      <div class="card-body items-start">
        <h2 class="card-title font-normal">{title}</h2>

        <span class="flex items-start justify-center text-sm font-bold gap-2 pt-3 cursor-pointer hover:underline">
          View All
          <Icon
            id="ChevronRight"
            class="text-black"
            width={18}
            height={18}
            strokeWidth={0.01}
            fill="currentColor"
          />
        </span>
      </div>

      {image && (
        <figure>
          <Image
            media="(min-width: 220px, max-width: 767px)"
            src={image}
            alt={alt}
            width={180}
            height={100}
            loading="lazy"
          />
        </figure>
      )}
    </div>
  );
}

function Section({ title, label, description, buttonTitle }: SectionProps) {
  return (
    <section class="flex items-center justify-center w-full h-full bg-[#306F95] text-white px-8 py-8 lg:py-16 lg:px-40">
      <div class="flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-5xl w-full gap-4 lg:gap-8">
        <picture className="flex items-center justify-center rounded-full border border-white p-3 w-52 h-52">
          <Icon
            id="MapPin"
            class="text-white"
            width={62}
            height={62}
            strokeWidth={0.80}
            fill="currentColor"
          />
        </picture>

        <div class="flex flex-col justify-between items-start gap-12">
          <div class="flex flex-col gap-3">
            <p class="font-bold text-sm">{title}</p>
            <h1 class="text-xl lg:text-2xl tracking-wider">{label}</h1>
            <span class="text-sm">{description}</span>
          </div>

          {buttonTitle && (
            <button class="btn btn-outline border-white text-white hover:bg-white hover:text-black">
              {buttonTitle}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default function Solutions(props: Props) {
  const {
    solutions = [],
    section,
    title,
    description,
    layout,
  } = { ...DEFAULT_PROPS, ...props };

  return (
    <div class="w-full bg-[#f2f2f2] px-4 py-8 flex flex-col gap-4 lg:gap-8 lg:py-10 lg:px-12">
      <div class="flex flex-col gap-8 lg:gap-10">
        <Header
          title={title || ""}
          description={description || ""}
          fontSize="Normal"
          alignment={layout?.headerAlignment || "center"}
        />

        <div class="grid md:grid-cols-2 lg:grid-cols-[39vw_26vw_26vw] gap-4 pt-4 w-full h-full items-center justify-center md:gap-8 md:grid-flow-dense auto-cols-auto">
          {solutions.map((solution) => <Solution {...solution} />)}
        </div>

        <Section
          title={section.title}
          label={section.label}
          buttonTitle={section.buttonTitle}
          description={section.description}
        />
      </div>
    </div>
  );
}
