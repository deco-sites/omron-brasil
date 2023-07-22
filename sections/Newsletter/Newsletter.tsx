import Header from "$store/components/ui/SectionHeader.tsx";
import Icon from "$store/components/ui/Icon.tsx";

export interface Form {
  placeholder?: string;
  buttonText?: string;
  /** @format html */
  helpText?: string;
}

export interface Props {
  title?: string;
  /** @format textarea */
  description?: string;
  form?: Form;
  layout?: {
    headerFontSize?: "Large" | "Normal";
    headerWidth?: "3xl" | "full";
    content?: {
      border?: boolean;
      alignment?: "Center" | "Left" | "Side to side";
      bgColor?: "Normal" | "Reverse";
    };
  };
}

const DEFAULT_PROPS: Props = {
  title: "",
  description: "",
  form: {
    placeholder: "Digite seu email",
    buttonText: "Inscrever",
    helpText:
      'Ao se inscrever, você concorda com nossa <a class="link" href="/politica-de-privacidade">Política de privacidade</a>.',
  },
  layout: {
    headerFontSize: "Large",
    headerWidth: "full",
    content: {
      border: false,
      alignment: "Center",
    },
  },
};

export default function Newsletter(props: Props) {
  const { title, description, form, layout } = { ...DEFAULT_PROPS, ...props };
  const isReverse = layout?.content?.bgColor === "Reverse";
  const bordered = Boolean(layout?.content?.border);

  const headerLayout = (
    <Header
      title={title}
      description={description}
      alignment={layout?.content?.alignment === "Left" ? "left" : "center"}
      colorReverse={!isReverse}
      fontSize={layout?.headerFontSize}
      width={layout?.headerWidth}
    />
  );

  const formLayout = form && (
    <form
      action="/"
      class="flex flex-col md:flex-row items-center justify-between gap-6 w-full rounded-xl"
    >
      <div class="flex flex-row items-center justify-between px-3 py-1 rounded-xl w-full bg-white">
        <input
          class="w-full placeholder:text-black text-black focus:outline-none"
          type="text"
          placeholder={form.placeholder}
        />

        <button
          class="button p-3 rounded-xl text-white bg-blue-middle"
          aria-label="Subscribe button to newsletter"
          title="Subscribe to newsletter"
          type="submit"
        >
          {form.buttonText}
          <Icon
            id="ChevronRight"
            width={18}
            height={18}
            strokeWidth={0.01}
            fill="currentColor"
          />
        </button>
      </div>

      <div class="flex flex-row items-center justify-center gap-4 text-white">
        <input
          type="checkbox"
          aria-label="Checkbox"
          alt="checkbox"
          checked={false}
          class="checkbox border-white"
        />
        <p>
          By subscribing to the newsletter, I agree to the OMRON's Terms and
          Conditions and Privacy Policy, and understand that I may unsubscribe
          from the newsletter at any time.
        </p>
      </div>

      {form.helpText && (
        <div
          class="text-sm"
          dangerouslySetInnerHTML={{ __html: form.helpText }}
        />
      )}
    </form>
  );

  const bgLayout = isReverse
    ? "bg-secondary text-secondary-content"
    : "bg-dark-blue";

  return (
    <div
      class={`${
        bordered
          ? isReverse ? "bg-secondary-content" : "bg-secondary"
          : bgLayout
      } ${bordered ? "p-4 lg:p-16" : "p-0"}`}
    >
      {(!layout?.content?.alignment ||
        layout?.content?.alignment === "Center") && (
        <div
          class={`container flex flex-col rounded p-8 pt-16 gap-6 lg:p-28 lg:gap-12 ${bgLayout}`}
        >
          {headerLayout}
          <div class="flex justify-center w-full">
            {formLayout}
          </div>
        </div>
      )}
      {layout?.content?.alignment === "Left" && (
        <div
          class={`container flex flex-col rounded p-8 pt-16 gap-6 lg:p-32 lg:gap-12 ${bgLayout}`}
        >
          {headerLayout}
          <div class="flex justify-start w-full">
            {formLayout}
          </div>
        </div>
      )}
      {layout?.content?.alignment === "Side to side" && (
        <div
          class={`container flex flex-col rounded justify-between lg:flex-row p-8 pt-16 gap-6 lg:p-28 lg:gap-12 ${bgLayout}`}
        >
          {headerLayout}
          <div class="flex justify-center w-full">
            {formLayout}
          </div>
        </div>
      )}
    </div>
  );
}
