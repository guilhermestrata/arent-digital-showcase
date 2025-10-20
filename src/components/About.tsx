import { Target, Heart, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Nossa Missão",
      description:
        "Democratizar o acesso à tecnologia, oferecendo soluções digitais de alta qualidade para empresas de todos os tamanhos.",
    },
    {
      icon: Heart,
      title: "Nossos Valores",
      description:
        "Proximidade com o cliente, transparência nas entregas e compromisso com resultados que realmente fazem a diferença.",
    },
    {
      icon: Lightbulb,
      title: "Nossa Visão",
      description:
        "Ser referência em inovação digital, ajudando empresas a conquistarem seus objetivos através da tecnologia.",
    },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Sobre a{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Arentech
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos uma empresa de tecnologia focada em entregar valor digital
              para nossos clientes. Nossa abordagem combina inovação,
              agilidade e um profundo entendimento das necessidades do seu
              negócio.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Acreditamos que toda empresa, independente do tamanho, merece
              ter acesso às melhores soluções digitais. Por isso, trabalhamos
              com transparência, eficiência e sempre próximos aos nossos
              clientes.
            </p>
          </div>

          {/* Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-2xl bg-card border-2 border-border hover:border-primary/50 transition-smooth shadow-soft hover:shadow-medium animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
