import { motion } from 'framer-motion';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { 
  FaGlobe, 
  FaMobile, 
  FaLightbulb, 
  FaShoppingCart,
  FaSearch,
  FaPalette,
  FaRocket,
  FaChartLine,
  FaShieldAlt
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

export default function Servicos() {
  const services = [
    {
      id: 1,
      title: 'Sites Profissionais',
      subtitle: 'Presença Digital de Impacto',
      description: 'Desenvolvemos sites institucionais, landing pages e portais que traduzem a essência da sua marca com design moderno, performance otimizada e foco total em conversão.',
      icon: <FaGlobe />,
      color: CORES_PRIMARIAS.azulPrincipal,
      features: ['Design Responsivo', 'SEO Otimizado', 'Performance Avançada', 'CMS Amigável'],
      technologies: ['React', 'WordPress', 'Next.js', 'TypeScript']
    },
    {
      id: 2,
      title: 'Sistemas Web & Mobile',
      subtitle: 'Soluções Sob Medida',
      description: 'Criamos sistemas personalizados e aplicativos inovadores, integrando tecnologia de ponta, usabilidade excepcional e segurança robusta para transformar processos.',
      icon: <FaMobile />,
      color: CORES_SECUNDARIAS.ciano,
      features: ['Apps Nativos', 'Sistemas Web', 'APIs Robustas', 'Integração ERP/CRM'],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS']
    },
    {
      id: 3,
      title: 'E-commerce Completo',
      subtitle: 'Vendas Online Otimizadas',
      description: 'Plataformas de e-commerce completas com foco em conversão, experiência do usuário e integração com todos os sistemas de pagamento e logística.',
      icon: <FaShoppingCart />,
      color: CORES_SECUNDARIAS.laranjaWarn,
      features: ['Carrinho Otimizado', 'Multi-Pagamentos', 'Gestão de Estoque', 'Analytics Avançado'],
      technologies: ['WooCommerce', 'Shopify', 'Magento', 'Stripe']
    },
    {
      id: 4,
      title: 'Consultoria Digital',
      subtitle: 'Estratégia & Transformação',
      description: 'Apoiamos sua empresa em toda jornada digital com consultoria estratégica, UX/UI design e transformação digital para impulsionar crescimento sustentável.',
      icon: <FaLightbulb />,
      color: CORES_SECUNDARIAS.roxoTech,
      features: ['Auditoria Digital', 'Estratégia UX/UI', 'Transformação Digital', 'Treinamentos'],
      technologies: ['Figma', 'Google Analytics', 'Hotjar', 'Adobe Creative']
    }
  ];

  const specialties = [
    { 
      title: 'UI/UX Design',
      icon: <FaPalette />,
      description: 'Interfaces intuitivas e experiências memoráveis'
    },
    { 
      title: 'SEO & Performance',
      icon: <FaSearch />,
      description: 'Otimização para motores de busca e velocidade'
    },
    { 
      title: 'Desenvolvimento Ágil',
      icon: <FaRocket />,
      description: 'Metodologias modernas e entregas rápidas'
    },
    { 
      title: 'Suporte Contínuo',
      icon: <FaShieldAlt />,
      description: 'Manutenção e evolução constante dos projetos'
    }
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
          Nossos Serviços
        </h1>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 text-center leading-relaxed font-medium" 
           style={{ color: CORES_PRIMARIAS.azulEscuro }}>
          Soluções digitais <span style={{ color: CORES_SECUNDARIAS.laranjaWarn }}>completas</span> que transformam ideias em resultados
        </p>
        <p className="text-lg max-w-3xl mx-auto text-center leading-relaxed" 
           style={{ color: CORES_PRIMARIAS.cinzaNeutro }}>
          Desde a concepção até a implementação, oferecemos tecnologia de ponta, 
          design inovador e estratégia digital focada no sucesso do seu negócio.
        </p>
      </motion.div>

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

      {/* Main Services */}
      <Container className="w-full mb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center" style={{ marginBottom: '24px' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
              Principais Serviços
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: CORES_PRIMARIAS.cinzaNeutro }}>
              Tecnologias modernas e processos otimizados para resultados excepcionais
            </p>
          </div>

          <Row className="g-5">
            {services.map((service) => (
              <Col lg={6} key={service.id}>
                <motion.div variants={cardVariants}>
                  <div 
                    className="h-100 rounded-3xl shadow-lg border-0 overflow-hidden hover-lift"
                    style={{ 
                      background: GRADIENTES.cardGradient,
                      minHeight: '500px',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      border: `1px solid ${CORES_PRIMARIAS.azulClaro}30`
                    }}
                  >
                    {/* Header */}
                    <div className="p-5"
                         style={{ 
                           background: `linear-gradient(135deg, ${service.color}15, ${service.color}05)`,
                           borderBottom: `2px solid ${service.color}20`
                         }}>
                      <div className="d-flex align-items-center mb-3">
                        <div className="d-inline-flex align-items-center justify-content-center rounded-circle me-4"
                             style={{ 
                               width: '60px', 
                               height: '60px',
                               backgroundColor: service.color,
                               fontSize: '1.5rem',
                               color: CORES_PRIMARIAS.brancoPuro
                             }}>
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="fw-bold mb-1" style={{ color: CORES_PRIMARIAS.azulEscuro, fontSize: '1.4rem' }}>
                            {service.title}
                          </h3>
                          <p className="mb-0" style={{ color: service.color, fontSize: '1rem', fontWeight: '600' }}>
                            {service.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <p className="mb-4" style={{ color: CORES_PRIMARIAS.cinzaNeutro, lineHeight: 1.6 }}>
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="mb-4">
                        <h6 className="fw-bold mb-3" style={{ color: service.color }}>
                          Recursos Inclusos:
                        </h6>
                        <Row className="g-2">
                          {service.features.map((feature, idx) => (
                            <Col md={6} key={idx}>
                              <div className="d-flex align-items-center mb-2">
                                <FaChartLine style={{ color: service.color }} className="me-2" size={12} />
                                <span style={{ color: CORES_PRIMARIAS.azulEscuro, fontSize: '0.9rem' }}>
                                  {feature}
                                </span>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h6 className="fw-bold mb-3" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
                          Tecnologias:
                        </h6>
                        <div className="d-flex flex-wrap gap-2">
                          {service.technologies.map((tech, idx) => (
                            <Badge key={idx} className="px-3 py-2"
                                   style={{ 
                                     backgroundColor: service.color,
                                     color: CORES_PRIMARIAS.brancoPuro,
                                     fontSize: '0.85rem',
                                     fontWeight: '600',
                                     border: 'none',
                                     borderRadius: '12px'
                                   }}>
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>

      {/* Specialties Section */}
      <Container className="w-full mb-20" style={{ marginTop: '24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
              Nossas Especialidades
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: CORES_PRIMARIAS.cinzaNeutro }}>
              Diferenciais que fazem a diferença em cada projeto
            </p>
          </div>

          <Row className="g-4">
            {specialties.map((specialty, index) => (
              <Col md={6} lg={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center rounded-3xl p-5 shadow-sm hover-lift"
                       style={{ 
                         background: GRADIENTES.cardGradient,
                         border: `1px solid ${CORES_PRIMARIAS.azulClaro}30`,
                         minHeight: '200px'
                       }}>
                    <div className="mb-3" style={{ color: CORES_SECUNDARIAS.laranjaWarn, fontSize: '2rem' }}>
                      {specialty.icon}
                    </div>
                    <h5 className="fw-bold mb-3" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
                      {specialty.title}
                    </h5>
                    <p className="mb-0" style={{ color: CORES_PRIMARIAS.cinzaNeutro, fontSize: '0.9rem' }}>
                      {specialty.description}
                    </p>
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