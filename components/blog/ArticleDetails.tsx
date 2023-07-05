import ArticlePost, {
  ArticlePostProps,
} from "$store/components/blog/ArticlePost.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import BannerItemSideToSide, { type BannerItemProps } from "$store/components/blog/BannerSideToSide.tsx";
import RelatedBlogPosts, { type RelatedBlogPostsProps } from "$store/components/blog/RelatedBlogPosts.tsx";

interface ButtonProps {
  title: string;
  background: "border-none" | "omron-blue";
  arrow: "left" | "right";
}

export interface ArticleDetailsProps {
  banner: BannerItemProps;
  post: ArticlePostProps;
  relatedPosts: RelatedBlogPostsProps;
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

export default function ArticleDetails({ banner, post, relatedPosts }: ArticleDetailsProps) {
  return (
    <section class="flex flex-col w-full h-full bg-white">
      {banner && <BannerItemSideToSide {...banner} />}
      <div class="grid lg:grid-cols-[300px_1fr] gap-y-12 lg:gap-y-0 gap-x-8 w-full h-full text-center lg:items-start lg:text-start py-20 px-6 md:px-12 pb-14">
        <div class="hidden lg:block lg:sticky lg:top-40 w-full">
          <div class="flex flex-col text-start items-start justify-start gap-4 lg:gap-8 lg:max-w-[185px]">
            <div class="hidden lg:flex flex-col border-l border-l-[#F2F2F2] gap-8">
              <div
                class="border-l-2 border-l-[#005EB8] pl-5 cursor-pointer"
              >
                Why are there two numbers to a blood pressure reading?
              </div>

              <div
                class="pl-5 cursor-pointer"
              >
                How do you know if you’re hypertensive?
              </div>
            </div>

            <div class="flex items-center justify-center gap-8">
              <button class="px-4 py-3 flex items-center justify-center gap-2 text-black font-bold h-[48px] max-w-[90px] bg-[#CE21414D] rounded-xl">
                <Icon id="Heart" strokeWidth={2} />
                <span>128</span>
              </button>

              <button class="px-4 py-3 flex items-center justify-center border border-black font-bold h-[48px] max-w-[90px] bg-transparent rounded-xl">
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.5202 12.6335C13.6702 12.6335 12.9002 12.9935 12.3602 13.5635L6.43023 10.2535C6.47023 10.0435 6.50023 9.83351 6.50023 9.61351C6.50023 9.36351 6.46023 9.12352 6.40023 8.89352L12.3402 5.66351C12.8902 6.24351 13.6602 6.60352 14.5102 6.60352C16.1602 6.60352 17.5102 5.26352 17.5102 3.60352C17.5102 1.94352 16.1702 0.603516 14.5102 0.603516C12.8502 0.603516 11.5102 1.94352 11.5102 3.60352C11.5102 3.86352 11.5502 4.10351 11.6102 4.34351L5.67023 7.57352C5.12023 6.99352 4.35023 6.61351 3.49023 6.61351C1.84023 6.61351 0.490234 7.95351 0.490234 9.61351C0.490234 11.2735 1.83023 12.6135 3.49023 12.6135C4.39023 12.6135 5.18023 12.2135 5.73023 11.5935L11.6202 14.8735C11.5602 15.1135 11.5102 15.3635 11.5102 15.6235C11.5102 17.2735 12.8502 18.6235 14.5102 18.6235C16.1702 18.6235 17.5102 17.2835 17.5102 15.6235C17.5102 13.9635 16.1702 12.6235 14.5102 12.6235L14.5202 12.6335ZM14.5202 2.12351C15.3402 2.12351 16.0202 2.79351 16.0202 3.62351C16.0202 4.45351 15.3502 5.12351 14.5202 5.12351C13.6902 5.12351 13.0202 4.45351 13.0202 3.62351C13.0202 2.79351 13.6902 2.12351 14.5202 2.12351ZM3.51023 11.1235C2.69023 11.1235 2.01023 10.4535 2.01023 9.62351C2.01023 8.79351 2.68023 8.12351 3.51023 8.12351C4.34023 8.12351 5.01023 8.79351 5.01023 9.62351C5.01023 10.4535 4.34023 11.1235 3.51023 11.1235ZM14.5202 17.1335C13.7002 17.1335 13.0202 16.4635 13.0202 15.6335C13.0202 14.8035 13.6902 14.1335 14.5202 14.1335C15.3502 14.1335 16.0202 14.8035 16.0202 15.6335C16.0202 16.4635 15.3502 17.1335 14.5202 17.1335Z" fill="black"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="w-full h-full">
          <div class="flex w-full gap-8 text-start items-center justify-center pb-16">
            <ArticlePost image={post?.image} graphicImage={post?.graphicImage} />
          </div>
        </div>
      </div>

      <footer class="flex flex-col w-full h-full pb-6 px-6 md:px-12">
        <div class="flex flex-col gap-6 items-start border-y border-y-[#C9C9C9] py-7 w-full h-full">
          <h1 class="font-bold">References</h1>

          <p>Williams B, Giuseppe M, Spiering W, et al. (2018). 2018 ESC/ESH Guidelines for the management of arterial hypertension. Journal of Hypertension, 36(10). doi: 10.1097/HJH.0000000000001940</p>
          
          <p>
            Bupa (2018). High blood pressure. Retrieved from {' '}
            <span class="text-[#005EB8] hover:underline">https://www.bupa.co.uk/health-information/heart-blood-circulation/high-blood-pressure-hypertension</span> 
          </p>

          <span class="text-[#005EB8] hover:underline hidden md:block">http://www.bloodpressureuk.org/BloodPressureandyou/Thebasics/Bloodpressurechart</span>
        </div>

        <div class="flex flex-col gap-4 md:flex-row items-center justify-between border-t border-t-[#C9C9C9] pt-12 w-full">
          <div class="flex flex-col gap-y-4 md:flex-row items-center justify-center md:gap-x-8 md:gap-y-0 lg:max-w-[600px] w-full">
            <Button
              title="Health and Lifestyle main page"
              background="border-none"
              arrow="left"
            />

            <Button
              title="Heart Health"
              background="border-none"
              arrow="left"
            />
          </div>

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
      </footer>

      <div class="flex flex-col items-center justify-center text-center w-full h-full px-6 py-14 md:py-32 bg-[#E5E5E5]">
        <span class="font-bold text-sm">Lorem impsum</span>
        <h1 class="text-4xl pb-11 md:pb-20">Related blog posts</h1>

        <RelatedBlogPosts {...relatedPosts} />
      </div>
    </section>
  );
}
