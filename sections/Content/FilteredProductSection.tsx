import ProductCard, {
  Layout as cardLayout,
} from "$store/components/product/ProductCard.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";
import Icon from "$store/components/ui/Icon.tsx";

export interface SectionProps {
  title: string;
  label: string;
  buttonTitle: string;
}

export interface Props {
  products: LoaderReturnType<Product[] | null>;
  cardLayout?: cardLayout;
  section?: SectionProps;
}

function Section({ title, label, buttonTitle }: SectionProps) {
  return (
    <section class="flex w-full h-full items-center justify-center md:min-h-[320px] bg-[#003153] text-white py-12">
      <div class="flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-start w-full gap-4 lg:gap-8 px-20">
        <div className="flex font-bold items-center text-center justify-center rounded-full bg-[#FF7474] text-[#003153] uppercase p-3 w-[160px] h-[160px]">
          Free Download
        </div>

        <div class="flex flex-col justify-between items-center md:items-start text-center md:text-start gap-12">
          <div class="flex flex-col items-center justify-center md:items-start md:justify-start gap-4">
            <h1 class="text-2xl md:text-4xl tracking-wider">{title}</h1>
            <h2 class="font-bold text-sm pb-3">{label}</h2>
            {buttonTitle && (
              <span class="flex items-center justify-center text-sm font-bold gap-2 cursor-pointer hover:underline">
                {buttonTitle}
                <Icon
                  id="ChevronRight"
                  class="text-white"
                  width={18}
                  height={18}
                  strokeWidth={0.01}
                  fill="currentColor"
                />
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FilterItem() {
  return (
    <select className="select select-bordered w-full bg-transparent border-black lg:max-w-[200px] rounded-2xl">
      <option selected>Device type</option>
      <option>Greedo</option>
    </select>
  )
}

export default function FilteredProductSection({ products, cardLayout, section }: Props) {
  return (
    <section class="flex w-full h-full bg-[#F2F2F2]">
      <div class="flex flex-col gap-12 px-6 md:px-12 w-full h-full py-16 md:py-12">
        <div class="flex flex-row items-center justify-between w-full">
          <div class="grid lg:hidden">
            <button
              className="btn w-full min-w-[80px] rounded-xl flex items-center justify-between gap-1 bg-[#005EB8] text-white hover:opacity-80 hover:bg-[#005EB8]"
            >
              <Icon
                id="FilterList"
                class="text-white"
                width={20}
                height={20}
                strokeWidth={0.01}
                fill="currentColor"
              />

              <span>2</span>
            </button>
          </div>

          <div class="hidden lg:grid grid-cols-4 gap-8">
            <FilterItem />
            <FilterItem />
            <FilterItem />
            <FilterItem />
          </div>

          <div>
            <FilterItem />
          </div>
        </div>

        <div class="flex w-full">
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
            {products?.map((product) => (
              <div
                class="min-w-[320px] md:min-w-[380px]"
              >
                <ProductCard
                  product={product}
                  layout={cardLayout}
                />
              </div>
            ))}
          </div>
        </div>


        {section && (
          <Section
            title={section.title}
            label={section.label}
            buttonTitle={section.buttonTitle}
          />
        )}

        <div class="flex w-full">
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
            {products?.map((product) => (
              <div
                class="min-w-[320px] md:min-w-[380px]"
              >
                <ProductCard
                  product={product}
                  layout={cardLayout}
                />
              </div>
            ))}
          </div>
        </div>

        <div class="flex w-full items-center justify-center py-12 md:py-16">
          <button class="flex items-center justify-center gap-2 btn bg-transparent max-w-[110px] rounded-xl border-black text-black">
            <span class="text-xs font-bold">Load more</span>
          </button>
        </div>
      </div>
    </section>
  )
}
