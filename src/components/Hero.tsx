import { Button } from "./ui/button";
import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToCTA = () => {
    const element = document.getElementById('cta-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#64FFDA]/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 
              className="text-white leading-tight"
              style={{ 
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                fontWeight: 400,
                lineHeight: 1.1
              }}
            >
              Sua Arte Merece Mais que o Instagram.
            </h1>
            <p className="text-[#E2E8F0] opacity-90" style={{ fontSize: '1.125rem', lineHeight: 1.6 }}>
              Transforme seu perfil em um portfólio profissional que atrai clientes sérios e fecha agendamentos.
            </p>
          </div>

          <div className="bg-[#64FFDA]/10 border-l-4 border-[#64FFDA] p-6 rounded-lg">
            <p className="text-[#9CA3AF] mb-2" style={{ fontSize: '0.875rem', letterSpacing: '0.05em' }}>
              OFERTA DE LANÇAMENTO
            </p>
            <p className="text-[#64FFDA]" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.875rem', fontWeight: 800 }}>
              Seu Site Profissional por apenas R$ 150
            </p>
          </div>

          <div className="space-y-4">
            <Button 
              onClick={scrollToCTA}
              size="lg"
              className="bg-[#64FFDA] hover:bg-[#52E5C8] text-[#121212] w-full lg:w-auto px-8 py-6"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.125rem' }}
            >
              EU QUERO MEU SITE AGORA 🚀
            </Button>

            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#64FFDA] text-[#64FFDA]" />
                ))}
              </div>
              <p className="text-[#E2E8F0] opacity-75" style={{ fontSize: '0.875rem' }}>
                Artistas como você já estão se profissionalizando
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Mockup */}
        <div className="relative">
          <div className="relative z-10">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1507737487170-feae809cb2ab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880"
              alt="Mockup de site profissional para tatuadores"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 bg-[#64FFDA]/20 blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}
