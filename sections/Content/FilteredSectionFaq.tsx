import FilteredFaq, { FaqsProps } from "$store/islands/FilteredSectionFaq.tsx";
import Icon from "$store/components/ui/Icon.tsx";

export interface SectionProps {
  title: string;
  label: string;
  buttonTitle: string;
}

export interface Props {
  title: string;
  faqs: FaqsProps[];
  section?: SectionProps;
}

function Section({ title, label, buttonTitle }: SectionProps) {
  return (
    <section class="flex items-center justify-center w-full h-full bg-dark-blue text-white px-8 py-12 lg:py-16 lg:px-16">
      <div class="flex flex-col lg:flex-row items-center justify-center md:justify-between w-full gap-4 lg:gap-8">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 w-full">
          <div class="flex flex-col gap-2">
            <p class="font-bold text-sm text-highlight-blue">{title}</p>
            <h1 class="text-2xl lg:text-3xl tracking-wider">{label}</h1>
          </div>

          {buttonTitle && (
            <button class="flex items-center justify-center gap-2 btn btn-outline border-white text-white hover:bg-white hover:text-black">
              <span>{buttonTitle}</span>
              <Icon
                id="ChevronRight"
                class="text-white"
                width={18}
                height={18}
                strokeWidth={0.01}
                fill="currentColor"
              />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default function FilteredSectionFaq({ title, faqs, section }: Props) {
  return (
    <section class="flex w-full h-full items-center justify-center bg-pale-gray text-black">
      <div class="flex flex-col items-center justify-center w-full xl:max-w-5xl px-6 py-16 md:py-32 md:px-0">
        <h1 class="text-3xl pb-16 text-center">{title}</h1>

        <FilteredFaq faqs={faqs} />

        <div class="flex items-center justify-center w-full px-0 md:pt-28 sm:px-24 xl:px-0">
          {section && (
            <Section
              title={section.title}
              label={section.label}
              buttonTitle={section.buttonTitle}
            />
          )}
        </div>
      </div>
    </section>
  );
}
