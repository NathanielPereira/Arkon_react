import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import Servicos from './pages/Servicos';
import Contato from './pages/Contato';
import WhatsappFloatButton from './components/ui/WhatsappFloatButton';

const MENU_SECTIONS = [
  { path: "/", label: "Home" },
  { path: "/quem-somos", label: "Quem Somos" },
  { path: "/servicos", label: "Serviços" },
  { path: "/contato", label: "Contato" },
];

function BootstrapMenu() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  // Fecha o menu automaticamente quando a rota muda
  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  return (
    <Navbar 
      expand="md" 
      bg="white" 
      variant="light" 
      fixed="top" 
      className="shadow-sm py-1" 
      style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)', minHeight: 56 }}
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
    >
      <Container fluid className="px-3 md:px-5">
        <Navbar.Brand as={Link} to="/">
          <img src="/Arkon logo e nome.png" alt="Logo" style={{ maxWidth: 110, height: 'auto' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto gap-2 md:gap-4">
            {MENU_SECTIONS.map(s => (
              <Nav.Link
                as={Link}
                to={s.path}
                key={s.path}
                className={`fw-semibold px-3 rounded-pill transition-all ${location.pathname === s.path ? 'bg-primary text-white shadow-sm' : 'text-primary-emphasis hover:bg-primary-subtle'}`}
                style={{ fontSize: '1.05rem', letterSpacing: 0.5 }}
                onClick={() => setExpanded(false)}
              >
                {s.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function Layout() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[linear-gradient(135deg,_#EAF3FB_0%,_#B3D8F7_50%,_#2563EB1A_100%)]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <BootstrapMenu />
      <main className="flex-1 flex flex-col pt-[60px] md:pt-[68px]">
        <Outlet />
      </main>
      <WhatsappFloatButton />
      <footer className="w-full text-azulFuturo text-center py-6 mt-auto flex flex-col items-center gap-2" style={{ background: 'transparent' }}>
        <span className="text-sm">© {new Date().getFullYear()} Arkon Tecnologia. Todos os direitos reservados.</span>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quem-somos" element={<QuemSomos />} />
          <Route path="servicos" element={<Servicos />} />
          <Route path="contato" element={<Contato />} />
        </Route>
      </Routes>
    </Router>
  );
}

/* Tailwind CSS custom animation (adicione no seu CSS global se necessário)
@keyframes fadein {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: none; }
}
.animate-fadein {
  opacity: 1 !important;
  animation: fadein 1s cubic-bezier(0.4,0,0.2,1) both;
}
*/
