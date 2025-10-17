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
                src="https://images.unsplash.com/photo-1735659494460-4ee03cb578ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMG1vY2t1cCUyMHNjcmVlbnxlbnwxfHx8fDE3NjA3MTY3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Demonstração do site para tatuadores"
                className="w-full h-auto"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent flex items-end justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button 
                  className="bg-[#64FFDA] hover:bg-[#52E5C8] text-[#121212]"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver Demonstração ao Vivo
                </Button>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-[#64FFDA]/10 blur-3xl -z-10 group-hover:bg-[#64FFDA]/20 transition-all duration-300"></div>
          </div>

          <div className="text-center mt-8">
            <Button 
              variant="outline"
              className="border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA] hover:text-[#121212]"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              VER DEMONSTRAÇÃO AO VIVO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
