import type { LoaderReturnType } from "$live/types.ts";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";

type FilterProps = Pick<ProductListingPage, "filters"> & {
  label: string;
};

import AdGallery from "$store/components/advertisement/AdGallery.tsx";

export interface Props {
  header?: {
    title: string;
    description: string;
  };
  page: LoaderReturnType<ProductListingPage | null>;
}

function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-10">
      <span>Not Found!</span>
    </div>
  );
}

function Filters({ filters, label }: FilterProps) {
  return (
    <div class="flex justify-center max-w-xs pb-6">
      <select className="select select-bordered items-center justify-center bg-omron-blue text-white w-full rounded-2xl">
        <option disabled selected>{label}</option>
        {filters.map((filter) => (
          <option key={filter.key}>{filter.label}</option>
        ))}
      </select>
    </div>
  );
}

const FILTERS_LABEL = [
  "Tipo de Equipamento",
  "Conexão",
  "Validação Clínica",
  "Tipo de manguito",
  "Todos os filtros",
];

function Result(
  { page, header }: Omit<Props, "page"> & { page: ProductListingPage },
) {
  const { products, filters, breadcrumb, pageInfo, sortOptions } = page;

  return (
    <section class="bg-white flex flex-col items-start justify-between py-36 px-12 gap-24">
      <div class="flex flex-col gap-8 w-full items-start">
        {header && (
          <div class="flex flex-col gap-2 w-full">
            <h1 class="text-4xl">{header.title}</h1>
            <span>{header.description}</span>
          </div>
        )}

        <div class="flex flex-wrap gap-3 w-full">
          {FILTERS_LABEL.map((item) => (
            <Filters
              label={item}
              filters={filters}
            />
          ))}
        </div>
      </div>

      <AdGallery products={products} />
    </section>
  );
}

export default function Advertisement({ page, ...props }: Props) {
  if (!page) {
    return <NotFound />;
  }

  return <Result {...props} page={page} />;
}
