import "./QuemSomos.css";

const AZUL_ESCURO = "#0B2341";

export default function QuemSomos() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 md:py-16 bg-transparent">
      <img src="/Arkon logo e nome.png" alt="Logo da Empresa" className="mb-8" style={{ maxWidth: 180, height: 'auto' }} />
      <div className="max-w-2xl w-full text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-azulFuturo" style={{ letterSpacing: 0.5 }}>Quem Somos</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-center leading-relaxed text-[#2563EB]">
          Somos apaixonados por inovação e movidos pelo desafio de transformar negócios. Acreditamos que tecnologia é ponte para o crescimento e, por isso, criamos soluções digitais sob medida, com criatividade, estratégia e proximidade.
        </p>
      </div>
      <div className="w-full max-w-5xl flex flex-col items-center">
        <div className="w-full h-[1.5px] bg-gray-200 my-12" />
        <div className="bg-white/70 rounded-2xl shadow-xl border border-azulClaro/40 p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl mb-8">
          <p className="text-base text-center" style={{ color: AZUL_ESCURO }}>
            Mais do que entregar projetos, queremos construir relações duradouras. Nosso time une experiência em desenvolvimento, design e estratégia digital para gerar valor real e resultados consistentes para nossos clientes.
          </p>
        </div>
        <div className="w-full h-[1.5px] bg-gray-200 my-12" />
        <div className="bg-white/70 rounded-2xl shadow-xl border border-azulClaro/40 p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl mb-8">
          <svg width="40" height="40" fill="none" stroke="#1A73E8" strokeWidth="2.2" viewBox="0 0 24 24" className="mb-6 mt-4 drop-shadow-md"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
          <h2 className="text-lg font-bold mb-2 text-azulFuturo">Missão</h2>
          <p className="text-base text-center" style={{ color: AZUL_ESCURO }}>Impulsionar empresas com tecnologia, criatividade e atendimento humano.</p>
        </div>
        <div className="w-full h-[1.5px] bg-gray-200 my-12" />
        <div className="bg-white/70 rounded-2xl shadow-xl border border-azulClaro/40 p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl mb-8">
          <svg width="40" height="40" fill="none" stroke="#00C9A7" strokeWidth="2.2" viewBox="0 0 24 24" className="mb-6 mt-4 drop-shadow-md"><ellipse cx="12" cy="12" rx="9" ry="6"/><circle cx="12" cy="12" r="3"/></svg>
          <h2 className="text-lg font-bold mb-2 text-ciano">Visão</h2>
          <p className="text-base text-center" style={{ color: AZUL_ESCURO }}>Ser referência em soluções digitais que inspiram e transformam negócios.</p>
        </div>
        <div className="w-full h-[1.5px] bg-gray-200 my-12" />
        <div className="bg-white/70 rounded-2xl shadow-xl border border-azulClaro/40 p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl mb-8">
          <svg width="40" height="40" fill="none" stroke="#2563EB" strokeWidth="2.2" viewBox="0 0 24 24" className="mb-6 mt-4 drop-shadow-md"><path d="M12 3L4 7v5c0 5.25 4.5 9.25 8 10 3.5-0.75 8-4.75 8-10V7l-8-4z"/></svg>
          <h2 className="text-lg font-bold mb-2 text-azulRoyal">Valores</h2>
          <p className="text-base text-center" style={{ color: AZUL_ESCURO }}>Ética, inovação, parceria, excelência e foco genuíno no cliente.</p>
        </div>
        <div className="w-full h-[1.5px] bg-gray-200 my-12" />
      </div>
    </section>
  );
}