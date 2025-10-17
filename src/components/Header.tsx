import { Button } from "./ui/button";

export function Header() {
  const scrollToCTA = () => {
    const element = document.getElementById('cta-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#64FFDA] rounded-sm"></div>
          <span className="text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.25rem', fontWeight: 800 }}>
            Tattoo Portfolio
          </span>
        </div>
        <Button 
          onClick={scrollToCTA}
          className="bg-[#64FFDA] hover:bg-[#52E5C8] text-[#121212]"
          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
        >
          Garantir meu Site
        </Button>
      </div>
    </header>
  );
}
