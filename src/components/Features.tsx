import { Smartphone, Image, MessageCircle, MonitorSmartphone, Server, Search } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: MonitorSmartphone,
      title: "Site de Página Única Moderno",
      description: "Design profissional e atrativo"
    },
    {
      icon: Image,
      title: "Galeria de Trabalhos Ilimitada",
      description: "Mostre todo seu portfólio"
    },
    {
      icon: MessageCircle,
      title: "Botão Direto para WhatsApp",
      description: "Clientes entram em contato facilmente"
    },
    {
      icon: Smartphone,
      title: "100% Responsivo",
      description: "Perfeito em qualquer dispositivo"
    },
    {
      icon: Server,
      title: "Hospedagem Inclusa por 1 Ano",
      description: "Sem custos extras no primeiro ano"
    },
    {
      icon: Search,
      title: "Otimização Básica para Google",
      description: "SEO para ser encontrado online"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 
            className="text-white mb-4"
            style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 400 }}
          >
            Tudo o que Você Precisa por Apenas R$ 150
          </h2>
          <div className="w-24 h-1 bg-[#64FFDA] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6 hover:border-[#64FFDA]/50 transition-all duration-300 group"
              >
                <div className="mb-4 bg-[#64FFDA]/10 w-14 h-14 rounded-lg flex items-center justify-center group-hover:bg-[#64FFDA]/20 transition-colors">
                  <Icon className="w-7 h-7 text-[#64FFDA]" />
                </div>
                <h3 
                  className="text-white mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.125rem', fontWeight: 700 }}
                >
                  {feature.title}
                </h3>
                <p className="text-[#E2E8F0] opacity-75" style={{ fontSize: '0.9375rem' }}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
