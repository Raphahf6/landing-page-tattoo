import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Demo() {
  return (
    <section className="py-20 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 
            className="text-white mb-4"
            style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 400 }}
          >
            Veja o Site em Ação
          </h2>
          <p className="text-[#E2E8F0] opacity-90 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Navegue pelo modelo de demonstração e sinta a qualidade do seu futuro portfólio online
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative group">
            {/* Mockup Image */}
            <div className="relative z-10 rounded-lg overflow-hidden border-2 border-white/10 group-hover:border-[#64FFDA]/50 transition-all duration-300">
              <ImageWithFallback 
                src="/mock-demo.png"
                alt="Demonstração do site para tatuadores"
                className="w-full h-auto"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent flex items-end justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <a
                href="https://demo-site-tattoo.rebdigitalsolucoes.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  className="bg-[#64FFDA] hover:bg-[#52E5C8] text-[#121212]"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver Demonstração ao Vivo
                </Button>
                </a>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-[#64FFDA]/10 blur-3xl -z-10 group-hover:bg-[#64FFDA]/20 transition-all duration-300"></div>
          </div>

          <div className="text-center mt-8">
             <a
                href="https://demo-site-tattoo.rebdigitalsolucoes.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
            <Button 
              variant="outline"
              className="border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA] hover:text-[#121212]"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
            >
              
              <ExternalLink className="w-4 h-4 mr-2" />
              VER DEMONSTRAÇÃO AO VIVO
            </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
