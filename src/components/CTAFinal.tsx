import { Button } from "./ui/button";
import { Clock, TrendingUp } from "lucide-react";

export function CTAFinal() {
  return (
    <section id="cta-section" className="py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#121212]">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-br from-[#64FFDA]/10 to-transparent border-2 border-[#64FFDA]/50 rounded-2xl p-12 text-center relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, #64FFDA 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="relative z-10">
            <div className="flex justify-center gap-4 mb-6">
              <div className="bg-[#64FFDA]/20 p-3 rounded-full">
                <TrendingUp className="w-6 h-6 text-[#64FFDA]" />
              </div>
              <div className="bg-[#64FFDA]/20 p-3 rounded-full">
                <Clock className="w-6 h-6 text-[#64FFDA]" />
              </div>
            </div>

            <h2
              className="text-white mb-4"
              style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 400 }}
            >
              Sua chance de ter um portfólio profissional por um preço inacreditável
            </h2>

            <p className="text-[#E2E8F0] opacity-90 mb-8 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
              Esta oferta é por tempo limitado. Não deixe seu estúdio ficar para trás enquanto outros tatuadores já estão conquistando mais clientes online.
            </p>

            <div className="space-y-4">
              <a
                href="https://mpago.la/1rZJnhS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-[#64FFDA] hover:bg-[#52E5C8] text-[#121212] px-12 py-8 shadow-2xl shadow-[#64FFDA]/20"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.125rem', whiteSpace:'normal', wordwrap:'break-word', maxWidth:'100%'}}
                >
                  GARANTIR MEU SITE AGORA ✅
                </Button>
              </a>

              <div className="flex items-center justify-center gap-6 text-[#E2E8F0] opacity-75">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#64FFDA] rounded-full"></div>
                  <span style={{ fontSize: '0.875rem' }}>Pagamento Único</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#64FFDA] rounded-full"></div>
                  <span style={{ fontSize: '0.875rem' }}>Sem Mensalidades</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#64FFDA] rounded-full"></div>
                  <span style={{ fontSize: '0.875rem' }}>Pronto em 7 dias</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-[#9CA3AF] italic" style={{ fontSize: '0.875rem' }}>
                💳 Pagamento 100% seguro via Mercado Pago • Pix, Cartão ou Boleto
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
