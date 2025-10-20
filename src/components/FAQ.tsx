import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Quais serviços a Arentech oferece?",
      answer:
        "Oferecemos desenvolvimento de sites e aplicações web, soluções de e-commerce, consultoria digital, otimização de SEO, manutenção e suporte técnico. Todas as nossas soluções são personalizadas para atender às necessidades específicas do seu negócio.",
    },
    {
      question: "Quanto tempo leva para desenvolver um projeto?",
      answer:
        "O prazo varia de acordo com a complexidade do projeto. Um site institucional pode ficar pronto em 2-3 semanas, enquanto projetos mais complexos podem levar de 1 a 3 meses. Sempre trabalhamos com cronogramas transparentes e entregas parciais.",
    },
    {
      question: "Vocês oferecem suporte após a entrega?",
      answer:
        "Sim! Oferecemos suporte técnico e manutenção contínua para todos os nossos clientes. Também disponibilizamos pacotes de suporte com diferentes níveis de atendimento, incluindo suporte 24h para casos críticos.",
    },
    {
      question: "Como funciona o processo de desenvolvimento?",
      answer:
        "Nosso processo é dividido em etapas claras: análise de requisitos, prototipagem, desenvolvimento, testes e entrega. Mantemos você informado em cada fase e realizamos reuniões regulares para garantir que tudo está alinhado com suas expectativas.",
    },
    {
      question: "Vocês trabalham com empresas de que porte?",
      answer:
        "Atendemos empresas de todos os portes, desde startups e pequenos negócios até médias e grandes empresas. Nosso foco é entregar soluções acessíveis e de qualidade, independente do tamanho da sua operação.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-fade-in">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-2 border-border rounded-2xl px-6 shadow-soft hover:shadow-medium transition-smooth"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-smooth py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
