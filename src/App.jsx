
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { MessageSquare, Computer, Lightbulb, ArrowRight, Linkedin, Mail, Phone } from "lucide-react";

function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: <Computer className="w-8 h-8" />,
      title: "Suporte Técnico",
      description: "Oferecemos manutenção preventiva e corretiva em computadores e sistemas, com atendimento ágil e personalizado, tanto presencial quanto remoto. Nosso objetivo é manter a operação da sua empresa funcionando com segurança, eficiência e sem interrupções."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Digitalização de Processos",
      description: "Analisamos os processos atuais da sua empresa e propomos soluções digitais sob medida para automatizar tarefas manuais, reduzir erros e aumentar a produtividade. Ajudamos a migrar planilhas, papéis e controles manuais para sistemas inteligentes e integrados."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Consultoria em Inovação Digital",
      description: "Orientamos empresas a crescerem com tecnologia, oferecendo planos estratégicos para modernizar a estrutura digital, adotar novas ferramentas e alinhar os recursos tecnológicos aos objetivos do negócio."
    }
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5541984196060", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <img 
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/4a58d6db-6b0e-4d19-acd1-91cddb8533f3/1d0cb30aa765b7a8faf5b54995f19492.png"
              alt="Anjos Tech Logo"
              className="h-12 w-auto"
            />
            <Button 
              variant="outline"
              onClick={handleWhatsAppClick}
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-primary to-purple-700 text-white">
        <div className="container mx-auto px-4 py-20">
          <motion.div {...fadeIn} className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Modernize, digitalize, evolua — conte com a gente para cada etapa.
            </h1>
            <p className="text-xl mb-8">
              Transformamos ideias e rotinas manuais em soluções digitais eficientes
            </p>
            <Button 
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-white text-primary hover:bg-gray-100"
            >
              Fale Conosco no WhatsApp
              <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Sobre a Anjos Tech</h2>
            <p className="text-lg text-gray-600 mb-8">
              Fundada por Allan Anjos, a Anjos Tech nasceu da paixão por transformar 
              desafios tecnológicos em oportunidades de crescimento. Nossa missão é 
              impulsionar o sucesso dos nossos clientes através da inovação digital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Entre em Contato</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-primary mr-4" />
                  <div>
                    <h3 className="font-semibold">WhatsApp</h3>
                    <p className="text-gray-600">(41) 98419-6060</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-primary mr-4" />
                  <div>
                    <h3 className="font-semibold">E-mail</h3>
                    <p className="text-gray-600">allanfelipedosanjos6@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Linkedin className="w-6 h-6 text-primary mr-4" />
                  <div>
                    <h3 className="font-semibold">LinkedIn</h3>
                    <a 
                      href="https://linkedin.com/in/allan-felipe-dos-anjos-a195b5186"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Allan Felipe dos Anjos
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-medium">
            "Seu negócio cresce quando seus sistemas funcionam. Conte com a Anjos Tech."
          </p>
          <div className="mt-4 text-sm opacity-80">
            © {new Date().getFullYear()} Anjos Tech. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}

export default App;
