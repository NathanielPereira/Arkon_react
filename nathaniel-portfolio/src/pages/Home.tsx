const AZUL_ESCURO = "#0B2341";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 md:py-16 bg-transparent">
      <img src="/Arkon logo e nome.png" alt="Logo da Empresa" className="mb-8" style={{ maxWidth: 180, height: 'auto' }} />
      <div className="max-w-2xl w-full text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: AZUL_ESCURO, letterSpacing: 0.5 }}>Tecnologia que Impulsiona o Seu Negócio</h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-azulFuturo" style={{ letterSpacing: 0.2 }}>Soluções digitais criativas para empresas que querem crescer de verdade.</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-center leading-relaxed text-[#2563EB]">
          Somos especialistas em criar experiências digitais que conectam marcas e pessoas, fortalecendo sua presença no mercado e gerando resultados reais.
        </p>
      </div>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-10 mt-2">
        <div className="bg-white/70 rounded-2xl shadow-xl border border-azulClaro/40 p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <svg width="48" height="48" fill="none" stroke="#1A73E8" strokeWidth="2.5" viewBox="0 0 24 24" className="mb-6 drop-shadow-md"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/></svg>
          <h3 className="text-lg font-bold mb-2 text-azulFuturo">Soluções Sob Medida</h3>
          <p className="text-base text-center" style={{ color: AZUL_ESCURO }}>Desenvolvimento de sistemas, apps e sites personalizados para o seu negócio.</p>
        </div>
        <div className="bg-white/70 rounded-2xl shadow-xl border border-azulClaro/40 p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <svg width="48" height="48" fill="none" stroke="#00C9A7" strokeWidth="2.5" viewBox="0 0 24 24" className="mb-6 drop-shadow-md"><rect x="2" y="6" width="20" height="12" rx="3"/><path d="M6 18v2"/><path d="M18 18v2"/></svg>
          <h3 className="text-lg font-bold mb-2 text-ciano">Atendimento Consultivo</h3>
          <p className="text-base" style={{ color: AZUL_ESCURO }}>Acompanhamento próximo, transparência e parceria em cada etapa do projeto.</p>
        </div>
        <div className="bg-white/70 rounded-2xl shadow-xl border border-azulClaro/40 p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <svg width="48" height="48" fill="none" stroke="#2563EB" strokeWidth="2.5" viewBox="0 0 24 24" className="mb-6 drop-shadow-md"><path d="M6 6h15l-1.5 9h-13z"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>
          <h3 className="text-lg font-bold mb-2 text-azulRoyal">Design & Performance</h3>
          <p className="text-base" style={{ color: AZUL_ESCURO }}>Visual moderno, navegação intuitiva e foco total em resultados para sua empresa.</p>
        </div>
      </div>
    </section>
  );
} 