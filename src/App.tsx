import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProblemSolution } from "./components/ProblemSolution";
import { Features } from "./components/Features";
import { Demo } from "./components/Demo";
import { FAQ } from "./components/FAQ";
import { CTAFinal } from "./components/CTAFinal";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#121212]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Hero />
      <ProblemSolution />
      <Features />
      <Demo />
      <FAQ />
      <CTAFinal />
      <Footer />
    </div>
  );
}
