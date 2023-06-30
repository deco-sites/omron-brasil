import Header from "$store/components/ui/SectionHeader.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface PostProps {
  image: LiveImage;
  imageAlt: string;
  title: string;
  description: string;
}

export interface Props {
  title?: string;
  description?: string;
  layout?: {
    headerAlignment?: "center" | "left" | "responsive";
  };
  posts?: PostProps[];
}

const DEFAULT_PROPS = {
  title: "",
  description: "",
};

function Post({ title, description, image, imageAlt }: PostProps) {
  return (
    <div className="card card-compact w-full h-full rounded-none bg-[#FFFFFF]">
      <figure>
        {image && (
          <Image
            class="w-full h-full object-contain"
            src={image}
            alt={imageAlt}
            width={402}
            height={240}
            loading="lazy"
          />
        )}
      </figure>
      <div className="flex flex-col gap-4 pt-7">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>

        <div className="card-actions justify-start pt-6">
          <span class="flex items-center justify-center text-sm font-bold gap-2 cursor-pointer hover:underline">
            Read More
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
      </div>
    </div>
  );
}

export default function Posts(props: Props) {
  const {
    title,
    description,
    layout,
    posts = [],
  } = { ...DEFAULT_PROPS, ...props };

  return (
    <div class="w-full h-full bg-[#FFFFFF] px-4 py-8 flex flex-col gap-4 lg:gap-8 lg:py-24 lg:px-12">
      <div class="flex flex-col gap-8 lg:gap-10 w-full h-full">
        <Header
          title={title || ""}
          description={description || ""}
          fontSize="Normal"
          alignment={layout?.headerAlignment || "responsive"}
        />

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 w-full h-full pt-16">
          {posts?.map((post) => <Post {...post} />)}
        </div>

        <div class="flex items-center justify-center w-full">
          <button class="flex items-center justify-center gap-3 max-w-md btn btn-outline border-black text-black hover:text-white">
            See all Health and Lifestyle
            <Icon
              id="ChevronRight"
              width={18}
              height={18}
              strokeWidth={0.01}
              fill="currentColor"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
