import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaMobile,
  FaLaptopCode,
  FaChartLine,
  FaRocket,
  FaArrowUp,
  FaHeart
} from 'react-icons/fa';
import { motion } from 'framer-motion';

// Paleta de cores da Arkon
const CORES_PRIMARIAS = {
  azulPrincipal: "#1A73E8",
  azulEscuro: "#0B2341", 
  azulClaro: "#E3F2FD",
  brancoPuro: "#FFFFFF",
  cinzaNeutro: "#6C757D"
};

const CORES_SECUNDARIAS = {
  laranjaWarn: "#FF8C00",
  ciano: "#00C9A7"
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const servicos = [
    { nome: 'Sites Institucionais', icon: <FaGlobe /> },
    { nome: 'Aplicativos Mobile', icon: <FaMobile /> },
    { nome: 'Sistemas Web', icon: <FaLaptopCode /> },
    { nome: 'Marketing Digital', icon: <FaChartLine /> }
  ];

  const linksSolucoes = [
    { nome: 'Plano Starter', href: '/planos' },
    { nome: 'Plano Standard', href: '/planos' },
    { nome: 'Plano Premium', href: '/planos' },
    { nome: 'Plano Enterprise', href: '/planos' }
  ];

  const linksEmpresa = [
    { nome: 'Quem Somos', href: '/quem-somos' },
    { nome: 'Nossos Serviços', href: '/servicos' },
    { nome: 'Portfólio', href: '/projetos' },
    { nome: 'Contato', href: '/contato' }
  ];

  return (
    <footer style={{ 
      background: `linear-gradient(135deg, ${CORES_PRIMARIAS.azulEscuro} 0%, ${CORES_PRIMARIAS.azulPrincipal} 100%)`,
      color: CORES_PRIMARIAS.brancoPuro,
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Elemento decorativo de fundo */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 20% 20%, ${CORES_SECUNDARIAS.ciano}15 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, ${CORES_SECUNDARIAS.laranjaWarn}10 0%, transparent 50%)
        `,
        pointerEvents: 'none'
      }} />

      <Container className="position-relative" style={{ zIndex: 1 }}>
        {/* Conteúdo Principal do Footer */}
        <Row className="py-5 g-4">
          {/* Coluna 1: Informações da Empresa */}
          <Col lg={4} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <img 
                  src="/Arkon logo e nome.png" 
                  alt="Arkon - Soluções Digitais" 
                  style={{ maxWidth: 200, height: 'auto', filter: 'brightness(0) invert(1)' }}
                />
              </div>
              <p style={{ 
                color: `${CORES_PRIMARIAS.brancoPuro}CC`, 
                lineHeight: 1.6,
                fontSize: '1rem',
                marginBottom: '1.5rem'
              }}>
                Transformamos ideias em soluções digitais inovadoras. 
                Especializados em desenvolvimento web, mobile e estratégias 
                digitais que impulsionam o crescimento do seu negócio.
              </p>
              
              {/* Informações de Contato */}
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center justify-content-center rounded-circle"
                       style={{ 
                         width: 40, 
                         height: 40, 
                         backgroundColor: `${CORES_SECUNDARIAS.ciano}20`,
                         color: CORES_SECUNDARIAS.ciano 
                       }}>
                    <FaMapMarkerAlt />
                  </div>
                  <span style={{ color: `${CORES_PRIMARIAS.brancoPuro}DD` }}>
                    São Paulo, SP - Brasil
                  </span>
                </div>
                
                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center justify-content-center rounded-circle"
                       style={{ 
                         width: 40, 
                         height: 40, 
                         backgroundColor: `${CORES_SECUNDARIAS.laranjaWarn}20`,
                         color: CORES_SECUNDARIAS.laranjaWarn 
                       }}>
                    <FaWhatsapp />
                  </div>
                  <span style={{ color: `${CORES_PRIMARIAS.brancoPuro}DD` }}>
                    (11) 99999-9999
                  </span>
                </div>
                
                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center justify-content-center rounded-circle"
                       style={{ 
                         width: 40, 
                         height: 40, 
                         backgroundColor: `${CORES_PRIMARIAS.azulClaro}20`,
                         color: CORES_PRIMARIAS.azulClaro 
                       }}>
                    <FaEnvelope />
                  </div>
                  <span style={{ color: `${CORES_PRIMARIAS.brancoPuro}DD` }}>
                    contato@arkon.com.br
                  </span>
                </div>
              </div>
            </motion.div>
          </Col>

          {/* Coluna 2: Nossos Serviços */}
          <Col lg={2} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h5 className="fw-bold mb-4" style={{ 
                color: CORES_PRIMARIAS.brancoPuro,
                fontSize: '1.2rem',
                borderBottom: `2px solid ${CORES_SECUNDARIAS.ciano}`,
                paddingBottom: '8px',
                display: 'inline-block'
              }}>
                Nossos Serviços
              </h5>
              <ul className="list-unstyled">
                {servicos.map((servico, index) => (
                  <li key={index} className="mb-3">
                    <div className="d-flex align-items-center gap-2 hover-item"
                         style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                         onMouseEnter={(e) => {
                           e.currentTarget.style.transform = 'translateX(8px)';
                           e.currentTarget.style.color = CORES_SECUNDARIAS.ciano;
                         }}
                         onMouseLeave={(e) => {
                           e.currentTarget.style.transform = 'translateX(0)';
                           e.currentTarget.style.color = `${CORES_PRIMARIAS.brancoPuro}CC`;
                         }}>
                      <span style={{ color: CORES_SECUNDARIAS.ciano }}>
                        {servico.icon}
                      </span>
                      <span style={{ 
                        color: `${CORES_PRIMARIAS.brancoPuro}CC`,
                        fontSize: '0.95rem'
                      }}>
                        {servico.nome}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </Col>

          {/* Coluna 3: Nossas Soluções */}
          <Col lg={2} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h5 className="fw-bold mb-4" style={{ 
                color: CORES_PRIMARIAS.brancoPuro,
                fontSize: '1.2rem',
                borderBottom: `2px solid ${CORES_SECUNDARIAS.laranjaWarn}`,
                paddingBottom: '8px',
                display: 'inline-block'
              }}>
                Nossas Soluções
              </h5>
              <ul className="list-unstyled">
                {linksSolucoes.map((link, index) => (
                  <li key={index} className="mb-3">
                    <a href={link.href} 
                       className="text-decoration-none d-flex align-items-center gap-2"
                       style={{ 
                         color: `${CORES_PRIMARIAS.brancoPuro}CC`,
                         fontSize: '0.95rem',
                         transition: 'all 0.3s ease'
                       }}
                       onMouseEnter={(e) => {
                         e.currentTarget.style.transform = 'translateX(8px)';
                         e.currentTarget.style.color = CORES_SECUNDARIAS.laranjaWarn;
                       }}
                       onMouseLeave={(e) => {
                         e.currentTarget.style.transform = 'translateX(0)';
                         e.currentTarget.style.color = `${CORES_PRIMARIAS.brancoPuro}CC`;
                       }}>
                      <FaRocket style={{ fontSize: '0.8rem' }} />
                      {link.nome}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </Col>

          {/* Coluna 4: Empresa & Redes Sociais */}
          <Col lg={4} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h5 className="fw-bold mb-4" style={{ 
                color: CORES_PRIMARIAS.brancoPuro,
                fontSize: '1.2rem',
                borderBottom: `2px solid ${CORES_PRIMARIAS.azulClaro}`,
                paddingBottom: '8px',
                display: 'inline-block'
              }}>
                Empresa
              </h5>
              <ul className="list-unstyled mb-4">
                {linksEmpresa.map((link, index) => (
                  <li key={index} className="mb-3">
                    <a href={link.href} 
                       className="text-decoration-none"
                       style={{ 
                         color: `${CORES_PRIMARIAS.brancoPuro}CC`,
                         fontSize: '0.95rem',
                         transition: 'all 0.3s ease'
                       }}
                       onMouseEnter={(e) => {
                         e.currentTarget.style.transform = 'translateX(8px)';
                         e.currentTarget.style.color = CORES_PRIMARIAS.azulClaro;
                       }}
                       onMouseLeave={(e) => {
                         e.currentTarget.style.transform = 'translateX(0)';
                         e.currentTarget.style.color = `${CORES_PRIMARIAS.brancoPuro}CC`;
                       }}>
                      {link.nome}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Redes Sociais */}
              <div>
                <h6 className="fw-bold mb-3" style={{ color: CORES_PRIMARIAS.brancoPuro }}>
                  Nos Siga
                </h6>
                <div className="d-flex gap-3">
                  {[
                    { icon: <FaInstagram />, color: '#E4405F', url: '#' },
                    { icon: <FaLinkedin />, color: '#0077B5', url: '#' },
                    { icon: <FaGithub />, color: '#333', url: '#' },
                    { icon: <FaWhatsapp />, color: '#25D366', url: '#' }
                  ].map((social, index) => (
                    <a key={index}
                       href={social.url}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="d-flex align-items-center justify-content-center rounded-circle"
                       style={{ 
                         width: 45,
                         height: 45,
                         backgroundColor: `${CORES_PRIMARIAS.brancoPuro}20`,
                         color: CORES_PRIMARIAS.brancoPuro,
                         textDecoration: 'none',
                         transition: 'all 0.3s ease',
                         fontSize: '1.2rem'
                       }}
                       onMouseEnter={(e) => {
                         e.currentTarget.style.backgroundColor = social.color;
                         e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)';
                         e.currentTarget.style.boxShadow = `0 8px 25px ${social.color}40`;
                       }}
                       onMouseLeave={(e) => {
                         e.currentTarget.style.backgroundColor = `${CORES_PRIMARIAS.brancoPuro}20`;
                         e.currentTarget.style.transform = 'translateY(0) scale(1)';
                         e.currentTarget.style.boxShadow = 'none';
                       }}>
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* Divisória */}
        <hr style={{ 
          border: 'none',
          height: '1px',
          background: `linear-gradient(90deg, transparent 0%, ${CORES_PRIMARIAS.brancoPuro}40 50%, transparent 100%)`,
          margin: '2rem 0'
        }} />

        {/* Footer Bottom */}
        <Row className="py-4 align-items-center">
          <Col md={6}>
            <p className="mb-0" style={{ 
              color: `${CORES_PRIMARIAS.brancoPuro}AA`,
              fontSize: '0.9rem'
            }}>
              © {currentYear} <strong>Arkon - Soluções Digitais</strong>. Todos os direitos reservados.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="mb-0 d-flex align-items-center justify-content-md-end gap-2" style={{ 
              color: `${CORES_PRIMARIAS.brancoPuro}AA`,
              fontSize: '0.9rem'
            }}>
              Feito com <FaHeart style={{ color: '#ff6b6b' }} /> pela equipe Arkon
            </p>
          </Col>
        </Row>
      </Container>

      {/* Botão Voltar ao Topo */}
      <button
        onClick={scrollToTop}
        className="position-absolute rounded-circle border-0 d-flex align-items-center justify-content-center"
        style={{ 
          top: 20,
          right: 20,
          width: 50,
          height: 50,
          backgroundColor: CORES_SECUNDARIAS.ciano,
          color: CORES_PRIMARIAS.brancoPuro,
          fontSize: '1.2rem',
          transition: 'all 0.3s ease',
          boxShadow: `0 4px 15px ${CORES_SECUNDARIAS.ciano}40`
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)';
          e.currentTarget.style.boxShadow = `0 8px 25px ${CORES_SECUNDARIAS.ciano}60`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = `0 4px 15px ${CORES_SECUNDARIAS.ciano}40`;
        }}>
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer; 