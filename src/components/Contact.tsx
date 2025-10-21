import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import axios from "axios";
import { error } from "console";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async () => {
    try {
      const data = {
        service_id: "service_75wgnqj",
        template_id: "template_ak8sovh",
        user_id: "LLKYnCdhhNEwuPKa7",
        template_params: {
          user_name: formData.name,
          email: formData.email
        }
      };

      console.log("Enviando dados para EmailJS:", data);

      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      console.log("Sucesso:", response.data);
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const docRef = await addDoc(collection(db, "respostas"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: serverTimestamp(), 
        answerStatus: "pendente", 
      });

      console.log("Resposta salva com ID:", docRef.id);

      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });

      await sendEmail();

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erro ao salvar resposta:", error);
      toast({
        title: "Erro ao enviar a mensagem",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "arentech.contato@gmail.com",
      link: "mailto:arentech.contato@gmail.com",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 96639-6828",
      link: "tel:+5511966396828",
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "São Paulo, Brasil",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold">Fale Conosco</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pronto para transformar seu negócio? Entre em contato!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-card border-2 border-border hover:border-primary/50 transition-smooth shadow-soft"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-2xl gradient-primary text-white shadow-strong">
              <h3 className="text-2xl font-bold mb-4">
                Pronto para começar seu projeto?
              </h3>
              <p className="text-white/90 leading-relaxed">
                Nossa equipe está pronta para entender suas necessidades e
                criar soluções personalizadas que farão seu negócio crescer no
                digital.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-8 rounded-2xl bg-card border-2 border-border shadow-medium"
            >
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Conte-nos sobre seu projeto..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gradient-primary h-12 text-lg shadow-medium hover:shadow-strong transition-smooth group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
