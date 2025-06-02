import "./QuemSomos.css";

const AZUL_ESCURO = "#0B2341";

export default function QuemSomos() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-start px-4 pt-16 md:pt-20 pb-12 md:pb-16 bg-transparent">
      <img src="/Arkon logo e nome.png" alt="Logo da Empresa" className="mb-8" style={{ maxWidth: 180, height: 'auto' }} />
      <div className="max-w-2xl w-full text-center mb-8">
        <h1 className="text-lg md:text-xl font-medium mb-4 text-azulFuturo leading-relaxed" style={{ letterSpacing: 0.2 }}>Quem Somos</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-center leading-relaxed text-[#2563EB]">
          Somos apaixonados por inovação e movidos pelo desafio de transformar negócios. Acreditamos que tecnologia é ponte para o crescimento e, por isso, criamos soluções digitais sob medida, com criatividade, estratégia e proximidade.
        </p>
      </div>
      <div className="w-full flex flex-col items-center">
        {/* Divisória que ocupa toda a tela */}
        <div className="w-full">
          <div className="w-full h-[1.5px] bg-gray-200 my-12" />
        </div>
        
        {/* Container para as caixas - agora ocupa toda a largura */}
        <div className="w-full flex flex-col items-center px-4 md:px-8">
          <div 
            className="w-full bg-white/70 rounded-2xl shadow-xl border border-azulClaro/40 p-12 flex flex-col items-center justify-center transition-all duration-500 hover:shadow-2xl hover:bg-white/90 hover:-translate-y-3 hover:scale-105 mb-8 group cursor-pointer min-h-[180px]"
            style={{ 
              willChange: 'transform, box-shadow',
              transformOrigin: 'center'
            }}
          >
            <p className="text-base text-center transition-all duration-300 group-hover:text-azulFuturo max-w-2xl mx-auto leading-relaxed" style={{ color: AZUL_ESCURO }}>
              Mais do que entregar projetos, queremos construir relações duradouras. Nosso time une experiência em desenvolvimento, design e estratégia digital para gerar valor real e resultados consistentes para nossos clientes.
            </p>
          </div>
        </div>
        
        <div className="w-full">
          <div className="w-full h-[1.5px] bg-gray-200 my-12" />
        </div>
        
        <div className="w-full flex flex-col items-center px-4 md:px-8">
          <div 
            className="w-full bg-white/70 rounded-2xl shadow-xl border border-azulClaro/40 p-12 flex flex-col items-center justify-center transition-all duration-500 hover:shadow-2xl hover:bg-white/90 hover:-translate-y-3 hover:scale-105 mb-8 group cursor-pointer min-h-[200px]"
            style={{ 
              willChange: 'transform, box-shadow',
              transformOrigin: 'center'
            }}
          >
            <svg width="40" height="40" fill="none" stroke="#1A73E8" strokeWidth="2.2" viewBox="0 0 24 24" className="mb-12 drop-shadow-md transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
            <h2 className="text-lg font-bold mb-4 text-azulFuturo transition-all duration-300 group-hover:text-azulRoyal text-center leading-relaxed">Missão</h2>
            <p className="text-base text-center transition-all duration-300 group-hover:text-azulFuturo max-w-2xl mx-auto leading-relaxed" style={{ color: AZUL_ESCURO }}>Impulsionar empresas com tecnologia, criatividade e atendimento humano.</p>
          </div>
        </div>
        
        <div className="w-full">
          <div className="w-full h-[1.5px] bg-gray-200 my-12" />
        </div>
        
        <div className="w-full flex flex-col items-center px-4 md:px-8">
          <div 
            className="w-full bg-white/70 rounded-2xl shadow-xl border border-azulClaro/40 p-12 flex flex-col items-center justify-center transition-all duration-500 hover:shadow-2xl hover:bg-white/90 hover:-translate-y-3 hover:scale-105 mb-8 group cursor-pointer min-h-[200px]"
            style={{ 
              willChange: 'transform, box-shadow',
              transformOrigin: 'center'
            }}
          >
            <svg width="40" height="40" fill="none" stroke="#00C9A7" strokeWidth="2.2" viewBox="0 0 24 24" className="mb-12 drop-shadow-md transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"><ellipse cx="12" cy="12" rx="9" ry="6"/><circle cx="12" cy="12" r="3"/></svg>
            <h2 className="text-lg font-bold mb-4 text-ciano transition-all duration-300 group-hover:text-azulFuturo text-center leading-relaxed">Visão</h2>
            <p className="text-base text-center transition-all duration-300 group-hover:text-azulFuturo max-w-2xl mx-auto leading-relaxed" style={{ color: AZUL_ESCURO }}>Ser referência em soluções digitais que inspiram e transformam negócios.</p>
          </div>
        </div>
        
        <div className="w-full">
          <div className="w-full h-[1.5px] bg-gray-200 my-12" />
        </div>
        
        <div className="w-full flex flex-col items-center px-4 md:px-8">
          <div 
            className="w-full bg-white/70 rounded-2xl shadow-xl border border-azulClaro/40 p-12 flex flex-col items-center justify-center transition-all duration-500 hover:shadow-2xl hover:bg-white/90 hover:-translate-y-3 hover:scale-105 mb-8 group cursor-pointer min-h-[200px]"
            style={{ 
              willChange: 'transform, box-shadow',
              transformOrigin: 'center'
            }}
          >
            <svg width="40" height="40" fill="none" stroke="#2563EB" strokeWidth="2.2" viewBox="0 0 24 24" className="mb-12 drop-shadow-md transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"><path d="M12 3L4 7v5c0 5.25 4.5 9.25 8 10 3.5-0.75 8-4.75 8-10V7l-8-4z"/></svg>
            <h2 className="text-lg font-bold mb-4 text-azulRoyal transition-all duration-300 group-hover:text-ciano text-center leading-relaxed">Valores</h2>
            <p className="text-base text-center transition-all duration-300 group-hover:text-azulFuturo max-w-2xl mx-auto leading-relaxed" style={{ color: AZUL_ESCURO }}>Ética, inovação, parceria, excelência e foco genuíno no cliente.</p>
          </div>
        </div>
        
        <div className="w-full">
          <div className="w-full h-[1.5px] bg-gray-200 my-12" />
        </div>
      </div>
    </section>
  );
}