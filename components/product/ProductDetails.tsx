import { useId } from "preact/hooks";
import AddToCartButton from "$store/islands/AddToCartButton.tsx";
import ShippingSimulation from "$store/islands/ShippingSimulation.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/components/ui/SliderJS.tsx";
import OutOfStock from "$store/islands/OutOfStock.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import { SendEventOnLoad } from "$store/sdk/analytics.tsx";
import { mapProductToAnalyticsItem } from "deco-sites/std/commerce/utils/productToAnalyticsItem.ts";
import type { ProductDetailsPage } from "deco-sites/std/commerce/types.ts";
import type { LoaderReturnType } from "$live/types.ts";

import ProductRating from "./ProductRating.tsx";
import ProductFooter from "./ProductFooter.tsx";
import ProductInfoTab from "$store/islands/ProductInfoTab.tsx";
import ProductSpecifications from "./ProductSpecifications.tsx";
import ProductSelector from "./ProductVariantSelector.tsx";
import ProductImageZoom from "$store/islands/ProductImageZoom.tsx";
import WishlistButton from "../wishlist/WishlistButton.tsx";

export type Variant = "front-back" | "slider" | "auto";

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
  /**
   * @title Product view
   * @description Ask for the developer to remove this option since this is here to help development only and should not be used in production
   */
  variant?: Variant;
}

const WIDTH = 360;
const HEIGHT = 500;
const ASPECT_RATIO = `${WIDTH} / ${HEIGHT}`;

/**
 * Rendered when a not found is returned by any of the loaders run on this page
 */
function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-28">
      <div class="flex flex-col items-center justify-center gap-6">
        <span class="font-medium text-2xl">Página não encontrada</span>
        <a href="/">
          <Button>Voltar à página inicial</Button>
        </a>
      </div>
    </div>
  );
}

function ProductInfo({ page }: { page: ProductDetailsPage }) {
  const {
    breadcrumbList,
    product,
  } = page;
  const {
    description,
    productID,
    offers,
    name,
    gtin,
    isVariantOf,
  } = product;
  const { price, listPrice, seller, installments, availability } = useOffer(
    offers,
  );

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        itemListElement={breadcrumbList?.itemListElement.slice(0, -1)}
      />
      {/* Rating and Wishlist */}
      <div class="flex items-center justify-between mt-4">
        <ProductRating />

        <div class="flex items-center justify-center gap-1">
          <WishlistButton
            variant="icon"
            productGroupID={isVariantOf?.productGroupID}
            productID={productID}
          />

          <span>Favourites</span>
        </div>
      </div>
      {/* Code and name */}
      <div class="flex flex-col gap-3 mt-4">
        <h1>
          <span class="font-medium text-xl">{name}</span>
        </h1>
        <h2>
          <span class="font-medium text-justify">{description}</span>
        </h2>
        <p class="font-bold">3 years warranty</p>
      </div>
      {/* Prices */}
      <div class="mt-4">
        <div class="flex flex-row gap-2 items-center">
          <span class="text-3xl font-bold text-black">
            {formatPrice(price, offers!.priceCurrency!)}
          </span>
          <span class="line-through text-base-300 text-xs">
            {formatPrice(listPrice, offers!.priceCurrency!)}
          </span>
        </div>
        <span class="text-sm text-base-300">
          {installments}
        </span>
      </div>
      {/* Sku Selector */}
      <div class="mt-4 sm:mt-6">
        <ProductSelector product={product} />
      </div>
      {/* Add to Cart and Favorites button */}
      <div class="mt-4 sm:mt-8 flex flex-wrap w-full gap-2">
        {availability === "https://schema.org/InStock"
          ? (
            <>
              {seller && (
                <AddToCartButton
                  skuId={productID}
                  sellerId={seller}
                  price={price ?? 0}
                  discount={price && listPrice ? listPrice - price : 0}
                  name={product.name ?? ""}
                  productGroupId={product.isVariantOf?.productGroupID ?? ""}
                />
              )}
              <button class="btn btn-outline hover:bg-[#005EB8] text-black border border-black px-3 md:min-w-[193px]">
                Find a store
              </button>
            </>
          )
          : <OutOfStock productID={productID} />}
      </div>
      {/* Some Product Info */}
      <div class="grid grid-cols-3 w-full mt-7 sm:mt-6 gap-x-8 items-center justify-center text-center">
        <div class="flex flex-col items-center justify-center gap-3">
          <Icon id="ShoppingCart" width={18} height={18} strokeWidth={1} />
          <span>Free shipping</span>
        </div>

        <div class="flex flex-col items-center justify-center gap-3">
          <Icon id="ShoppingCart" width={18} height={18} strokeWidth={1} />
          <span>Free shipping</span>
        </div>

        <div class="flex flex-col items-center justify-center gap-3">
          <Icon id="ShoppingCart" width={18} height={18} strokeWidth={1} />
          <span>Free shipping</span>
        </div>
      </div>
      {/* Product Specifications */}
      <ProductSpecifications />
      {/* Shipping Simulation */}
      <div class="mt-8">
        <ShippingSimulation
          items={[{
            id: Number(product.sku),
            quantity: 1,
            seller: seller ?? "1",
          }]}
        />
      </div>
      {/* Analytics Event */}
      <SendEventOnLoad
        event={{
          name: "view_item",
          params: {
            items: [
              mapProductToAnalyticsItem({
                product,
                breadcrumbList,
                price,
                listPrice,
              }),
            ],
          },
        }}
      />
    </>
  );
}

/**
 * Here be dragons
 *
 * bravtexfashionstore (VTEX default fashion account) has the same images for different skus. However,
 * VTEX api does not return the same link for the same image. This causes the image to blink when
 * the user changes the selected SKU. To prevent this blink from happening, I created this function
 * bellow to use the same link for all skus. Example:
 *
 * {
    skus: [
      {
        id: 1
        image: [
          "https://bravtexfashionstore.vtexassets.com/arquivos/ids/123/a.jpg",
          "https://bravtexfashionstore.vtexassets.com/arquivos/ids/124/b.jpg",
          "https://bravtexfashionstore.vtexassets.com/arquivos/ids/125/c.jpg"
        ]
      },
      {
        id: 2
        image: [
          "https://bravtexfashionstore.vtexassets.com/arquivos/ids/321/a.jpg",
          "https://bravtexfashionstore.vtexassets.com/arquivos/ids/322/b.jpg",
          "https://bravtexfashionstore.vtexassets.com/arquivos/ids/323/c.jpg"
        ]
      }
    ]
  }

  for both skus 1 and 2, we have the same images a.jpg, b.jpg and c.jpg, but
  they have different urls. This function returns, for both skus:

  [
    "https://bravtexfashionstore.vtexassets.com/arquivos/ids/321/a.jpg",
    "https://bravtexfashionstore.vtexassets.com/arquivos/ids/322/b.jpg",
    "https://bravtexfashionstore.vtexassets.com/arquivos/ids/323/c.jpg"
  ]

  This is a very catalog dependent function. Feel free to change this as you wish
 */
const useStableImages = (product: ProductDetailsPage["product"]) => {
  const imageNameFromURL = (url = "") => {
    const segments = new URL(url).pathname.split("/");
    return segments[segments.length - 1];
  };

  const images = product.image ?? [];
  const allImages = product.isVariantOf?.hasVariant.flatMap((p) => p.image)
    .reduce((acc, img) => {
      if (img?.url) {
        acc[imageNameFromURL(img.url)] = img.url;
      }
      return acc;
    }, {} as Record<string, string>) ?? {};

  return images.map((img) => {
    const name = imageNameFromURL(img.url);

    return { ...img, url: allImages[name] ?? img.url };
  });
};

function Details({
  page,
  variant,
}: { page: ProductDetailsPage; variant: Variant }) {
  const { product } = page;
  const id = `product-image-gallery:${useId()}`;
  const images = useStableImages(product);

  /**
   * Product slider variant
   *
   * Creates a three columned grid on destkop, one for the dots preview, one for the image slider and the other for product info
   * On mobile, there's one single column with 3 rows. Note that the orders are different from desktop to mobile, that's why
   * we rearrange each cell with col-start- directives
   */
  if (variant === "slider") {
    return (
      <>
        <div
          id={id}
          class="grid grid-cols-1 gap-4 lg:grid-cols-[max-content_40vw_40vw] md:grid-rows-1 md:justify-center"
        >
          {/* Image Slider */}
          <div class="relative md:col-start-2 md:col-span-1 md:row-start-1">
            <Slider class="carousel carousel-center gap-6 w-full md:w-[40vw]">
              {images.map((img, index) => (
                <Slider.Item
                  index={index}
                  class="carousel-item w-full"
                >
                  <Image
                    class="w-full"
                    sizes="(max-width: 640px) 100vw, 40vw"
                    style={{ aspectRatio: ASPECT_RATIO }}
                    src={img.url!}
                    alt={img.alternateName}
                    width={WIDTH}
                    height={HEIGHT}
                    // Preload LCP image for better web vitals
                    preload={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </Slider.Item>
              ))}
            </Slider>

            <Slider.PrevButton
              class="no-animation absolute left-2 top-1/2 lg:top-1/4 btn btn-circle btn-outline"
              disabled
            >
              <Icon size={20} id="ChevronLeft" strokeWidth={3} />
            </Slider.PrevButton>

            <Slider.NextButton
              class="no-animation absolute right-2 top-1/2 lg:top-1/4 btn btn-circle btn-outline"
              disabled={images.length < 2}
            >
              <Icon size={20} id="ChevronRight" strokeWidth={3} />
            </Slider.NextButton>

            <div class="absolute top-2 right-2 bg-base-100 rounded-full">
              <ProductImageZoom
                images={images}
                width={1280}
                height={1280 * HEIGHT / WIDTH}
              />
            </div>
          </div>

          {/* Dots */}
          <ul class="flex gap-2 md:justify-start overflow-auto px-4 md:px-0 md:flex-col md:col-start-1 md:col-span-1 md:row-start-1">
            {images.map((img, index) => (
              <li class="min-w-[63px] md:min-w-[100px]">
                <Slider.Dot index={index}>
                  <Image
                    style={{ aspectRatio: ASPECT_RATIO }}
                    class="group-disabled:border-base-300 border rounded "
                    width={63}
                    height={87.5}
                    src={img.url!}
                    alt={img.alternateName}
                  />
                </Slider.Dot>
              </li>
            ))}
          </ul>

          {/* Product Info */}
          <div class="px-4 md:pr-0 md:pl-6 md:col-start-3 md:col-span-1 md:row-start-1 md:max-w-[480px]">
            <ProductInfo page={page} />
          </div>
        </div>
        <SliderJS rootId={id}></SliderJS>
      </>
    );
  }

  /**
   * Product front-back variant.
   *
   * Renders two images side by side both on mobile and on desktop. On mobile, the overflow is
   * reached causing a scrollbar to be rendered.
   */
  return (
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-[50vw_25vw] sm:grid-rows-1 sm:justify-center">
      {/* Image slider */}
      <ul class="carousel carousel-center gap-6">
        {[images[0], images[1] ?? images[0]].map((img, index) => (
          <li class="carousel-item min-w-[100vw] sm:min-w-[24vw]">
            <Image
              sizes="(max-width: 640px) 100vw, 24vw"
              style={{ aspectRatio: ASPECT_RATIO }}
              src={img.url!}
              alt={img.alternateName}
              width={WIDTH}
              height={HEIGHT}
              // Preload LCP image for better web vitals
              preload={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </li>
        ))}
      </ul>

      {/* Product Info */}
      <div class="px-4 sm:pr-0 sm:pl-6">
        <ProductInfo page={page} />
      </div>
    </div>
  );
}

function ProductDetails({ page, variant: maybeVar = "auto" }: Props) {
  /**
   * Showcase the different product views we have on this template. In case there are less
   * than two images, render a front-back, otherwhise render a slider
   * Remove one of them and go with the best suited for your use case.
   */
  const variant = maybeVar === "auto"
    ? page?.product.image?.length && page?.product.image?.length < 2
      ? "front-back"
      : "slider"
    : maybeVar;

  return (
    <div class="py-0 sm:py-10 bg-[#F2F2F2]">
      <div class="container">
        {page
          ? (
            <>
              <Details page={page} variant={variant} />
              <ProductInfoTab type="specifications" />
              <ProductFooter />
            </>
          )
          : <NotFound />}
      </div>
    </div>
  );
}

export default ProductDetails;
