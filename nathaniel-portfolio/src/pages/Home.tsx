import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  FaRocket, 
  FaUsers, 
  FaPalette, 
  FaChartLine,
  FaMobile,
  FaGlobe,
  FaCode,
  FaHeart
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

export default function Home() {
  const services = [
    {
      id: 1,
      title: 'Soluções Sob Medida',
      description: 'Desenvolvimento de sistemas, apps e sites personalizados que crescem junto com o seu negócio.',
      icon: <FaRocket />,
      color: CORES_PRIMARIAS.azulPrincipal,
      features: ['Sites Institucionais', 'E-commerce', 'Apps Mobile', 'Sistemas Web']
    },
    {
      id: 2,
      title: 'Atendimento Consultivo',
      description: 'Acompanhamento próximo, transparência total e parceria estratégica em cada etapa do projeto.',
      icon: <FaUsers />,
      color: CORES_SECUNDARIAS.ciano,
      features: ['Consultoria Digital', 'Suporte Técnico', 'Treinamentos', 'Manutenção']
    },
    {
      id: 3,
      title: 'Design & Performance',
      description: 'Visual moderno, navegação intuitiva e foco total em conversão e resultados para sua empresa.',
      icon: <FaPalette />,
      color: CORES_SECUNDARIAS.roxoTech,
      features: ['UI/UX Design', 'Otimização SEO', 'Performance', 'Responsividade']
    }
  ];

  const stats = [
    { number: "50+", label: "Projetos Entregues", icon: <FaCode /> },
    { number: "98%", label: "Clientes Satisfeitos", icon: <FaHeart /> },
    { number: "24h", label: "Tempo de Resposta", icon: <FaChartLine /> },
    { number: "100%", label: "Projetos Responsivos", icon: <FaMobile /> }
  ];

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

  const statVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
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
        style={{ maxWidth: 200, height: 'auto' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      
      {/* Hero Section */}
      <motion.div 
        className="max-w-6xl w-full text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight" 
            style={{ color: CORES_PRIMARIAS.azulEscuro, letterSpacing: '-0.025em' }}>
          Tecnologia que <span style={{ color: CORES_PRIMARIAS.azulPrincipal }}>Impulsiona</span> o Seu Negócio
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 leading-relaxed" 
            style={{ color: CORES_PRIMARIAS.azulPrincipal }}>
          Soluções digitais criativas para empresas que querem <span style={{ color: CORES_SECUNDARIAS.laranjaWarn }}>crescer de verdade</span>
        </h2>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 text-center leading-relaxed" 
           style={{ color: CORES_PRIMARIAS.cinzaNeutro }}>
          Somos especialistas em criar experiências digitais que conectam marcas e pessoas, 
          fortalecendo sua presença no mercado e gerando <strong style={{ color: CORES_SECUNDARIAS.ciano }}>resultados reais</strong>.
        </p>
      </motion.div>

      {/* Stats Section */}
      <Container className="w-full mb-16">
        <Row className="g-4">
          {stats.map((stat, index) => (
            <Col md={6} lg={3} key={index}>
              <motion.div
                variants={statVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="rounded-3xl p-5 shadow-lg hover-lift"
                     style={{ 
                       background: GRADIENTES.cardGradient,
                       border: `1px solid ${CORES_PRIMARIAS.azulClaro}30`
                     }}>
                  <div className="mb-3" style={{ color: CORES_SECUNDARIAS.laranjaWarn, fontSize: '2.5rem' }}>
                    {stat.icon}
                  </div>
                  <h3 className="fw-bold mb-1" style={{ color: CORES_PRIMARIAS.azulEscuro, fontSize: '2rem' }}>
                    {stat.number}
                  </h3>
                  <p className="mb-0" style={{ color: CORES_PRIMARIAS.cinzaNeutro }}>
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Divisória Elegante */}
      <motion.div 
        className="w-full max-w-7xl"
        style={{ marginBottom: '24px' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="w-full h-[3px]" 
             style={{ 
               background: `linear-gradient(90deg, transparent 0%, ${CORES_PRIMARIAS.azulPrincipal} 20%, ${CORES_SECUNDARIAS.laranjaWarn} 50%, ${CORES_PRIMARIAS.azulPrincipal} 80%, transparent 100%)` 
             }} />
      </motion.div>

      {/* Services Section */}
      <Container className="w-full mb-40">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center" style={{ marginBottom: '24px' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
              Como Transformamos Seu Negócio
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: CORES_PRIMARIAS.cinzaNeutro }}>
              Três pilares fundamentais que garantem o sucesso do seu projeto digital
            </p>
          </div>

          <Row className="g-5">
            {services.map((service) => (
              <Col md={6} lg={4} key={service.id}>
                <motion.div variants={cardVariants}>
                  <div 
                    className="h-100 rounded-3xl shadow-lg border-0 overflow-hidden hover-lift"
                    style={{ 
                      background: GRADIENTES.cardGradient,
                      minHeight: '520px',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      border: `1px solid ${CORES_PRIMARIAS.azulClaro}30`
                    }}
                  >
                    {/* Header com ícone */}
                    <div className="p-5 text-center"
                         style={{ 
                           background: `linear-gradient(135deg, ${service.color}15, ${service.color}05)`,
                           borderBottom: `2px solid ${service.color}20`
                         }}>
                      <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
                           style={{ 
                             width: '80px', 
                             height: '80px',
                             backgroundColor: service.color,
                             fontSize: '2rem',
                             color: CORES_PRIMARIAS.brancoPuro
                           }}>
                        {service.icon}
                      </div>
                      <h3 className="fw-bold mb-3" style={{ color: CORES_PRIMARIAS.azulEscuro, fontSize: '1.5rem' }}>
                        {service.title}
                      </h3>
                    </div>

                    {/* Conteúdo */}
                    <div className="p-5">
                      <p className="mb-4" style={{ color: CORES_PRIMARIAS.cinzaNeutro, lineHeight: 1.6 }}>
                        {service.description}
                      </p>

                      {/* Features */}
                      <div>
                        <h6 className="fw-bold mb-3" style={{ color: service.color }}>
                          Incluído:
                        </h6>
                        <ul className="list-unstyled">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="mb-2 d-flex align-items-center">
                              <FaGlobe style={{ color: service.color }} className="me-2" size={12} />
                              <span style={{ color: CORES_PRIMARIAS.azulEscuro, fontSize: '0.9rem' }}>
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
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