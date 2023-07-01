import Tabs from "$store/islands/Tabs.tsx";

export interface TabsProps {
  label?: string;
  item: { 
    title?: string,
    description?: string;
    subitems: { label: string; }[];
  };
}

export interface Props {
  subtitle: string;
  title: string;
  description: string;
  tabs: TabsProps[];
  backgroundColor?: "Dark-Blue" | "Light-Gray";
}

export default function TabsSection({ subtitle, title, description, tabs, backgroundColor }: Props) {
  return (
    <section class="flex items-center justify-center w-full h-full min-h-[700px] bg-[#003153] text-white">
      <div class="grid md:grid-cols-2 py-16 md:max-w-[1080px] w-full h-full gap-x-24">
        <div class="flex flex-col gap-3 items-start justify-start w-full">
          <span class="font-bold text-sm">{subtitle}</span>
          <h1 class="text-4xl tracking-wide leading-tight">{title}</h1>
          <p>{description}</p>
        </div>

        <Tabs tabs={tabs} backgroundColor={backgroundColor} />
      </div>
    </section>
  )
}
