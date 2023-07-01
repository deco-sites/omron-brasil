import { useState } from "preact/hooks";
import Icon from "$store/components/ui/Icon.tsx";

export interface TabsProps {
  label?: string;
  item: {
    title?: string;
    description?: string;
    subitems: { label: string }[];
  };
}

export interface Props {
  tabs: TabsProps[];
  backgroundColor?: "Dark-Blue" | "Light-Gray";
}

export default function Tabs({ tabs, backgroundColor }: Props) {
  const bgColor = backgroundColor;
  const textColor = !bgColor || bgColor === "Dark-Blue"
    ? "text-white"
    : "text-black";
  const borderColor = !bgColor || bgColor === "Dark-Blue"
    ? "border-b-white"
    : "border-b-black";
  const [selectedTab, setSelectedTab] = useState(
    tabs?.length > 0 ? tabs[0] : null,
  );

  return (
    <div class={`${textColor} flex flex-col w-full h-full`}>
      <div class="flex flex-wrap flex-row justify-center w-full">
        {tabs?.map((tab) => (
          <button
            onClick={() => setSelectedTab(tab)}
            class={`${
              selectedTab === tab && `font-bold ${borderColor}`
            } w-28 xl:w-40 pb-4 border-b border-b-black`}
          >
            {tab?.label}
          </button>
        ))}
      </div>

      {selectedTab?.item && (
        <div class="flex flex-col gap-12">
          <h1 class="font-bold text-xl pt-4">{selectedTab?.item?.title}</h1>

          <div
            class={"grid w-full mt-9 gap-x-3"}
          >
            {selectedTab?.item.subitems.map((subitem) => {
              return (
                <div
                  key={subitem?.label}
                  class={`
                    ${
                    bgColor === "Dark-Blue"
                      ? "border-t-white last:border-b-white"
                      : "border-t-black last:border-b-black"
                  } 
                    w-full flex flex-row justify-between py-6 px-4 text-lg border-t last:border-b`}
                >
                  <div class="flex items-center justify-center gap-8">
                    <figure class="block">
                      <Icon id="Truck" width={30} height={30} />
                    </figure>

                    <span>{subitem?.label}</span>
                  </div>

                  <figure class="block">
                    <Icon id="Plus" width={25} height={25} strokeWidth={0.90} />
                  </figure>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
