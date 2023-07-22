import ProductRating from "./ProductRating.tsx";
import ProgressBar from "$store/components/ui/ProgressBar.tsx";

interface ProgressReviewProps {
  position: number;
  progress: number;
  percentage: number;
}

function ProgressReview(
  { position, progress, percentage }: ProgressReviewProps,
) {
  return (
    <div class="flex items-center justify-between gap-2 w-full">
      <span>{position}</span>
      <div class="flex-1 w-full">
        <ProgressBar progress={progress} />
      </div>
      <span>{percentage}%</span>
    </div>
  );
}

function Comment() {
  return (
    <div class="flex flex-col gap-4 w-full items-start justify-start">
      <ProductRating />
      <h1 class="font-bold">Excellent Heart Monitor</h1>
      <p class="text-start">
        OMRON Complete is very easy to use and, in conjunction with the OMRON
        connect app, is a great medical device for monitoring a range of heart
        conditions.
      </p>
      <span class="text-dark-gray text-sm">12.04.2023 - Amanda</span>
    </div>
  );
}

export default function ProductFooter() {
  return (
    <section class="flex flex-col w-full h-full md:pb-16">
      <div class="grid lg:grid-cols-[300px_1fr] gap-y-12 lg:gap-y-0 gap-x-16 w-full h-full text-center lg:items-start lg:text-start px-6">
        <div class="block lg:sticky lg:top-40 w-full">
          <div class="flex flex-col text-start items-start justify-start gap-4 w-full">
            <h1 class="text-4xl font-bold">4.0 Rating</h1>
            <ProductRating />
            <ProgressReview position={5} progress={20} percentage={0} />
            <ProgressReview position={4} progress={50} percentage={100} />
            <ProgressReview position={3} progress={30} percentage={0} />
            <ProgressReview position={2} progress={25} percentage={0} />
            <ProgressReview position={1} progress={15} percentage={0} />
          </div>
        </div>

        <div class="w-full h-full">
          <div class="flex w-full h-full gap-8 text-start items-center justify-center">
            <div class="flex flex-col gap-12 justify-start text-center lg:text-start lg:items-start w-full">
              <select className="select select-bordered bg-transparent border-black w-full md:max-w-[259px] rounded-2xl">
                <option selected>Sort by: most recent</option>
                <option>Sort by: most likes</option>
              </select>

              <div class="flex flex-col gap-12">
                <Comment />
                <Comment />
                <Comment />
                <Comment />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
