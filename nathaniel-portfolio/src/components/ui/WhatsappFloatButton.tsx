import { FaWhatsapp } from "react-icons/fa";
import "./WhatsappFloatButton.css";

export default function WhatsappFloatButton() {
  return (
    <a
      id="whatsapp-float-btn"
      className="whatsapp-float-btn"
      href="https://wa.me/5511999999999" // Substitua pelo número real
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
} 