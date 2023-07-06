export interface Question {
  question: string;
  /** @format html */
  answer: string;
}

export interface Props {
  questions?: Question[];
}

const DEFAULT_PROPS = {
  questions: [
    {
      question: "Como faço para acompanhar o meu pedido?",
      answer:
        "Acompanhar o seu pedido é fácil! Assim que o seu pedido for enviado, enviaremos um e-mail de confirmação com um número de rastreamento. Basta clicar no número de rastreamento ou visitar o nosso site e inserir o número de rastreamento na seção designada para obter atualizações em tempo real sobre a localização e o status de entrega do seu pedido.",
    },
    {
      question: "Qual é a política de devolução?",
      answer:
        "Oferecemos uma política de devolução sem complicações. Se você não estiver completamente satisfeito(a) com a sua compra, pode devolver o item em até 30 dias após a entrega para obter um reembolso total ou troca. Certifique-se de que o item esteja sem uso, na embalagem original e acompanhado do recibo. Entre em contato com a nossa equipe de atendimento ao cliente e eles o(a) orientarão pelo processo de devolução.",
    },
  ],
};

function Question({ question, answer }: Question) {
  return (
    <details class="collapse collapse-arrow join-item border-y border-base-200">
      <summary class="collapse-title text-lg font-bold">
        {question}
      </summary>
      <div
        class="collapse-content"
        dangerouslySetInnerHTML={{ __html: answer }}
      />
    </details>
  );
}

export default function ProductSpecifications(props: Props) {
  const {
    questions = [],
  } = { ...DEFAULT_PROPS, ...props };

  return (
    <div class="w-full flex flex-col gap-4 lg:gap-8 py-10">
      <div class="join join-vertical w-full">
        {questions.map((question) => <Question {...question} />)}
      </div>
    </div>
  );
}
