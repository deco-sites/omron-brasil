import PopularProductCard, {
  type PopularProductCardProps,
} from "$store/components/product/PopularProductCard.tsx";

export interface PopularProductProps {
  title: string;
  products: PopularProductCardProps[] | null;
}

export default function PopularProduct(
  { title, products }: PopularProductProps,
) {
  return (
    <div class="grid lg:grid-cols-[294px_1fr] gap-y-12 lg:gap-y-0 gap-x-8 w-full h-full items-center lg:items-start text-start border-b border-b-dark-gray py-20">
      <div class="flex flex-col items-center lg:items-start justify-between gap-10 lg:gap-0 h-full w-full">
        <h1 class="font-bold text-center lg:text-start leading-[36px] text-2xl md:text-3xl">
          {title}
        </h1>

        <button className="border-black bg-transparent text-black hover:bg-white btn rounded-xl w-full md:max-w-[120px]">
          View all
        </button>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 w-full gap-8">
        {products?.map((product) => <PopularProductCard {...product} />)}
      </div>
    </div>
  );
}
