import { useState } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

import RelatedProductCard from "./RelatedProductCard.tsx";

export interface RelatedProductsProps {
  title: string;
  products: LoaderReturnType<Product[] | null>;
}

export interface Props {
  relateds: RelatedProductsProps[];
}

export default function RelatedProducts({ relateds }: Props) {
  const [selectedRelated, setSelectedRelated] = useState(
    relateds?.length > 0 ? relateds[0] : null,
  );

  const handleSelectChange = (
    event: JSX.TargetedEvent<HTMLSelectElement, Event>,
  ) => {
    const selectedIndex = event.currentTarget.selectedIndex;
    const selectedOption = relateds[selectedIndex];
    setSelectedRelated(selectedOption);
  };

  return (
    <section class="bg-pale-gray flex w-full h-full items-center justify-center">
      <div class="flex flex-col w-full h-full px-6 lg:px-12 gap-12 py-14 md:pb-32 max-w-2xl">
        {relateds && (
          <>
            <div class="flex lg:hidden justify-center items-center w-full pb-4">
              <select
                onChange={handleSelectChange}
                className="select select-bordered bg-transparent border-black w-full md:max-w-md rounded-2xl"
              >
                {relateds?.map((item, index) => (
                  <option key={index} value={index}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>

            <div class="hidden lg:flex flex-row justify-center items-center w-full border-b border-b-light-gray">
              <div class="flex items-start justify-start w-full max-w-xl gap-16">
                {relateds?.map((related) => (
                  <div class="flex flex-col w-full">
                    <button
                      onClick={() => setSelectedRelated(related)}
                      class={`${
                        selectedRelated === related &&
                        "border-blue-middle border-b font-bold"
                      } pb-6`}
                    >
                      <span>{related?.title}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {selectedRelated && (
          <div class="flex flex-col gap-10 w-full h-full">
            <div class="grid gap-4 w-full h-full items-center justify-center">
              {selectedRelated?.products?.map((item) => (
                <RelatedProductCard product={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
