import Image from "deco-sites/std/components/Image.tsx";
import Avatar from "$store/components/ui/Avatar.tsx";
import WishlistIcon from "$store/islands/WishlistButton.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import { useVariantPossibilities } from "$store/sdk/useVariantPossiblities.ts";
import { mapProductToAnalyticsItem } from "deco-sites/std/commerce/utils/productToAnalyticsItem.ts";
import { SendEventOnClick } from "$store/sdk/analytics.tsx";
import type { Product } from "deco-sites/std/commerce/types.ts";
import AddToCartButton from "$store/islands/AddToCartButton.tsx";

interface Props {
  product: Product;
}

export default function RelatedProductCard({ product }: Props) {
  const {
    url,
    productID,
    name,
    image: images,
    offers,
  } = product;

  const [front] = images ?? [];
  const { price, listPrice, seller } = useOffer(
    offers,
  );

  return (
    <a
      href={url}
      class="grid md:grid-cols-[186px_1fr] items-center justify-center py-7 px-2 w-full h-full bg-white"
    >
      <figure class="flex items-center justify-center md:border-r md:border-r-[#C9C9C9] md:px-10">
        <Image
          src={front.url!}
          alt={front.alternateName}
          width={200}
          height={279}
        />
      </figure>

      <div class="flex flex-col items-center justify-center gap-3 text-sm text-center md:pl-4 px-3">
        <h2>{name}</h2>

        <span class="text-lg font-bold text-black">
          {formatPrice(price, offers!.priceCurrency!)}
        </span>

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
      </div>
    </a>
  );
}
