import { Cpu, DollarSign, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Cpu,
      title: "Tecnologia",
      description:
        "Soluções digitais modernas e personalizadas para o seu negócio crescer no ambiente online.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: DollarSign,
      title: "Acessível",
      description:
        "Serviços que cabem no orçamento de qualquer empresa, sem comprometer a qualidade.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Zap,
      title: "Rápido",
      description:
        "Implementações ágeis e eficientes para você ver resultados no menor tempo possível.",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold">Nossos Serviços</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para transformar sua presença digital
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-medium transition-smooth cursor-pointer border-2 hover:border-primary/50 animate-fade-in-up bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 space-y-4">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-smooth shadow-soft`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-smooth">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
