// src/pages/PaginaPrincipal.tsx

import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { ProblemSolution } from "../components/ProblemSolution";
import { Features } from "../components/Features";
import { Demo } from "../components/Demo";
import { FAQ } from "../components/FAQ";
import { CTAFinal } from "../components/CTAFinal";
import { Footer } from "../components/Footer";

const PaginaPrincipal = () => {
  return (
    // Usamos um Fragment <> para agrupar os componentes
    <>
      <Hero />
      <ProblemSolution />
      <Features />
      <Demo />
      <FAQ />
      <CTAFinal />
      <Footer />
    </>
  );
};

export default PaginaPrincipal;