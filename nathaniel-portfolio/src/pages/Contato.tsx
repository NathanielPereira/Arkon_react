const AZUL_ESCURO = "#0B2341";

export default function Contato() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-start px-4 pt-16 md:pt-20 pb-12 md:pb-16 bg-transparent">
      <img src="/Arkon logo e nome.png" alt="Logo da Empresa" className="mb-8" style={{ maxWidth: 180, height: 'auto' }} />
      <div className="max-w-2xl w-full text-center mb-8">
        <h1 className="text-lg md:text-xl font-medium mb-4 text-azulRoyal" style={{ letterSpacing: 0.2 }}>Contato</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-center leading-relaxed text-[#2563EB]">
          Vamos conversar sobre o futuro digital da sua empresa? Conte para nós seu desafio ou projeto.
        </p>
      </div>
      <div className="w-full flex flex-col items-center">
        {/* Divisória que ocupa toda a tela */}
        <div className="w-full">
          <div className="w-full h-[1.5px] bg-gray-200 my-12" />
        </div>
        
        {/* Container para a caixa - agora ocupa toda a largura */}
        <div className="w-full flex flex-col items-center px-4 md:px-8">
          <div 
            className="w-full bg-white/70 rounded-2xl shadow-xl border border-azulClaro/40 p-8 flex flex-col items-center transition-all duration-500 hover:shadow-2xl hover:bg-white/90 hover:-translate-y-3 hover:scale-105 mb-8 group"
            style={{ 
              willChange: 'transform, box-shadow',
              transformOrigin: 'center'
            }}
          >
            <svg width="48" height="48" fill="none" stroke="#2563EB" strokeWidth="2.5" viewBox="0 0 24 24" className="mb-6 mt-4 drop-shadow-md transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"><path d="M21 10V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" /><rect x="3" y="10" width="18" height="11" rx="2" /></svg>
            <p className="text-base text-center mb-6 transition-all duration-300 group-hover:text-azulFuturo max-w-2xl mx-auto" style={{ color: AZUL_ESCURO }}>
              Nossa equipe está pronta para ouvir, entender e propor soluções que realmente façam a diferença para o seu negócio.
            </p>
            <form
              action="https://formsubmit.co/arkonsuporte@gmail.com"
              method="POST"
              className="w-full grid gap-6 max-w-2xl mx-auto"
            >
              {/* Campos ocultos para configuração do FormSubmit */}
              <input type="hidden" name="_subject" value="Novo contato - Arkon Portfólio" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://arkon-lab.web.app/contato?success=true" />
              
              <input 
                type="text" 
                name="nome" 
                placeholder="Nome completo" 
                required 
                className="p-4 rounded border border-azulFuturo bg-white text-azulFuturo placeholder:text-azulFuturo/70 focus:ring-2 focus:ring-ciano transition-all duration-200 w-full" 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="E-mail" 
                required 
                className="p-4 rounded border border-azulFuturo bg-white text-azulFuturo placeholder:text-azulFuturo/70 focus:ring-2 focus:ring-ciano transition-all duration-200 w-full" 
              />
              <input 
                type="tel" 
                name="telefone" 
                placeholder="Telefone (WhatsApp)" 
                className="p-4 rounded border border-azulFuturo bg-white text-azulFuturo placeholder:text-azulFuturo/70 focus:ring-2 focus:ring-ciano transition-all duration-200 w-full" 
              />
              <input 
                type="text" 
                name="empresa" 
                placeholder="Nome da empresa (opcional)" 
                className="p-4 rounded border border-azulFuturo bg-white text-azulFuturo placeholder:text-azulFuturo/70 focus:ring-2 focus:ring-ciano transition-all duration-200 w-full" 
              />
              <textarea 
                name="mensagem" 
                placeholder="Como podemos ajudar? Conte-nos sobre seu projeto ou necessidade..." 
                required 
                rows={5}
                className="p-4 rounded border border-azulFuturo bg-white text-azulFuturo placeholder:text-azulFuturo/70 focus:ring-2 focus:ring-ciano transition-all duration-200 resize-vertical w-full"
              ></textarea>
              <button 
                type="submit" 
                className="bg-ciano hover:bg-azulFuturo text-black px-8 py-4 font-bold text-lg rounded-full shadow-lg transition-all duration-300 scale-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ciano w-full max-w-sm mx-auto"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
        
        <div className="w-full">
          <div className="w-full h-[1.5px] bg-gray-200 my-12" />
        </div>
      </div>
    </section>
  );
} 