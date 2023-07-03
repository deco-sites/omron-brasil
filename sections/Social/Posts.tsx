import Header from "$store/components/ui/SectionHeader.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import ArticleCard, {
  type ArticleCardProps,
} from "$store/components/blog/ArticleCard.tsx";

export interface Props {
  title?: string;
  description?: string;
  layout?: {
    headerAlignment?: "center" | "left" | "responsive";
  };
  posts?: ArticleCardProps[];
  buttonTitle?: string;
}

const DEFAULT_PROPS = {
  title: "",
  description: "",
  buttonTitle: "",
};

export default function Posts(props: Props) {
  const {
    title,
    description,
    layout,
    posts = [],
    buttonTitle,
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
          {posts?.map((post) => <ArticleCard {...post} />)}
        </div>

        {buttonTitle && (
          <div class="flex items-center justify-center w-full">
            <button class="flex items-center justify-center gap-3 max-w-md btn btn-outline border-black text-black hover:text-white">
              {buttonTitle}
              <Icon
                id="ChevronRight"
                width={18}
                height={18}
                strokeWidth={0.01}
                fill="currentColor"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
