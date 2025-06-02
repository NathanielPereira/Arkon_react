import "./QuemSomos.css";

const AZUL_ESCURO = "#0B2341";

export default function QuemSomos() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16 md:py-24 bg-transparent">
      <img src="/Arkon logo e nome.png" alt="Logo da Empresa" className="mb-8" style={{ maxWidth: 180, height: 'auto' }} />
      <div className="w-full max-w-3xl bg-white/70 rounded-2xl shadow-xl border border-azulClaro/40 p-10 md:p-14 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <svg width="48" height="48" fill="none" stroke="#1A73E8" strokeWidth="2.5" viewBox="0 0 24 24" className="mb-4 drop-shadow-md"><path d="M12 2v20M2 12h20" /></svg>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-azulFuturo" style={{ letterSpacing: 0.5 }}>Quem Somos</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-center leading-relaxed mb-8 mt-2" style={{ color: AZUL_ESCURO }}>
          Somos apaixonados por inovação e movidos pelo desafio de transformar negócios. Acreditamos que tecnologia é ponte para o crescimento e, por isso, criamos soluções digitais sob medida, com criatividade, estratégia e proximidade.
        </p>
        <div className="w-full h-[1.5px] bg-gray-200 my-4" />
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-center leading-relaxed mb-8 mt-2" style={{ color: AZUL_ESCURO }}>
          Mais do que entregar projetos, queremos construir relações duradouras. Nosso time une experiência em desenvolvimento, design e estratégia digital para gerar valor real e resultados consistentes para nossos clientes.
        </p>
        <div className="w-full h-[1.5px] bg-gray-200 my-4" />
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center w-full py-8">
            <svg width="40" height="40" fill="none" stroke="#1A73E8" strokeWidth="2.2" viewBox="0 0 24 24" className="mb-2 drop-shadow-md"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
            <h2 className="text-xl font-bold mb-2 text-azulFuturo">Missão</h2>
            <p style={{ color: AZUL_ESCURO }}>Impulsionar empresas com tecnologia, criatividade e atendimento humano.</p>
          </div>
          <div className="w-full h-[1.5px] bg-gray-200 my-4" />
          <div className="flex flex-col items-center w-full py-8">
            <svg width="40" height="40" fill="none" stroke="#00C9A7" strokeWidth="2.2" viewBox="0 0 24 24" className="mb-2 drop-shadow-md"><ellipse cx="12" cy="12" rx="9" ry="6"/><circle cx="12" cy="12" r="3"/></svg>
            <h2 className="text-xl font-bold mb-2 text-ciano">Visão</h2>
            <p style={{ color: AZUL_ESCURO }}>Ser referência em soluções digitais que inspiram e transformam negócios.</p>
          </div>
          <div className="w-full h-[1.5px] bg-gray-200 my-4" />
          <div className="flex flex-col items-center w-full py-8">
            <svg width="40" height="40" fill="none" stroke="#2563EB" strokeWidth="2.2" viewBox="0 0 24 24" className="mb-2 drop-shadow-md"><path d="M12 3L4 7v5c0 5.25 4.5 9.25 8 10 3.5-0.75 8-4.75 8-10V7l-8-4z"/></svg>
            <h2 className="text-xl font-bold mb-2 text-azulRoyal">Valores</h2>
            <p style={{ color: AZUL_ESCURO }}>Ética, inovação, parceria, excelência e foco genuíno no cliente.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 