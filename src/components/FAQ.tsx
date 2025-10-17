import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "É pagamento único mesmo?",
      answer: "Sim! O valor de R$ 150 é único, sem mensalidades ou pegadinhas. Você paga uma vez e o site é seu."
    },
    {
      question: "Como funciona o pagamento?",
      answer: "O pagamento é 100% seguro via Mercado Pago. Você pode pagar com Pix, cartão de crédito ou boleto bancário."
    },
    {
      question: "Como envio minhas fotos e textos?",
      answer: "Após a confirmação do pagamento, nossa equipe entrará em contato rapidamente e você recebera instruções suporte e poderá enviar todo o seu material de forma organizada. É fácil e rápido!"
    },
    {
      question: "Em quanto tempo meu site fica pronto?",
      answer: "Após o envio do material completo, seu site profissional fica pronto em até 7 dias úteis. Você receberá atualizações durante todo o processo."
    },
    {
      question: "Posso fazer alterações depois?",
      answer: "Sim! Você pode solicitar ajustes e atualizações no conteúdo durante 30 dias após entrega do projeto do seu site sempre que precisar."
    },
    {
      question: "O site funciona bem no celular?",
      answer: "Com certeza! Todos os nossos sites são 100% responsivos, ou seja, funcionam perfeitamente em celulares, tablets e computadores."
    },
    {
      question: "Posso alterar o modelo com minha paleta de cores e estilo?",
      answer: "Sim! Personalizamos o site com suas cores, fontes e estilo para refletir a identidade do seu estúdio de tatuagem."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 
            className="text-white mb-4"
            style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 400 }}
          >
            Ainda tem dúvidas? A gente responde.
          </h2>
          <div className="w-24 h-1 bg-[#64FFDA] mx-auto"></div>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-[#1a1a1a] border border-white/10 rounded-lg px-6 data-[state=open]:border-[#64FFDA]/50"
            >
              <AccordionTrigger 
                className="text-white hover:text-[#64FFDA] hover:no-underline"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#E2E8F0] opacity-90 pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
