import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
import { 
  FaEnvelope, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaClock,
  FaInstagram,
  FaLinkedin,
  FaRocket,
  FaCheckCircle,
  FaUsers,
  FaLightbulb
} from 'react-icons/fa';

// Paleta de cores refinada seguindo design thinking
const CORES_PRIMARIAS = {
  azulPrincipal: "#1A73E8",      // Azul Google - confiabilidade e tecnologia
  azulEscuro: "#0B2341",         // Azul naval - profissionalismo e estabilidade
  azulClaro: "#E3F2FD",          // Azul claro - suavidade e modernidade
  brancoPuro: "#FFFFFF",         // Branco - clareza e espaço
  cinzaNeutro: "#6C757D"         // Cinza - textos secundários
};

const CORES_SECUNDARIAS = {
  verdeForest: "#1B4F72",        // Verde escuro - sucesso e crescimento
  verdeClaro: "#D5EDDA",         // Verde claro - highlights de sucesso
  laranjaWarn: "#FF8C00",        // Laranja - CTAs e destaques importantes
  roxoTech: "#6F42C1",           // Roxo - inovação e tecnologia
  ciano: "#00C9A7"               // Ciano - criatividade e inovação
};

const GRADIENTES = {
  heroGradient: "linear-gradient(135deg, #1A73E8 0%, #0B2341 100%)",
  cardGradient: "linear-gradient(145deg, #FFFFFF 0%, #F8F9FA 100%)",
  hoverGradient: "linear-gradient(135deg, #E3F2FD 0%, #FFFFFF 100%)"
};

export default function Contato() {
  const [showSuccess, setShowSuccess] = useState(false);

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email Principal',
      value: 'arkonsuporte@gmail.com',
      description: 'Resposta em até 2 horas',
      color: CORES_PRIMARIAS.azulPrincipal
    },
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      value: '(11) 99999-9999',
      description: 'Atendimento personalizado',
      color: CORES_SECUNDARIAS.ciano
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Localização',
      value: 'São Paulo, SP',
      description: 'Atendimento presencial e remoto',
      color: CORES_SECUNDARIAS.laranjaWarn
    },
    {
      icon: <FaClock />,
      title: 'Horário',
      value: 'Seg - Sex: 9h às 18h',
      description: 'WhatsApp 24/7 para urgências',
      color: CORES_SECUNDARIAS.roxoTech
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaRocket />,
      title: 'Resposta Rápida',
      description: 'Retornamos seu contato em até 2 horas úteis com proposta personalizada.'
    },
    {
      icon: <FaUsers />,
      title: 'Consultoria Gratuita',
      description: 'Primeira conversa sempre gratuita para entender seu projeto e necessidades.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Soluções Personalizadas',
      description: 'Cada projeto é único e merece uma solução sob medida para seus objetivos.'
    }
  ];

  const handleSubmit = () => {
    // O form será enviado normalmente via FormSubmit
    // Apenas mostramos o feedback visual
    setTimeout(() => {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-start px-4 pt-16 md:pt-20 pb-20" 
             style={{ background: `linear-gradient(135deg, ${CORES_PRIMARIAS.azulClaro} 0%, ${CORES_PRIMARIAS.brancoPuro} 50%, #F8F9FA 100%)` }}>
      
      {/* Logo */}
      <motion.img 
        src="/Arkon logo e nome.png" 
        alt="Logo da Arkon" 
        className="mb-12" 
        style={{ maxWidth: 180, height: 'auto' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      
      {/* Hero Section */}
      <motion.div 
        className="max-w-5xl w-full text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" 
            style={{ color: CORES_PRIMARIAS.azulPrincipal, letterSpacing: '-0.025em' }}>
          Vamos Conversar?
        </h1>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 text-center leading-relaxed font-medium" 
           style={{ color: CORES_PRIMARIAS.azulEscuro }}>
          Vamos conversar sobre o <span style={{ color: CORES_SECUNDARIAS.laranjaWarn }}>futuro digital</span> da sua empresa?
        </p>
        <p className="text-lg max-w-3xl mx-auto text-center leading-relaxed" 
           style={{ color: CORES_PRIMARIAS.cinzaNeutro }}>
          Nossa equipe está pronta para ouvir, entender e propor soluções que realmente 
           façam a diferença para o seu negócio. Conte para nós seu desafio ou projeto.
        </p>
      </motion.div>

      {/* Contact Info Cards */}
      <Container className="w-full mb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row className="g-4">
            {contactInfo.map((info, index) => (
              <Col md={6} lg={3} key={index}>
                <motion.div variants={cardVariants}>
                  <Card className="text-center border-0 rounded-3xl shadow-lg hover-lift h-100"
                        style={{ 
                          background: GRADIENTES.cardGradient,
                          minHeight: '200px'
                        }}>
                    <Card.Body className="p-4 d-flex flex-column justify-content-center">
                      <div className="mb-3" style={{ color: info.color, fontSize: '2.5rem' }}>
                        {info.icon}
                      </div>
                      <h5 className="fw-bold mb-2" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
                        {info.title}
                      </h5>
                      <p className="fw-semibold mb-2" style={{ color: info.color }}>
                        {info.value}
                      </p>
                      <small style={{ color: CORES_PRIMARIAS.cinzaNeutro }}>
                        {info.description}
                      </small>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>

      {/* Divisória Elegante */}
      <motion.div 
        className="w-full max-w-7xl"
        style={{ marginBottom: '24px' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="w-full h-[3px]" 
             style={{ 
               background: `linear-gradient(90deg, transparent 0%, ${CORES_PRIMARIAS.azulPrincipal} 20%, ${CORES_SECUNDARIAS.laranjaWarn} 50%, ${CORES_PRIMARIAS.azulPrincipal} 80%, transparent 100%)` 
             }} />
      </motion.div>

      {/* Contact Form & Info */}
      <Container className="w-full mb-16">
        <Row className="justify-content-center">
          <Col lg={10}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg border-0 rounded-3xl overflow-hidden">
                <Row className="g-0">
                  {/* Form Section */}
                  <Col md={7}>
                    <div className="p-5">
                      <h2 className="text-2xl font-bold mb-4" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
                        <FaEnvelope className="me-3" style={{ color: CORES_SECUNDARIAS.ciano }} />
                        Envie sua Mensagem
                      </h2>
                      <p className="mb-4" style={{ color: CORES_PRIMARIAS.cinzaNeutro }}>
                        Preencha o formulário abaixo e nossa equipe entrará em contato em breve.
                      </p>

                      {showSuccess && (
                        <Alert variant="success" className="d-flex align-items-center mb-4">
                          <FaCheckCircle className="me-2" />
                          Mensagem enviada com sucesso! Retornaremos em breve.
                        </Alert>
                      )}

                      <form
                        action="https://formsubmit.co/arkonsuporte@gmail.com"
                        method="POST"
                        onSubmit={handleSubmit}
                        className="w-full"
                      >
                        {/* Campos ocultos para configuração do FormSubmit */}
                        <input type="hidden" name="_subject" value="Novo contato - Arkon Portfólio" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_next" value="https://arkon-lab.web.app/contato?success=true" />
                        
                        <Row className="g-3">
                          <Col md={6}>
                            <div className="mb-3">
                              <label className="form-label fw-semibold" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
                                Nome Completo *
                              </label>
                              <input 
                                type="text" 
                                name="nome" 
                                className="form-control py-3"
                                placeholder="Seu nome completo"
                                required 
                                style={{ 
                                  borderColor: CORES_PRIMARIAS.azulClaro,
                                  fontSize: '1rem'
                                }}
                              />
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className="mb-3">
                              <label className="form-label fw-semibold" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
                                Email *
                              </label>
                              <input 
                                type="email" 
                                name="email" 
                                className="form-control py-3"
                                placeholder="seu@email.com"
                                required 
                                style={{ 
                                  borderColor: CORES_PRIMARIAS.azulClaro,
                                  fontSize: '1rem'
                                }}
                              />
                            </div>
                          </Col>
                        </Row>

                        <Row className="g-3">
                          <Col md={6}>
                            <div className="mb-3">
                              <label className="form-label fw-semibold" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
                                WhatsApp
                              </label>
                              <input 
                                type="tel" 
                                name="telefone" 
                                className="form-control py-3"
                                placeholder="(11) 99999-9999"
                                style={{ 
                                  borderColor: CORES_PRIMARIAS.azulClaro,
                                  fontSize: '1rem'
                                }}
                              />
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className="mb-3">
                              <label className="form-label fw-semibold" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
                                Empresa
                              </label>
                              <input 
                                type="text" 
                                name="empresa" 
                                className="form-control py-3"
                                placeholder="Nome da empresa (opcional)"
                                style={{ 
                                  borderColor: CORES_PRIMARIAS.azulClaro,
                                  fontSize: '1rem'
                                }}
                              />
                            </div>
                          </Col>
                        </Row>

                        <div className="mb-4">
                          <label className="form-label fw-semibold" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
                            Mensagem *
                          </label>
                          <textarea 
                            name="mensagem" 
                            className="form-control"
                            rows={5}
                            placeholder="Como podemos ajudar? Conte-nos sobre seu projeto ou necessidade..."
                            required 
                            style={{ 
                              borderColor: CORES_PRIMARIAS.azulClaro,
                              fontSize: '1rem'
                            }}
                          ></textarea>
                        </div>

                        <button 
                          type="submit" 
                          className="btn btn-lg fw-bold w-100 py-3 rounded-pill"
                          style={{ 
                            backgroundColor: CORES_SECUNDARIAS.ciano,
                            borderColor: CORES_SECUNDARIAS.ciano,
                            color: CORES_PRIMARIAS.brancoPuro,
                            fontSize: '1.1rem'
                          }}
                        >
                          <FaEnvelope className="me-2" />
                          Enviar Mensagem
                        </button>
                      </form>
                    </div>
                  </Col>

                  {/* Info Section */}
                  <Col md={5}>
                    <div className="h-100 p-5 text-white d-flex flex-column justify-content-center"
                         style={{ background: GRADIENTES.heroGradient }}>
                      <h3 className="fw-bold mb-4">
                        Por que escolher a Arkon?
                      </h3>
                      
                      {whyChooseUs.map((item, index) => (
                        <div key={index} className="mb-4">
                          <div className="d-flex align-items-start">
                            <div className="me-3" style={{ color: CORES_SECUNDARIAS.laranjaWarn, fontSize: '1.5rem' }}>
                              {item.icon}
                            </div>
                            <div>
                              <h5 className="fw-bold mb-2">{item.title}</h5>
                              <p className="mb-0 opacity-90" style={{ fontSize: '0.95rem' }}>
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="mt-4 pt-4 border-top border-light border-opacity-25">
                        <h6 className="fw-bold mb-3">Redes Sociais</h6>
                        <div className="d-flex gap-3">
                          <div className="rounded-circle p-2" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                            <FaInstagram size={20} />
                          </div>
                          <div className="rounded-circle p-2" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                            <FaLinkedin size={20} />
                          </div>
                          <div className="rounded-circle p-2" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                            <FaWhatsapp size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Divisória Final */}
      <motion.div 
        className="w-full max-w-7xl mb-8"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="w-full h-[2px]" 
             style={{ 
               background: `linear-gradient(90deg, transparent 0%, ${CORES_PRIMARIAS.azulPrincipal} 50%, transparent 100%)` 
             }} />
      </motion.div>

      <style>{`
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12) !important;
        }
        
        .form-control:focus {
          border-color: ${CORES_SECUNDARIAS.ciano} !important;
          box-shadow: 0 0 0 0.2rem rgba(0, 201, 167, 0.25) !important;
        }
        
        /* Animações customizadas */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Scroll suave */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
} 