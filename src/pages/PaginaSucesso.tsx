import { CheckCircle2, Mail, Calendar, FileText, MessageCircle, ArrowRight, Sparkles } from "lucide-react";

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-[#121212]" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <header className="border-b border-white/10 py-4 px-4">
        <div className="container mx-auto flex items-center gap-2">
          
          <span className="text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.25rem', fontWeight: 800 }}>
            Tattoo Portfolio
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Success Icon and Message */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-6 relative">
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-[#64FFDA]/30 blur-3xl animate-pulse"></div>
              <div className="relative bg-[#64FFDA]/10 p-6 rounded-full border-2 border-[#64FFDA]">
                <CheckCircle2 className="w-20 h-20 text-[#64FFDA]" strokeWidth={2.5} />
              </div>
            </div>

            <h1 
              className="text-white mb-4"
              style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 400 }}
            >
              Pagamento Aprovado! 🎉
            </h1>
            
            <p className="text-[#E2E8F0] opacity-90 max-w-2xl mx-auto mb-6" style={{ fontSize: '1.25rem' }}>
              Parabéns! Seu pedido foi confirmado com sucesso. Em breve você terá um portfólio profissional para impulsionar seu negócio.
            </p>

            <div className="inline-flex items-center gap-2 bg-[#64FFDA]/10 border border-[#64FFDA]/30 rounded-full px-6 py-3">
              <Sparkles className="w-5 h-5 text-[#64FFDA]" />
              <span className="text-[#64FFDA]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                Bem-vindo à R&B Digital
              </span>
            </div>
          </div>

          {/* Order Details */}
          <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-8 mb-8">
            <h2 
              className="text-white mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.5rem', fontWeight: 700 }}
            >
              Detalhes do Pedido
            </h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="text-[#E2E8F0] opacity-75">Produto</span>
                <span className="text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                  Site Profissional para Tatuadores
                </span>
              </div>
              
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="text-[#E2E8F0] opacity-75">Valor Pago</span>
                <span className="text-[#64FFDA]" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.5rem', fontWeight: 800 }}>
                  R$ 150,00
                </span>
              </div>
              
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="text-[#E2E8F0] opacity-75">Forma de Pagamento</span>
                <span className="text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                  Mercado Pago
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-[#E2E8F0] opacity-75">Status</span>
                <span className="inline-flex items-center gap-2 bg-green-500/10 text-green-500 px-4 py-2 rounded-full" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.875rem' }}>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  APROVADO
                </span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-br from-[#64FFDA]/10 to-transparent border border-[#64FFDA]/30 rounded-lg p-8 mb-8">
            <h2 
              className="text-white mb-6 flex items-center gap-3"
              style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.5rem', fontWeight: 700 }}
            >
              <ArrowRight className="w-6 h-6 text-[#64FFDA]" />
              Próximos Passos
            </h2>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#64FFDA] rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#121212]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.125rem' }}>
                    1. Verifique seu E-mail
                  </h3>
                  <p className="text-[#E2E8F0] opacity-90">
                    Enviamos um e-mail de confirmação com todas as instruções e um link para você enviar suas fotos e informações. Verifique também a caixa de spam.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#64FFDA] rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-[#121212]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.125rem' }}>
                    2. Envie seu Material
                  </h3>
                  <p className="text-[#E2E8F0] opacity-90 mb-3">
                    Preencha o formulário que enviamos por e-mail com:
                  </p>
                  <ul className="space-y-2 text-[#E2E8F0] opacity-90">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#64FFDA] rounded-full"></div>
                      Fotos dos seus trabalhos (mínimo 6, máximo 30)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#64FFDA] rounded-full"></div>
                      Logo do estúdio (se tiver)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#64FFDA] rounded-full"></div>
                      Informações de contato (WhatsApp, Instagram, endereço)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#64FFDA] rounded-full"></div>
                      Texto de apresentação (opcional, podemos criar para você)
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#64FFDA] rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-[#121212]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.125rem' }}>
                    3. Aguarde a Entrega
                  </h3>
                  <p className="text-[#E2E8F0] opacity-90">
                    Após o envio do material completo, seu site ficará pronto em até <span className="text-[#64FFDA]" style={{ fontWeight: 700 }}>7 dias úteis</span>. Você receberá atualizações durante todo o processo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6 hover:border-[#64FFDA]/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-[#64FFDA]/10 p-3 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-[#64FFDA]" />
                </div>
                <div>
                  <h3 className="text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                    Dúvidas?
                  </h3>
                  <p className="text-[#E2E8F0] opacity-75 mb-3" style={{ fontSize: '0.9375rem' }}>
                    Nossa equipe está pronta para ajudar
                  </p>
                  <a 
                    href="https://w.app/rebdigitalsolucoes" 
                    className="inline-flex items-center gap-2 text-[#64FFDA] hover:underline"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.9375rem' }}
                  >
                    Falar no WhatsApp
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6 hover:border-[#64FFDA]/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-[#64FFDA]/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-[#64FFDA]" />
                </div>
                <div>
                  <h3 className="text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                    Suporte por E-mail
                  </h3>
                  <p className="text-[#E2E8F0] opacity-75 mb-3" style={{ fontSize: '0.9375rem' }}>
                    Respondemos em até 24h
                  </p>
                  <a 
                    href="mailto:suporte@rbdigital.com" 
                    className="inline-flex items-center gap-2 text-[#64FFDA] hover:underline"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.9375rem' }}
                  >
                    contato@rebdigitalsolucoes.com.br
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Important Info Box */}
          <div className="bg-[#64FFDA]/5 border-l-4 border-[#64FFDA] rounded-lg p-6">
            <div className="flex gap-3">
              <Sparkles className="w-5 h-5 text-[#64FFDA] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                  Importante!
                </h3>
                <p className="text-[#E2E8F0] opacity-90" style={{ fontSize: '0.9375rem' }}>
                  Quanto mais rápido você enviar o material, mais rápido seu site ficará pronto. Prepare fotos de alta qualidade dos seus melhores trabalhos para causar a melhor impressão nos seus futuros clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      
    </div>
  );
}
