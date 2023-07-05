import { useState } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";

import GridProductSpecifications from "./GridProductSpecifications.tsx";
import Faq from "$store/sections/Content/Faq.tsx";

export interface ProductInfoProps {
  type: "specifications" | "support" | "faq";
}

export default function ProductInfoTab({ type }: ProductInfoProps) {
  const [selectedInfo, setSelectedInfo] = useState(type[0]);

  const handleSelectChange = (
    event: JSX.TargetedEvent<HTMLSelectElement, Event>,
  ) => {
    const selectedIndex = event.currentTarget.selectedIndex;
    setSelectedInfo(type[selectedIndex]);
  };

  return (
    <section class="bg-[#F2F2F2] flex w-full h-full items-center justify-center">
      <div class="flex flex-col w-full h-full px-6 lg:px-12 gap-12 py-14 lg:py-28">
        {type && (
          <>
            <div class="flex lg:hidden justify-center items-center w-full pb-4">
              <select
                onChange={handleSelectChange}
                className="select select-bordered bg-transparent border-black w-full md:max-w-md rounded-2xl"
              >
                <option value={0}>
                  Specifications
                </option>

                <option value={1}>
                  Support
                </option>

                <option value={2}>
                  Faq
                </option>
              </select>
            </div>

            <div class="hidden lg:flex flex-row justify-start items-center w-full border-b border-b-[#E5E5E5]">
              <div class="flex items-start justify-start w-full max-w-xl gap-16">
                <button
                  onClick={() => setSelectedInfo(type[0])}
                  class={`${
                    selectedInfo === type[0] &&
                    "border-[#005EB8] border-b-2 font-bold"
                  } pb-6`}
                >
                  <span>Specifications</span>
                </button>

                <button
                  onClick={() => setSelectedInfo(type[1])}
                  class={`${
                    selectedInfo === type[1] &&
                    "border-[#005EB8] border-b-2 font-bold"
                  } pb-6`}
                >
                  <span>Support</span>
                </button>

                <button
                  onClick={() => setSelectedInfo(type[2])}
                  class={`${
                    selectedInfo === type[2] &&
                    "border-[#005EB8] border-b-2 font-bold"
                  } pb-6`}
                >
                  <span>FAQ</span>
                </button>
              </div>
            </div>
          </>
        )}

        {selectedInfo === type[0] && (
          <GridProductSpecifications />
        )}

        {selectedInfo === type[1] && (
          <div>Suporte</div>
        )}

        {selectedInfo === type[2] && (
          <Faq />
        )}
      </div>      
    </section>
  )
}
