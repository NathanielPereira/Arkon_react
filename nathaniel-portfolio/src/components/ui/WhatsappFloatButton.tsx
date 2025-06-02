import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappFloatButton() {
  return (
    <a
      href="https://wa.me/5511999999999" // Substitua pelo número real
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-6 right-6 bg-ciano hover:bg-azulFuturo text-black shadow-2xl rounded-full p-4 flex items-center justify-center transition-all duration-300 scale-100 hover:scale-110"
      style={{ boxShadow: '0 4px 24px 0 rgba(37,99,235,0.18)' }}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
} 