import Image from "deco-sites/std/components/Image.tsx";
import type { Product } from "deco-sites/std/commerce/types.ts";

export interface AdCardProps {
  product: Product;
  preload?: boolean;
}

const relative = (url: string) => {
  const link = new URL(url);
  return `${link.pathname}${link.search}`;
};

export default function AdCard({ product, preload }: AdCardProps) {
  const {
    url,
    productID,
    name,
    image: images,
    description,
  } = product;

  const id = `product-card-${productID}`;
  const [front, back] = images ?? [];

  return (
    <div id={id} class="flex flex-col bg-[#e9e7ea] w-full h-full p-3 shadow-md gap-2">
      <a class="flex items-center justify-center" href={url && relative(url)}>
        {images && (
          <Image
            class="object-cover mix-blend-multiply"
            width={375}
            height={225}
            src={front.url!}
            alt={front.alternateName ?? 'Imagem do produto'}
            preload={preload}
            loading={preload ? "eager" : "lazy"}
            decoding="async"
          />
        )}
      </a>

      <div class="flex flex-col h-full justify-between">
        <div class="flex flex-col gap-2 pb-4">
          <h1 class="font-bold">{name ?? 'Monitor de pressão arterial de pulso'}</h1>
          {description && <p dangerouslySetInnerHTML={{ __html: description.substring(0, 400).concat("...") }} />}
        </div>

        <div class="flex flex-col md:flex-row items-center justify-start gap-3 w-full">
          <a href={url && relative(url)} class="bg-[#005EB8] flex items-center justify-center p-2 text-white rounded-sm w-full">Saiba mais</a>        
          <a href={url && relative(url)} class="bg-[#5090b4] flex items-center justify-center p-2 text-white rounded-sm w-full">Onde comprar</a>        
        </div>
      </div>
    </div>
  )
}
