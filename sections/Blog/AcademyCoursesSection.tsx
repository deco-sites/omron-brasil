import AcademyCourseCard, {
  type AcademyCourseCardProps,
} from "$store/components/blog/AcademyCourseCard.tsx";

export interface AcademyCoursesProps {
  title: string;
  description?: string;
  courses: AcademyCourseCardProps[] | null;
}

export default function AcademyCoursesSection(
  { title, description, courses }: AcademyCoursesProps,
) {
  return (
    <div class="grid lg:grid-cols-[300px_1fr] gap-y-12 lg:gap-y-0 gap-x-8 w-full h-full items-center justify-center lg:items-start text-start py-20 px-6 md:px-12">
      <div class="flex flex-col text-center lg:text-start items-center lg:items-start justify-between gap-10 lg:gap-0 h-full w-full">
        <div class="flex flex-col gap-8">
          <h1 class="font-bold leading-[36px] text-2xl md:text-3xl">
            {title}
          </h1>
          <p>{description}</p>
        </div>

        <button className="hidden lg:flex border-black bg-transparent text-black hover:bg-white btn rounded-xl w-full md:max-w-[120px]">
          View all courses
        </button>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 w-full gap-8 items-center justify-center">
        {courses?.map((course) => <AcademyCourseCard {...course} />)}
      </div>

      <button className="flex lg:hidden border-black bg-transparent text-black hover:bg-white btn rounded-xl w-full">
        View all courses
      </button>
    </div>
  );
}
