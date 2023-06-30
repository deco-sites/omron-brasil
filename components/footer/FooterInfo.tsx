export interface FooterInfosItem {
  label: string;
  href: string;
}

export interface FooterInfosProps {
  content?: {
    items?: FooterInfosItem[];
    copyright?: string;
  };
}

export default function FooterInfo({ content }: FooterInfosProps) {
  return (
    <div class="flex flex-col md:flex-row md:justify-between gap-10 md:items-center pb-12">
      <ul class="flex flex-col md:flex-row gap-x-8 gap-y-4 md:gap-y-0">
        {content?.items?.map((item) => (
          <li>
            <a href={item.href} class="block link link-hover">{item.label}</a>
          </li>
        ))}
      </ul>

      <span>{content?.copyright}</span>
    </div>
  );
}
