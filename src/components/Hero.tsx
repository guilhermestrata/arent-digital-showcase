import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, UserPlus } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Seu negócio no{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  digital
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl">
                Transforme sua empresa com soluções inovadoras e acessíveis.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="gradient-primary text-lg h-14 px-8 shadow-medium hover:shadow-strong transition-smooth group"
                asChild
              >
                <a href="#contact">
                  <Briefcase className="mr-2 h-5 w-5" />
                  Seja Cliente
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-lg h-14 px-8 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                asChild
              >
                <a href="#contact">
                  <UserPlus className="mr-2 h-5 w-5" />
                  Quero me candidatar
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Projetos</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-bold text-primary">24h</div>
                <div className="text-sm text-muted-foreground">Suporte</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative lg:h-[600px] animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-card rounded-3xl shadow-strong p-8 border border-border overflow-hidden">
              <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 animate-scale-in"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="h-full w-full flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full gradient-primary opacity-50"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
