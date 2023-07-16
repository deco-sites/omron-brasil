import { Product } from "deco-sites/std/commerce/types.ts";

import AdCard from "$store/components/advertisement/AdCard.tsx";

export interface Props {
  products: Product[] | null;
}

function AdGallery({ products }: Props) {
  return (
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-center xl:grid-cols-4 xl:gap-10">
      {products?.map((product, index) => (
        <AdCard product={product} preload={index === 0} />
      ))}
    </div>
  );
}

export default AdGallery;
