import { useRef } from "react";

const AZUL_ESCURO = "#0B2341";

// Substitua pela URL do seu Apps Script do Google Sheets
const GOOGLE_SHEETS_ENDPOINT = "https://script.google.com/macros/s/AKfycbyjxnUDUnnZVkSr0ydB7EzO6kQ4FONtbmHn0jBkGyw6vvhMngOrqjIbfEqnJgV_m6vG/exec";

export default function Contato() {
  const formRef = useRef(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Envio para Google Sheets
    const form = e.currentTarget;
    const data = {
      nome: (form.elements.namedItem('nome') as HTMLInputElement)?.value,
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value,
      telefone: (form.elements.namedItem('telefone') as HTMLInputElement)?.value,
      descricao: (form.elements.namedItem('descricao') as HTMLTextAreaElement)?.value,
    };
    try {
      await fetch(GOOGLE_SHEETS_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (err) {
      // Silencia erros para não impactar o envio do e-mail
    }
    // O envio do e-mail será feito normalmente pelo FormSubmit
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16 md:py-24 bg-transparent">
      <img src="/Arkon logo e nome.png" alt="Logo da Empresa" className="mb-8" style={{ maxWidth: 180, height: 'auto' }} />
      <div className="w-full max-w-3xl bg-white/70 rounded-2xl shadow-xl border border-azulClaro/40 p-10 md:p-16 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl mt-8">
        <svg width="48" height="48" fill="none" stroke="#2563EB" strokeWidth="2.5" viewBox="0 0 24 24" className="mb-8 drop-shadow-md"><path d="M21 10V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" /><rect x="3" y="10" width="18" height="11" rx="2" /></svg>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-azulRoyal" style={{ letterSpacing: 0.5 }}>Contato</h1>
        <div className="w-full flex flex-col gap-16 items-center">
          <div className="text-center mb-6">
            <p className="mb-4 font-semibold" style={{ color: AZUL_ESCURO }}>Vamos conversar sobre o futuro digital da sua empresa?</p>
            <p style={{ color: AZUL_ESCURO }}>Conte para nós seu desafio ou projeto. Nossa equipe está pronta para ouvir, entender e propor soluções que realmente façam a diferença para o seu negócio.</p>
          </div>
          <form
            action="https://formsubmit.co/arkonsuporte@gmail.com"
            method="POST"
            className="w-full grid gap-10"
            target="_blank"
          >
            <input type="text" name="nome" placeholder="Nome" required className="p-5 rounded border border-azulFuturo bg-white text-azulFuturo placeholder:text-azulFuturo/70 focus:ring-2 focus:ring-ciano transition-all duration-200" />
            <input type="email" name="email" placeholder="E-mail" required className="p-5 rounded border border-azulFuturo bg-white text-azulFuturo placeholder:text-azulFuturo/70 focus:ring-2 focus:ring-ciano transition-all duration-200" />
            <input type="tel" name="telefone" placeholder="Telefone" className="p-5 rounded border border-azulFuturo bg-white text-azulFuturo placeholder:text-azulFuturo/70 focus:ring-2 focus:ring-ciano transition-all duration-200" />
            <textarea name="descricao" placeholder="Como podemos ajudar?" required className="p-5 rounded border border-azulFuturo bg-white text-azulFuturo placeholder:text-azulFuturo/70 focus:ring-2 focus:ring-ciano transition-all duration-200"></textarea>
            <button type="submit" className="bg-ciano hover:bg-azulFuturo text-black px-12 py-5 font-bold text-lg rounded-full shadow-lg transition-all duration-300 scale-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ciano">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
} 