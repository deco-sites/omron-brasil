export interface WebinarCardProps {
  webinarType: "cardiovascular" | "respiratory";
  title: string;
  speakers: string;
}

export default function WebinarsCard(
  { webinarType, title, speakers }: WebinarCardProps,
) {
  const borderColor = webinarType === "cardiovascular"
    ? "border-[#7F74FF]"
    : "border-[#3EB3A1]";
  const bgColor = webinarType === "cardiovascular"
    ? "bg-[#7F74FF4D] hover:bg-[#7F74FF4D]"
    : "bg-[#3EB3A14D] hover:bg-[#3EB3A14D]";
  const hoverColor = webinarType === "cardiovascular"
    ? "hover:bg-[#7F74FF] hover:text-white"
    : "hover:bg-[#3EB3A1] hover:text-white";

  return (
    <div
      class={`flex flex-col justify-between w-full h-full min-h-[320px] md:min-h-[360px] bg-white text-black border-t-8 p-6 ${borderColor}`}
    >
      <div class="flex flex-col gap-4">
        <button
          className={`${bgColor} border-none lowercase text-sm text-black max-w-[120px] px-2 btn rounded-xl`}
        >
          {webinarType}
        </button>

        <h1 class="text-xl font-bold leading-[24px]">
          {title}
        </h1>

        <p>
          <span class="font-bold">Speaker:</span>
          {speakers}
        </p>
      </div>

      <button
        className={`border-black bg-transparent text-black text-sm max-w-[120px] btn w-full rounded-xl ${hoverColor}`}
      >
        Read more
      </button>
    </div>
  );
}
