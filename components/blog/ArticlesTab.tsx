import { useState } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";
import ArticleCard, {
  type ArticleCardProps,
} from "$store/components/blog/ArticleCard.tsx";

export type IIcon = "Hearth" | "Respiratory" | "Pain";

export interface IconProps {
  icon: "Hearth" | "Respiratory" | "Pain";
}

export interface ArticlesProps {
  title: string;
  icon: IIcon;
  label: string;
  description?: string;
  hasButton?: { title: string };
  posts?: ArticleCardProps[];
}

export interface ArticlesTabProps {
  articles: ArticlesProps[];
}

function Icon({ icon }: IconProps) {
  return (
    <>
      {!icon ||
        icon === "Hearth" && (
            <svg
              width="40"
              height="36"
              viewBox="0 0 40 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.38 15C4.28 8.84 6.68 4.56 9.85 2.93C10.86 2.41 11.91 2.16 12.95 2.16C14.93 2.16 17.12 3.28 19.17 5.24C19.46 5.51 19.75 5.77 20 5.77C20.24 5.77 20.52 5.53 20.83 5.24C23.96 2.32 27.16 1.4 30.15 2.93C33.32 4.56 35.72 8.85 34.62 15H36.75C37.88 7.99 34.92 3.02 31.11 1.06C29.75 0.36 28.32 0 26.86 0C24.32 0 21.95 1.08 20 3.11C18.05 1.08 15.68 0 13.13 0C11.68 0 10.25 0.36 8.88 1.06C5.07 3.02 2.12 7.99 3.25 15H5.38Z"
                fill="black"
              />
              <path
                d="M32.5 21C28.87 27.76 21.99 32.46 20 33.72C18.02 32.46 11.13 27.75 7.5 21H5.14C9.41 29.84 19.02 35.59 19.47 35.86C19.56 35.91 19.65 35.95 19.75 35.97C19.83 35.99 19.92 36 20 36C20.19 36 20.37 35.95 20.53 35.86C20.98 35.59 30.59 29.87 34.86 21H32.5Z"
                fill="black"
              />
              <path
                d="M18.56 28.14C18.55 28.14 18.54 28.14 18.54 28.14C18.09 28.13 17.71 27.82 17.59 27.39L13.61 11.92L11.64 18.3C11.52 18.71 11.13 19 10.69 19H0V17H9.95L12.75 7.94001C12.88 7.51001 13.28 7.20001 13.73 7.24001C14.18 7.25001 14.56 7.56001 14.68 7.99001L18.66 23.46L20.43 17.7C20.56 17.28 20.95 16.99 21.39 16.99H23.95L26.73 9.95001C26.88 9.57001 27.25 9.32001 27.66 9.32001C28.07 9.32001 28.44 9.57001 28.59 9.96001L31.33 17H40V19H30.64C30.23 19 29.86 18.75 29.71 18.36L27.64 13.06L25.55 18.36C25.4 18.75 25.03 19 24.62 19H22.11L19.51 27.43C19.39 27.85 19 28.14 18.56 28.14Z"
                fill="black"
              />
            </svg>
          )}
      {icon === "Respiratory" && (
        <svg
          width="40"
          height="34"
          viewBox="0 0 40 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.05 0C26.69 0 25.51 0.48 24.63 1.4C23.19 2.91 22.89 5.29 22.95 6.49V11.03C21.05 10.71 21.05 9.66 21.05 7.11V0.0500002H18.96V7.11C18.96 7.62 18.96 8.13 18.99 8.62C18.91 10.14 18.58 10.84 17.06 11.08V6.48C17.11 5.29 16.82 2.91 15.38 1.39C14.5 0.48 13.32 0 11.95 0C5.14 0 0 10.05 0 23.38C0 28.19 0.89 31.29 2.71 32.85C3.6 33.62 4.69 34 5.95 34C6.3 34 6.66 33.97 7.03 33.91C11.1 33.28 17.13 30.65 17.05 26V13.06C18.47 12.85 19.38 12.38 19.96 11.74C20.55 12.42 21.48 12.9 22.95 13.12V25.99C22.88 30.66 28.9 33.29 32.97 33.92C33.34 33.97 33.7 34 34.05 34C35.31 34 36.4 33.62 37.29 32.85C39.12 31.29 40 28.19 40 23.38C40 10.05 34.86 0 28.05 0ZM14.96 6.41C14.96 6.43 14.96 6.44 14.96 6.46V26.02C15.01 29.12 10.07 31.33 6.71 31.85C5.6 32.02 4.73 31.83 4.08 31.27C2.77 30.14 2.1 27.49 2.1 23.39C2.1 10.24 7.22 2.1 11.96 2.1C12.76 2.1 13.38 2.34 13.86 2.85C14.85 3.89 14.99 5.77 14.96 6.41ZM35.92 31.27C35.26 31.83 34.4 32.02 33.29 31.85C29.93 31.33 24.99 29.12 25.04 26V6.46C25.04 6.44 25.04 6.43 25.04 6.41C25.01 5.77 25.15 3.9 26.15 2.84C26.63 2.34 27.25 2.09 28.05 2.09C32.79 2.09 37.91 10.23 37.91 23.38C37.91 27.49 37.24 30.14 35.92 31.27Z"
            fill="black"
          />
        </svg>
      )}
      {icon === "Pain" && (
        <svg
          width="31"
          height="41"
          viewBox="0 0 31 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.48907 12.9583C5.33907 12.9583 4.23907 12.5383 3.30907 11.7183C2.31907 10.8483 1.53907 9.54829 1.15907 8.14829C0.77907 6.74829 0.82907 5.31829 1.28907 4.12829C1.86907 2.64829 3.02907 1.62829 4.66907 1.18829C6.29907 0.748294 7.81907 1.03829 9.06907 2.01829C10.0691 2.80829 10.8291 4.01829 11.2091 5.42829C12.0091 8.39829 11.0991 11.8783 7.80907 12.7683C7.35907 12.8983 6.91907 12.9583 6.48907 12.9583ZM6.10907 2.99829C5.81907 2.99829 5.50907 3.03829 5.18907 3.12829C4.17907 3.39829 3.49907 3.98829 3.15907 4.85829C2.84907 5.63829 2.82907 6.64829 3.09907 7.62829C3.36907 8.63829 3.94907 9.60829 4.63907 10.2183C5.41907 10.8983 6.30907 11.1183 7.28907 10.8483C9.72907 10.1883 9.65907 7.35829 9.27907 5.95829C8.99907 4.97829 8.46907 4.11829 7.81907 3.59829C7.30907 3.19829 6.73907 2.99829 6.10907 2.99829Z"
            fill="black"
          />
          <path
            d="M30.9576 32.6988H25.9676V34.6988H30.9576V32.6988Z"
            fill="black"
          />
          <path
            d="M29.977 27.6963L25.5383 29.7959L26.3936 31.6039L30.8322 29.5043L29.977 27.6963Z"
            fill="black"
          />
          <path
            d="M26.394 35.7947L25.5392 37.6027L29.9779 39.7013L30.8327 37.8933L26.394 35.7947Z"
            fill="black"
          />
          <path
            d="M20.0574 40.9983H18.0574C18.0574 30.1083 14.7074 21.3283 14.6774 21.2383C14.5474 20.8983 14.6074 20.5183 14.8374 20.2383C15.0674 19.9583 15.4374 19.8283 15.7874 19.8983L20.4574 20.7683C20.9674 20.8583 21.3174 21.3283 21.2674 21.8383L20.4574 31.1283L22.4674 31.3883C22.8074 29.3083 23.5974 24.3683 23.8874 22.0583C24.3474 18.4583 24.1374 17.9983 16.5574 16.2083C12.4374 15.2383 7.86744 16.2183 4.93744 18.7083C3.50744 19.9183 1.84744 22.0183 2.04744 25.1383C2.38744 30.1483 2.19744 36.5183 2.09744 38.9983H4.57744C4.84744 37.1283 5.36744 32.2383 4.44744 26.8683L6.41744 26.5283C7.64744 33.7383 6.46744 39.9283 6.40744 40.1883C6.31744 40.6583 5.90744 40.9983 5.42744 40.9983H1.04744C0.777442 40.9983 0.507442 40.8883 0.327442 40.6883C0.137442 40.4883 0.0374425 40.2183 0.0574425 39.9483C0.0574425 39.8683 0.467443 31.4883 0.0574425 25.2683C-0.152557 22.1883 1.12744 19.3083 3.64744 17.1783C7.04744 14.2983 12.2974 13.1483 17.0174 14.2583C24.3074 15.9783 26.5774 16.7783 25.8774 22.2983C25.4974 25.2983 24.3374 32.3583 24.2874 32.6583C24.1974 33.1883 23.7074 33.5483 23.1774 33.4883L19.5174 33.0183C19.8374 35.4583 20.0574 38.1483 20.0574 40.9983ZM17.1174 22.1783C17.5474 23.5283 18.1574 25.6283 18.7074 28.2683L19.2074 22.5683L17.1174 22.1783Z"
            fill="black"
          />
        </svg>
      )}
    </>
  );
}

export default function ArticlesTab({ articles }: ArticlesTabProps) {
  const [selectedArticle, setSelectedArticle] = useState(
    articles?.length > 0 ? articles[0] : null,
  );

  const handleSelectChange = (
    event: JSX.TargetedEvent<HTMLSelectElement, Event>,
  ) => {
    const selectedIndex = event.currentTarget.selectedIndex;
    const selectedOption = articles[selectedIndex];
    setSelectedArticle(selectedOption);
  };

  return (
    <div class="flex flex-col w-full h-full bg-white">
      <div class="flex flex-col w-full h-full px-6 lg:px-12 gap-12 py-14 lg:py-28">
        <h1 class="text-center text-3xl lg:pb-9">{selectedArticle?.title}</h1>
        <>
          <div class="flex lg:hidden justify-center items-center w-full pb-4">
            <div class="flex flex-col gap-9 items-center justify-center w-full">
              <select
                onChange={handleSelectChange}
                className="select select-bordered bg-transparent border-black w-full md:max-w-md rounded-2xl"
              >
                {articles?.map((item, index) => (
                  <option key={index} value={index}>
                    {item.label}
                  </option>
                ))}
              </select>

              <p class="leading-6">{selectedArticle?.description}</p>
            </div>
          </div>

          <div class="hidden lg:flex flex-row justify-start items-start w-full border-b border-b-[#E5E5E5]">
            <div class="flex items-start justify-start w-full max-w-xl gap-16">
              {articles?.map((article) => (
                <div class="flex flex-col w-full">
                  <button
                    onClick={() => setSelectedArticle(article)}
                    class={`${
                      selectedArticle === article &&
                      "border-[#005EB8] border-b font-bold"
                    } pb-4 flex items-center justify-center gap-7 w-full`}
                  >
                    <Icon icon={article.icon} />

                    <span>{article?.label}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>

        {selectedArticle && (
          <div class="flex flex-col gap-10 w-full h-full">
            <div class="hidden lg:flex items-end justify-between w-full">
              <p class="leading-7 text-xl max-w-4xl">
                {selectedArticle.description}
              </p>
              {selectedArticle.hasButton && (
                <button className="border-black bg-transparent text-black hover:bg-[#003153] hover:text-white btn rounded-xl w-full max-w-[190px]">
                  {selectedArticle.hasButton.title}
                </button>
              )}
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full h-full items-center justify-center">
              {selectedArticle?.posts?.map((item) => <ArticleCard {...item} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
