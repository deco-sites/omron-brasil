import ProductCard, {
  Layout as cardLayout,
} from "$store/components/product/ProductCard.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

export interface RelatedArticleCardProps {
  title: string;
}

export interface RelatedArticlesProps {
  articles: RelatedArticleCardProps[];
}

export interface RelatedAccessoriesProps {
  products: LoaderReturnType<Product[] | null>;
  cardLayout?: cardLayout;
}

export interface Props {
  products: LoaderReturnType<Product[] | null>;
  cardLayout?: cardLayout;
  articles: RelatedArticleCardProps[];
}

function FilterItem() {
  return (
    <div class="flex flex-col gap-1 justify-start text-start items-start w-full">
      <span class="font-bold">Instruction manual</span>

      <div class="flex gap-4">
        <select className="select select-bordered bg-transparent border-black w-full md:max-w-[259px] rounded-2xl">
          <option selected disabled>Choose language</option>
          <option>Greedo</option>
        </select>

        <button class="flex items-center justify-center gap-2 btn bg-[#005EB8] hover:bg-[#005EB8] w-full max-w-[80px] md:max-w-[110px] rounded-xl text-white">
          <span class="text-xs font-bold">Download</span>
        </button>
      </div>
    </div>
  )
}

function RelatedArticleCard({ title }: RelatedArticleCardProps) {
  return (
    <div class="flex flex-col items-start justify-between min-w-[237px] min-h-[237px] md:min-h-[160px] md:min-w-[400px] w-full h-full bg-white py-6 px-6">
      <h1 class="text-xl">{title}</h1>
      <button class="flex items-center justify-center gap-2 btn bg-transparent md:max-w-[110px] rounded-xl border-black text-black">
        <span class="text-xs font-bold">Read more</span>
      </button>
    </div>
  )
}

function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <div class="flex flex-col gap-12 border-b border-b-[#C9C9C9] pb-20">
      <h1 class="font-bold text-2xl">Related articles</h1>

      <div
        id={"slider-articles"}
        class="grid grid-cols-[48px_1fr_48px] lg:hidden px-0 sm:px-5"
      >
        <Slider class="carousel carousel-center sm:carousel-end gap-6 col-span-full row-start-2 row-end-5">
          {articles?.map((article, index) => (
            <Slider.Item
              index={index}
              class="carousel-item w-[237px] md:w-full sm:first:pl-0 last:pr-6 sm:last:pr-0"
            >
              <RelatedArticleCard
                title={article.title}
              />
            </Slider.Item>
          ))}
        </Slider>
        <SliderJS rootId={"slider-articles"} />
      </div>

      <div class="hidden lg:grid grid-cols-3 gap-8">
        {articles?.map((article) => (
          <RelatedArticleCard title={article.title} />
        ))}
      </div>
    </div>
  )
}

function RelatedAccesories({ products, cardLayout }: RelatedAccessoriesProps) {
  return (
    <div class="flex flex-col gap-12 pb-12">
      <h1 class="font-bold text-2xl">Related accessories</h1>

      <div
        id={"slider-accessories"}
        class="grid grid-cols-[48px_1fr_48px] px-0 sm:px-5"
      >
        <Slider class="carousel carousel-center sm:carousel-end gap-6 col-span-full row-start-2 row-end-5">
          {products?.map((product, index) => (
            <Slider.Item
              index={index}
              class="carousel-item w-full md:w-[380px] sm:first:pl-0 last:pr-6 sm:last:pr-0"
            >
              <ProductCard
                product={product}
                layout={cardLayout}
              />
            </Slider.Item>
          ))}
        </Slider>

        <>
          <div class="hidden relative sm:block z-10 col-start-1 row-start-3">
            <Slider.PrevButton class="btn btn-circle btn-outline absolute right-1/2 bg-base-100">
              <Icon size={20} id="ChevronLeft" strokeWidth={3} />
            </Slider.PrevButton>
          </div>
          <div class="hidden relative sm:block z-10 col-start-3 row-start-3">
            <Slider.NextButton class="btn btn-circle btn-outline absolute left-1/2 bg-base-100">
              <Icon size={20} id="ChevronRight" strokeWidth={3} />
            </Slider.NextButton>
          </div>
        </>
        <SliderJS rootId={"slider-accessories"} />
      </div>
    </div>
  )
}

export default function RelatedSection({ products, articles, cardLayout }: Props) {
  return (
    <section class="flex w-full h-full bg-[#E5E5E5] text-black">
      <div class="flex flex-col gap-12 px-6 md:px-12 w-full h-full py-16 md:py-12">
        <div class="items-center justify-center flex border border-t-[#C9C9C9]">
          <div class="flex flex-col md:flex-row w-full lg:max-w-4xl items-center justify-center pt-8 md:pt-12 lg:pb-24 gap-y-8 md:gap-y-0">
            <FilterItem />
            <FilterItem />
          </div>
        </div>

        <RelatedArticles
          articles={articles}
        />

        <RelatedAccesories
          products={products}
          cardLayout={cardLayout}
        />
      </div>
    </section>
  )
}
