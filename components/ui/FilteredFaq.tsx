import { useState } from "preact/hooks";
import Button from "$store/components/ui/Button.tsx";
import Faq, { Props as FaqProps } from "$store/sections/Content/Faq.tsx";
import { JSX } from "preact/jsx-runtime";

export interface FaqsProps {
  label: string;
  faq: FaqProps;
}

export interface Props {
  faqs: FaqsProps[];
}

export default function FilteredFaq({ faqs }: Props) {
  const [selectedFaq, setSelectedFaq] = useState(
    faqs?.length > 0 ? faqs[0] : null,
  );

  const handleSelectChange = (
    event: JSX.TargetedEvent<HTMLSelectElement, Event>,
  ) => {
    const selectedIndex = event.currentTarget.selectedIndex;
    const selectedOption = faqs[selectedIndex];
    setSelectedFaq(selectedOption);
  };

  return (
    <div class="flex flex-col w-full">
      <>
        <div class="flex lg:hidden justify-center w-full pb-6">
          <select
            onChange={handleSelectChange}
            className="select select-bordered bg-transparent border-black w-full md:max-w-md rounded-2xl"
          >
            {faqs.map((item, index) => (
              <option key={index} value={index}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div class="hidden lg:flex w-full flex-wrap justify-start gap-y-3">
          {faqs?.map((item) => (
            <Button
              onClick={() => setSelectedFaq(item)}
              class={`btn-outline ${
                selectedFaq === item
                  ? "text-[#005EB8] border-[#005EB8]"
                  : "text-black border-black"
              } min-h-0 h-9 mx-[10px] mb-3 p-2 rounded-lg bg-transparent normal-case hover:bg-transparent hover:border-[#005EB8] hover:text-[#005EB8]`}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </>

      {selectedFaq?.faq && <Faq {...selectedFaq.faq} />}
    </div>
  );
}
