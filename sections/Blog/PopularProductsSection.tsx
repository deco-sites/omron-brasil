import PopularProduct, {
  type PopularProductProps,
} from "$store/components/product/PopularProduct.tsx";

export interface Props {
  sections?: PopularProductProps[];
}

export default function PopularProductsSection({ sections }: Props) {
  return (
    <section class="bg-[#E5E5E5] w-full h-full py-14 md:py-32">
      <div class="flex flex-col px-12">
        {sections?.map((section) => <PopularProduct {...section} />)}
      </div>
    </section>
  );
}
