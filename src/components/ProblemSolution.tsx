import { X, Check } from "lucide-react";

export function ProblemSolution() {
  const problems = [
    "Clientes perdidos no feed",
    "Dificuldade para agendar",
    "Aparência amadora",
    "Concorrência forte"
  ];

  const solutions = [
    "Portfólio organizado e impactante",
    "Agendamento direto no WhatsApp",
    "Credibilidade máxima",
    "Destaque-se no mercado"
  ];

  return (
    <section className="py-20 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Problem Column */}
          <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">😥</span>
              <h2 
                className="text-white"
                style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '2rem', fontWeight: 400 }}
              >
                O CAOS ATUAL
              </h2>
            </div>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 bg-red-500/20 rounded-full p-1">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <p className="text-[#E2E8F0] opacity-90">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Column */}
          <div className="bg-gradient-to-br from-[#64FFDA]/10 to-transparent border border-[#64FFDA]/30 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">✨</span>
              <h2 
                className="text-white"
                style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '2rem', fontWeight: 400 }}
              >
                SEU FUTURO PROFISSIONAL
              </h2>
            </div>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 bg-[#64FFDA]/20 rounded-full p-1">
                    <Check className="w-4 h-4 text-[#64FFDA]" />
                  </div>
                  <p className="text-[#E2E8F0]">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
