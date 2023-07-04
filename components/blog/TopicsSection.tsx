import { useState } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";
import ArticleCard, {
  ArticleCardProps,
} from "$store/components/blog/ArticleCard.tsx";

export interface TopicsProps {
  label?: string;
  posts?: ArticleCardProps[];
}

interface ButtonProps {
  title: string;
  background: "border-none" | "omron-blue";
  arrow: "left" | "right";
}

export interface Props {
  topics: TopicsProps[];
}

function Button({ title, background, arrow }: ButtonProps) {
  const buttonConfig = background === "border-none"
    ? "border-black border text-black"
    : "bg-[#005EB8] text-white";

  return (
    <button
      className={`${buttonConfig} font-bold rounded-xl w-full md:max-w-[300px] flex p-2 items-center justify-center gap-1`}
    >
      {arrow === "left" && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_9112_20540)">
            <path
              d="M21.0002 11.1998H5.7002L11.0002 5.8998L9.9002 4.7998L3.3002 11.3998C3.0002 11.6998 3.0002 12.1998 3.3002 12.4998L9.9002 19.0998L11.0002 17.9998L5.7002 12.6998H21.0002V11.1998Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_9112_20540">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}

      <span>{title}</span>

      {arrow === "right" && (
        <svg
          width="18"
          height="15"
          viewBox="0 0 18 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.77 6.62L11.15 0L10.02 1.13L15.28 6.39H0V7.99H15.27L10.01 13.25L11.14 14.38L17.76 7.76C18.08 7.44 18.08 6.94 17.77 6.62Z"
            fill="white"
          />
        </svg>
      )}
    </button>
  );
}

export default function TopicsSection({ topics }: Props) {
  const [selectedTopics, setSelectedTopics] = useState(
    topics?.length > 0 ? topics[0] : null,
  );

  const handleSelectChange = (
    event: JSX.TargetedEvent<HTMLSelectElement, Event>,
  ) => {
    const selectedIndex = event.currentTarget.selectedIndex;
    const selectedOption = topics[selectedIndex];
    setSelectedTopics(selectedOption);
  };

  return (
    <section class="flex w-full h-full bg-white">
      <div class="grid lg:grid-cols-[300px_1fr] gap-y-12 lg:gap-y-0 gap-x-8 w-full h-full text-center lg:items-start lg:text-start py-20 px-6 md:px-12">
        <div class="lg:sticky lg:top-40 w-full">
          <div class="flex flex-col items-center justify-center text-center lg:text-start lg:items-start lg:justify-start gap-4 lg:gap-8 lg:max-w-[185px]">
            <h1 class="font-bold leading-[36px] text-2xl md:text-3xl border-b border-b-[#C9C9C9] w-full pb-5 lg:pb-0 lg:border-none lg:w-auto">
              Choose a topic
            </h1>

            <>
              <div class="flex lg:hidden justify-center items-center w-full pb-4">
                <select
                  onChange={handleSelectChange}
                  className="select select-bordered bg-transparent border-black w-full md:max-w-md rounded-2xl"
                >
                  {topics?.map((item, index) => (
                    <option key={index} value={index}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>

              <div class="hidden lg:flex flex-col border-l border-l-[#F2F2F2] gap-8">
                {topics?.map((item) => (
                  <div
                    key={item.label}
                    onClick={() => setSelectedTopics(item)}
                    class={`${
                      selectedTopics === item &&
                      "border-l-2 border-l-[#005EB8] font-bold"
                    } pl-5 cursor-pointer`}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </>

            <div class="flex flex-col gap-1 justify-start text-center lg:text-start lg:items-start w-full">
              <span class="font-bold">Sort by</span>

              <select className="select select-bordered bg-transparent border-black w-full md:max-w-[259px] rounded-2xl">
                <option selected>new-old</option>
                <option>more views</option>
              </select>
            </div>
          </div>
        </div>

        <div class="w-full h-full">
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 w-full gap-8 text-start items-center justify-center pb-16">
            {selectedTopics?.posts?.map((topics) => (
              <ArticleCard
                {...topics}
              />
            ))}
          </div>

          <div class="flex flex-col gap-4 md:flex-row items-center justify-between border-t border-t-[#C9C9C9] pt-12 w-full">
            <Button
              title="Health and Lifestyle main page"
              background="border-none"
              arrow="left"
            />

            <div class="flex flex-col gap-y-4 md:flex-row items-center justify-center md:gap-x-8 md:gap-y-0 lg:max-w-xl w-full">
              <Button
                title="Respiratory Health"
                background="omron-blue"
                arrow="right"
              />

              <Button
                title="Pain Management"
                background="omron-blue"
                arrow="right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
