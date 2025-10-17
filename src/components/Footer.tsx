import { Link } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
         <div>
            <a href="/" aria-label="Página Inicial da R&B Digital">
              {/* Usamos a tag <img> padrão do HTML */}
              <img
                src="/logo.png" // O caminho para a imagem na pasta 'public'
                alt="Logo R&B Digital"
                className="h-10 w-auto" // Controlamos o tamanho com classes do Tailwind
              />
            </a>
          </div>
          
          <p className="text-[#9CA3AF]" style={{ fontSize: '0.875rem' }}>
            © {new Date().getFullYear()} R&B Digital. Todos os direitos reservados.
          </p>

          <div className="flex gap-4 text-[#9CA3AF]" style={{ fontSize: '0.875rem' }}>
            <a href="#" className="hover:text-[#64FFDA] transition-colors">Termos de Uso</a>
            <span>•</span>
            <a href="#" className="hover:text-[#64FFDA] transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
