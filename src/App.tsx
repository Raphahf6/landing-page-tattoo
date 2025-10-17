// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaPrincipal from './pages/PaginaPrincipal'; // Importa a página que acabamos de criar
import PaginaSucesso from './pages/PaginaSucesso';   // Importa a página de sucesso

export default function App() {
  return (
    <div className="min-h-screen bg-[#121212]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Router>
        <Routes>
          {/* Rota para a página inicial */}
          <Route path="/" element={<PaginaPrincipal />} />
          
          {/* Rota para a página de sucesso */}
          <Route path="/sucesso" element={<PaginaSucesso />} />
        </Routes>
      </Router>
    </div>
  );
}