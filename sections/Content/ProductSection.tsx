import ProductCard, {
  Layout as cardLayout,
} from "$store/components/product/ProductCard.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Picture } from "deco-sites/std/components/Picture.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

export interface ButtonProps {
  background: "transparent" | "omron-blue";
  title: string;
  hasCartIcon?: boolean;
  hasTitleAppearWithCartIcon?: boolean;
}

export interface Props {
  title: string;
  subtitle?: string;
  productSubtitle?: string;
  productTitle?: string;
  productDescription?: string;
  productImage?: LiveImage;
  imageAlt?: string;
  buttons?: ButtonProps[];
  products: LoaderReturnType<Product[] | null>;
  cardLayout?: cardLayout;
  endButtonTitle?: string;
}

export default function ProductSection({ 
  title,
  subtitle,
  productImage,
  imageAlt,
  productDescription,
  productSubtitle,
  productTitle,
  buttons = [],
  products,
  cardLayout,
  endButtonTitle
}: Props) {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section class="flex items-center justify-center w-full h-full bg-[#F2F2F2]">
      <div class="flex flex-col gap-12 max-w-6xl w-full h-full items-center justify-center py-28 px-6 md:px-10 xl:px-0">
        <div class="flex flex-col gap-4 mb-16 xl:mb-28">
          <h1 class="font-bold text-3xl">{title}</h1>

          <span class="flex items-center justify-center text-sm font-bold gap-2 cursor-pointer hover:underline">
            {subtitle}
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

        <div class="grid md:grid-cols-2 w-full h-full gap-y-8 md:gap-y-0 mb-12">
          <div class="order-2 md:order-1 flex flex-col w-full items-start md:max-w-xl xl:pt-8">
            <h2 class="text-black font-bold text-lg">{productSubtitle}</h2>
            <h1 class="card-title text-black text-3xl pt-3">{productTitle}</h1>
            <p class="text-black text-normal pt-3 text-normal">{productDescription}</p>

            <div class="card-actions justify-start items-center grid grid-cols-2 pt-10 xl:pt-16 gap-x-4 gap-y-8">
              {buttons.map((button) => (
                <button className={`
                  ${button.background === "transparent" ? 'border-black bg-transparent text-black' : 'bg-[#005EB8] text-white'} 
                  btn rounded-xl flex items-center justify-center gap-1`
                }>
                  {button.hasCartIcon && (
                    <Icon
                      id="ShoppingCart"
                      class="flex md:hidden"
                      width={20}
                      height={20}
                      strokeWidth={0.01}
                      fill="currentColor"
                    />
                  )}

                  <span class={`${button.hasTitleAppearWithCartIcon ? 'flex' : 'hidden'} md:flex`}>{button.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div class="order-1 md:order-2 left-0 md:right-0">
            {productImage && (
              <Picture>
                <Image
                  media="(min-width: 220px, max-width: 767px)"
                  src={productImage}
                  alt={imageAlt}
                  width={480}
                  height={320}
                  class="w-full"
                />
              </Picture>
            )}
          </div>
        </div>

        <div class="w-full flex">
          <div
            id={"slider"}
            class="grid grid-cols-[48px_1fr_48px] px-0 sm:px-5"
          >
            <Slider class="carousel carousel-center sm:carousel-end gap-6 col-span-full row-start-2 row-end-5">
              {products?.map((product, index) => (
                <Slider.Item
                  index={index}
                  class="carousel-item min-w-[320px] md:w-[380px] sm:first:pl-0 last:pr-6 sm:last:pr-0"
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
            <SliderJS rootId={"slider"} />
          </div>
        </div>

        {endButtonTitle && (
          <button class="flex items-center justify-center gap-2 btn bg-transparent rounded-xl border-black text-black">
            <span>{endButtonTitle}</span>
            <Icon
              id="ChevronRight"
              class="text-black"
              width={18}
              height={18}
              strokeWidth={0.01}
              fill="currentColor"
            />
          </button>
        )}
      </div>
    </section>
  )
}
