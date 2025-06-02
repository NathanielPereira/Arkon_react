const AZUL_ESCURO = "#0B2341";

export default function Servicos() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-start px-4 pt-16 md:pt-20 pb-12 md:pb-16 bg-transparent">
      <img src="/Arkon logo e nome.png" alt="Logo da Empresa" className="mb-8" style={{ maxWidth: 180, height: 'auto' }} />
      <div className="max-w-2xl w-full text-center mb-8">
        <h1 className="text-lg md:text-xl font-medium mb-4 text-azulFuturo" style={{ letterSpacing: 0.2 }}>Serviços</h1>
      </div>
      <div className="w-full flex flex-col items-center">
        {/* Divisória que ocupa toda a tela */}
        <div className="w-full">
          <div className="w-full h-[1.5px] bg-gray-200 my-12" />
        </div>
        
        {/* Container para as caixas - agora ocupa toda a largura */}
        <div className="w-full flex flex-col items-center px-4 md:px-8">
          <div 
            className="w-full bg-white/70 rounded-2xl shadow-xl border border-azulClaro/40 p-8 flex flex-col items-center transition-all duration-500 hover:shadow-2xl hover:bg-white/90 hover:-translate-y-3 hover:scale-105 mb-8 group cursor-pointer"
            style={{ 
              willChange: 'transform, box-shadow',
              transformOrigin: 'center'
            }}
          >
            <svg width="48" height="48" fill="none" stroke="#1A73E8" strokeWidth="2.5" viewBox="0 0 24 24" className="mb-6 mt-4 drop-shadow-md transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/></svg>
            <h3 className="text-lg font-bold mb-2 text-azulFuturo transition-all duration-300 group-hover:text-azulRoyal text-center">Sites Profissionais</h3>
            <p className="text-base text-center transition-all duration-300 group-hover:text-azulFuturo max-w-2xl mx-auto" style={{ color: AZUL_ESCURO }}>Desenvolvemos sites institucionais, landing pages e portais que traduzem a essência da sua marca, com design moderno, performance e foco em conversão.</p>
          </div>
        </div>
        
        <div className="w-full">
          <div className="w-full h-[1.5px] bg-gray-200 my-12" />
        </div>
        
        <div className="w-full flex flex-col items-center px-4 md:px-8">
          <div 
            className="w-full bg-white/70 rounded-2xl shadow-xl border border-azulClaro/40 p-8 flex flex-col items-center transition-all duration-500 hover:shadow-2xl hover:bg-white/90 hover:-translate-y-3 hover:scale-105 mb-8 group cursor-pointer"
            style={{ 
              willChange: 'transform, box-shadow',
              transformOrigin: 'center'
            }}
          >
            <svg width="48" height="48" fill="none" stroke="#00C9A7" strokeWidth="2.5" viewBox="0 0 24 24" className="mb-6 mt-4 drop-shadow-md transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"><rect x="2" y="6" width="20" height="12" rx="3"/><path d="M6 18v2"/><path d="M18 18v2"/></svg>
            <h3 className="text-lg font-bold mb-2 text-ciano transition-all duration-300 group-hover:text-azulFuturo text-center">Sistemas Web & Mobile</h3>
            <p className="text-base text-center transition-all duration-300 group-hover:text-azulFuturo max-w-2xl mx-auto" style={{ color: AZUL_ESCURO }}>Criamos sistemas sob medida e aplicativos inovadores, integrando tecnologia, usabilidade e segurança para transformar processos e potencializar resultados.</p>
          </div>
        </div>
        
        <div className="w-full">
          <div className="w-full h-[1.5px] bg-gray-200 my-12" />
        </div>
        
        <div className="w-full flex flex-col items-center px-4 md:px-8">
          <div 
            className="w-full bg-white/70 rounded-2xl shadow-xl border border-azulClaro/40 p-8 flex flex-col items-center transition-all duration-500 hover:shadow-2xl hover:bg-white/90 hover:-translate-y-3 hover:scale-105 mb-8 group cursor-pointer"
            style={{ 
              willChange: 'transform, box-shadow',
              transformOrigin: 'center'
            }}
          >
            <svg width="48" height="48" fill="none" stroke="#2563EB" strokeWidth="2.5" viewBox="0 0 24 24" className="mb-6 mt-4 drop-shadow-md transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"><path d="M6 6h15l-1.5 9h-13z"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>
            <h3 className="text-lg font-bold mb-2 text-azulRoyal transition-all duration-300 group-hover:text-ciano text-center">Consultoria Digital</h3>
            <p className="text-base text-center transition-all duration-300 group-hover:text-azulFuturo max-w-2xl mx-auto" style={{ color: AZUL_ESCURO }}>Apoiamos sua empresa em toda a jornada digital, com consultoria estratégica, UX/UI e transformação digital para impulsionar o crescimento sustentável.</p>
          </div>
        </div>
        
        <div className="w-full">
          <div className="w-full h-[1.5px] bg-gray-200 my-12" />
        </div>
      </div>
    </section>
  );
} 