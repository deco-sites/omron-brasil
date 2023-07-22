import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface Props {
  benefits?: Array<{
    label?: string;
    icon: AvailableIcons;
    subIcon: AvailableIcons;
    description: string;
  }>;
  layout?: {
    variation?: "Simple" | "Color reverse";
    headerAlignment?: "center" | "left";
    color?: "white" | "pigeon-blue";
  };
}

export default function Benefits(
  props: Props,
) {
  const {
    benefits = [{
      icon: "Truck",
      subIcon: "Plus",
      label: "Entrega em todo Brasil",
      description: "Consulte o prazo no fechamento da compra.",
    }, {
      icon: "Discount",
      subIcon: "Plus",
      label: "15% na primeira compra",
      description: "Aplicado direto na sacola de compras.",
    }, {
      icon: "ArrowsPointingOut",
      subIcon: "Plus",
      label: "Devolução grátis",
      description: "Veja as condições para devolver seu produto.",
    }],
    layout,
  } = props;

  const listOfBenefits = benefits.map((benefit, index) => {
    const showDivider = index < benefits.length - 1;
    const reverse = layout?.variation === "Color reverse";
    const benefitLayout = !layout?.variation || layout?.variation === "Simple"
      ? "tiled"
      : "piledup";

    return (
      <div
        class={`${
          reverse ? "bg-primary text-primary-content p-4 lg:px-8 lg:py-4" : ""
        } flex flex-row lg:flex-col items-start lg:items-center justify-between lg:justify-center gap-4 ${
          benefitLayout == "piledup" ? "flex-col items-center text-center" : ""
        } ${
          showDivider && benefitLayout !== "piledup"
            ? `border-b ${
              layout?.color === "pigeon-blue" ? "border-white" : "border-black"
            }`
            : ""
        } ${showDivider ? "pb-4 lg:pr-8 lg:border-r lg:border-b-0" : ""} ${
          showDivider && !reverse ? "lg:pb-0" : ""
        }`}
      >
        <div class="flex-none">
          <Icon
            id={benefit.icon}
            width={36}
            height={36}
            strokeWidth={0.01}
            fill="currentColor"
          />
        </div>
        <div class="flex-auto flex flex-col gap-1 lg:gap-2">
          <div class="text-base lg:text-xl leading-7">
            {benefit.label}
          </div>
          <p
            class={`text-sm leading-5 ${
              benefitLayout == "piledup" ? "hidden lg:block" : ""
            }`}
          >
            {benefit.description}
          </p>
        </div>
        <div class="flex-none lg:hidden">
          <Icon
            id={benefit.subIcon}
            width={24}
            height={24}
            strokeWidth={2}
            fill="currentColor"
          />
        </div>
      </div>
    );
  });

  return (
    <>
      {!layout?.variation || layout?.variation === "Simple"
        ? (
          <div
            class={`${
              layout?.color === "pigeon-blue"
                ? "bg-pigeon-blue text-white"
                : "bg-white"
            } w-full px-4 py-8 flex flex-col gap-8 lg:gap-10 lg:py-10 lg:px-0`}
          >
            <div class="w-full flex justify-center">
              <div class="flex flex-col gap-4 lg:gap-8 w-full lg:grid grid-flow-col auto-cols-fr">
                {listOfBenefits}
              </div>
            </div>
          </div>
        )
        : ""}
      {layout?.variation === "Color reverse" && (
        <div class="w-full container flex flex-col px-4 py-8 gap-8 lg:gap-10 lg:py-10 lg:px-0">
          <div class="w-full flex justify-center">
            <div class="grid grid-cols-2 gap-4 w-full lg:gap-8 lg:grid-flow-col lg:auto-cols-fr">
              {listOfBenefits}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
