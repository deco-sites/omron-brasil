interface Props {
  title?: string;
  fontSize?: "Normal" | "Large";
  width?: "3xl" | "full";
  description?: string;
  alignment: "center" | "left" | "responsive";
  colorReverse?: boolean;
}

function Header(props: Props) {
  return (
    <>
      {props.title || props.description
        ? (
          <div
            class={`flex flex-col gap-2 ${
              props.alignment === "left" && "text-left items-start" ||
              props.alignment === "center" && "text-center items-center" ||
              props.alignment === "responsive" &&
                "items-center justify-center lg:items-start lg:text-start"
            }`}
          >
            {props.title &&
              (
                <h1
                  class={`text-2xl leading-8 lg:leading-10
                  ${props.colorReverse ? "text-white" : "text-black"}
                  ${
                    props.fontSize === "Normal"
                      ? "lg:text-3xl"
                      : "leading-tight text-4xl"
                  }
                `}
                >
                  {props.title}
                </h1>
              )}
            {props.description &&
              (
                <h2
                  class={`
                  leading-6 lg:leading-8
                  ${props.colorReverse ? "text-primary-content" : "text-black"}
                  ${props.width === "full" ? "w-full" : "3xl"}
                  ${props.fontSize === "Normal" ? "lg:text-lg" : "lg:text-2xl"}
                `}
                >
                  {props.description}
                </h2>
              )}
          </div>
        )
        : null}
    </>
  );
}

export default Header;
