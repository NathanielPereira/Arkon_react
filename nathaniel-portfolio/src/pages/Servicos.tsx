const AZUL_ESCURO = "#0B2341";

export default function Servicos() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16 md:py-24 bg-transparent">
      <img src="/Arkon logo e nome.png" alt="Logo da Empresa" className="mb-8" style={{ maxWidth: 180, height: 'auto' }} />
      <h1 className="text-3xl md:text-4xl font-extrabold mb-10 text-azulFuturo" style={{ letterSpacing: 0.5 }}>Serviços</h1>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-10 mt-2">
        <div className="bg-white/70 rounded-2xl shadow-xl border border-azulClaro/40 p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <svg width="48" height="48" fill="none" stroke="#1A73E8" strokeWidth="2.5" viewBox="0 0 24 24" className="mb-4 drop-shadow-md"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/></svg>
          <h3 className="text-lg font-bold mb-2 text-azulFuturo">Sites Profissionais</h3>
          <p className="text-base" style={{ color: AZUL_ESCURO }}>Desenvolvemos sites institucionais, landing pages e portais que traduzem a essência da sua marca, com design moderno, performance e foco em conversão.</p>
        </div>
        <div className="bg-white/70 rounded-2xl shadow-xl border border-azulClaro/40 p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <svg width="48" height="48" fill="none" stroke="#00C9A7" strokeWidth="2.5" viewBox="0 0 24 24" className="mb-4 drop-shadow-md"><rect x="2" y="6" width="20" height="12" rx="3"/><path d="M6 18v2"/><path d="M18 18v2"/></svg>
          <h3 className="text-lg font-bold mb-2 text-ciano">Sistemas Web & Mobile</h3>
          <p className="text-base" style={{ color: AZUL_ESCURO }}>Criamos sistemas sob medida e aplicativos inovadores, integrando tecnologia, usabilidade e segurança para transformar processos e potencializar resultados.</p>
        </div>
        <div className="bg-white/70 rounded-2xl shadow-xl border border-azulClaro/40 p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <svg width="48" height="48" fill="none" stroke="#2563EB" strokeWidth="2.5" viewBox="0 0 24 24" className="mb-4 drop-shadow-md"><path d="M6 6h15l-1.5 9h-13z"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>
          <h3 className="text-lg font-bold mb-2 text-azulRoyal">Consultoria Digital</h3>
          <p className="text-base" style={{ color: AZUL_ESCURO }}>Apoiamos sua empresa em toda a jornada digital, com consultoria estratégica, UX/UI e transformação digital para impulsionar o crescimento sustentável.</p>
        </div>
      </div>
    </section>
  );
} 