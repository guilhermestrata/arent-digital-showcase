import logo from "@/assets/arentech-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Termos de Uso", href: "#" },
    { name: "Política de Privacidade", href: "#" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Logo and Slogan */}
          <div className="space-y-4">
            <img src={logo} alt="Arentech Logo" className="h-12 w-auto" />
            <p className="text-muted-foreground max-w-md">
              Transformando negócios através da tecnologia. Soluções digitais
              inovadoras e acessíveis para empresas de todos os tamanhos.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:items-end space-y-4">
            <div className="flex flex-wrap gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>
            © {currentYear} Arentech - Digital Solution. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
