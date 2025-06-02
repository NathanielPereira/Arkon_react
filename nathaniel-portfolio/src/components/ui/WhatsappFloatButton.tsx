import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappFloatButton() {
  return (
    <a
      href="https://wa.me/5553991747024"
      target="_blank"
      rel="noopener noreferrer"
      style={{ 
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        backgroundColor: '#00C9A7',
        color: '#000',
        borderRadius: '50%',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 24px 0 rgba(37,99,235,0.18)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#1A73E8';
        e.currentTarget.style.color = '#fff';
        e.currentTarget.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#00C9A7';
        e.currentTarget.style.color = '#000';
        e.currentTarget.style.transform = 'scale(1)';
      }}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
} 