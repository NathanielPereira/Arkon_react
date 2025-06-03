import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  FaRocket, 
  FaEye, 
  FaHeart, 
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaStar,
  FaShieldAlt,
  FaTrophy,
  FaGlobeAmericas
} from 'react-icons/fa';
import "./QuemSomos.css";

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

export default function QuemSomos() {
  const values = [
    {
      id: 1,
      title: 'Missão',
      description: 'Impulsionar empresas com tecnologia inovadora, criatividade estratégica e atendimento verdadeiramente humano.',
      icon: <FaRocket />,
      color: CORES_PRIMARIAS.azulPrincipal,
      details: ['Foco no crescimento do cliente', 'Tecnologia como ponte para o sucesso', 'Atendimento humanizado e próximo']
    },
    {
      id: 2,
      title: 'Visão',
      description: 'Ser a referência em soluções digitais que inspiram, transformam e geram resultados mensuráveis para negócios.',
      icon: <FaEye />,
      color: CORES_SECUNDARIAS.ciano,
      details: ['Liderança em inovação digital', 'Transformação de negócios', 'Resultados que impactam o mercado']
    },
    {
      id: 3,
      title: 'Valores',
      description: 'Ética, inovação constante, parceria genuína, excelência técnica e foco absoluto no sucesso do cliente.',
      icon: <FaHeart />,
      color: CORES_SECUNDARIAS.roxoTech,
      details: ['Ética e transparência', 'Inovação constante', 'Parceria de longo prazo', 'Excelência em tudo']
    }
  ];

  const team = [
    {
      id: 1,
      title: 'Nossa Equipe',
      description: 'Profissionais experientes e apaixonados por criar soluções que fazem a diferença no mundo digital.',
      icon: <FaUsers />,
      color: CORES_SECUNDARIAS.verdeForest
    },
    {
      id: 2,
      title: 'Metodologia',
      description: 'Processos ágeis, comunicação transparente e foco total na experiência do usuário e resultados do cliente.',
      icon: <FaLightbulb />,
      color: CORES_SECUNDARIAS.laranjaWarn
    }
  ];

  const achievements = [
    { number: "3+", label: "Anos de Experiência", icon: <FaTrophy /> },
    { number: "50+", label: "Projetos Entregues", icon: <FaStar /> },
    { number: "98%", label: "Clientes Satisfeitos", icon: <FaHeart /> },
    { number: "24h", label: "Suporte Garantido", icon: <FaShieldAlt /> }
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
          Quem Somos
        </h1>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 text-center leading-relaxed font-medium" 
           style={{ color: CORES_PRIMARIAS.azulEscuro }}>
          Somos apaixonados por <span style={{ color: CORES_SECUNDARIAS.laranjaWarn }}>inovação</span> e movidos pelo desafio de transformar negócios
        </p>
        <p className="text-lg max-w-3xl mx-auto text-center leading-relaxed" 
           style={{ color: CORES_PRIMARIAS.cinzaNeutro }}>
          Acreditamos que tecnologia é ponte para o crescimento e, por isso, criamos soluções digitais sob medida, 
          com criatividade, estratégia e proximidade humana.
        </p>
      </motion.div>

      {/* Story Section */}
      <Container className="w-full mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="rounded-3xl p-8 shadow-lg"
               style={{ 
                 background: GRADIENTES.cardGradient,
                 border: `1px solid ${CORES_PRIMARIAS.azulClaro}30`
               }}>
            <div className="text-center mb-6">
              <FaGlobeAmericas style={{ color: CORES_SECUNDARIAS.ciano, fontSize: '3rem' }} className="mb-4" />
              <h2 className="text-2xl font-bold mb-4" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
                Nossa História
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto" 
               style={{ color: CORES_PRIMARIAS.cinzaNeutro }}>
              Mais do que entregar projetos, queremos construir <strong style={{ color: CORES_SECUNDARIAS.ciano }}>relações duradouras</strong>. 
              Nosso time une experiência em desenvolvimento, design e estratégia digital para gerar 
              <strong style={{ color: CORES_PRIMARIAS.azulPrincipal }}> valor real</strong> e 
              resultados consistentes para nossos clientes.
            </p>
          </div>
        </motion.div>
      </Container>

      {/* Achievements Section */}
      <Container className="w-full mb-16">
        <Row className="g-4">
          {achievements.map((achievement, index) => (
            <Col md={6} lg={3} key={index}>
              <motion.div
                variants={statVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
                viewport={{ once: true }}
              >
                <div className="rounded-3xl p-5 shadow-lg hover-lift"
                     style={{ 
                       background: GRADIENTES.cardGradient,
                       border: `1px solid ${CORES_PRIMARIAS.azulClaro}30`
                     }}>
                  <div className="mb-3" style={{ color: CORES_SECUNDARIAS.laranjaWarn, fontSize: '2.5rem' }}>
                    {achievement.icon}
                  </div>
                  <h3 className="fw-bold mb-1" style={{ color: CORES_PRIMARIAS.azulEscuro, fontSize: '2rem' }}>
                    {achievement.number}
                  </h3>
                  <p className="mb-0" style={{ color: CORES_PRIMARIAS.cinzaNeutro }}>
                    {achievement.label}
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
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="w-full h-[3px]" 
             style={{ 
               background: `linear-gradient(90deg, transparent 0%, ${CORES_PRIMARIAS.azulPrincipal} 20%, ${CORES_SECUNDARIAS.laranjaWarn} 50%, ${CORES_PRIMARIAS.azulPrincipal} 80%, transparent 100%)` 
             }} />
      </motion.div>

      {/* MVV Section */}
      <Container className="w-full" style={{ marginBottom: '80px' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center" style={{ marginBottom: '24px' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
              Nossos Pilares
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: CORES_PRIMARIAS.cinzaNeutro }}>
              Missão, Visão e Valores que guiam cada decisão e projeto
            </p>
          </div>

          <Row className="g-5">
            {values.map((value) => (
              <Col lg={4} key={value.id}>
                <motion.div variants={cardVariants}>
                  <div 
                    className="rounded-3xl shadow-lg border-0 overflow-hidden hover-lift d-flex flex-column"
                    style={{ 
                      background: GRADIENTES.cardGradient,
                      height: '520px',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      border: `1px solid ${CORES_PRIMARIAS.azulClaro}30`
                    }}
                  >
                    {/* Header */}
                    <div className="p-5 text-center"
                         style={{ 
                           background: `linear-gradient(135deg, ${value.color}15, ${value.color}05)`,
                           borderBottom: `2px solid ${value.color}20`
                         }}>
                      <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
                           style={{ 
                             width: '80px', 
                             height: '80px',
                             backgroundColor: value.color,
                             fontSize: '2rem',
                             color: CORES_PRIMARIAS.brancoPuro
                           }}>
                        {value.icon}
                      </div>
                      <h3 className="fw-bold mb-3" style={{ color: CORES_PRIMARIAS.azulEscuro, fontSize: '1.5rem' }}>
                        {value.title}
                      </h3>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-grow-1 d-flex flex-column">
                      <p className="mb-4" style={{ color: CORES_PRIMARIAS.cinzaNeutro, lineHeight: 1.6 }}>
                        {value.description}
                      </p>

                      {/* Details */}
                      <div className="flex-grow-1">
                        <h6 className="fw-bold mb-3" style={{ color: value.color }}>
                          Características:
                        </h6>
                        <ul className="list-unstyled">
                          {value.details.map((detail, idx) => (
                            <li key={idx} className="mb-2 d-flex align-items-center">
                              <FaHandshake style={{ color: value.color }} className="me-2" size={12} />
                              <span style={{ color: CORES_PRIMARIAS.azulEscuro, fontSize: '0.9rem' }}>
                                {detail}
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

      {/* Team & Methodology */}
      <Container className="w-full mb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row className="g-5 justify-content-center">
            {team.map((item) => (
              <Col lg={6} key={item.id}>
                <motion.div variants={cardVariants}>
                  <div 
                    className="h-100 rounded-3xl shadow-lg border-0 overflow-hidden hover-lift"
                    style={{ 
                      background: GRADIENTES.cardGradient,
                      minHeight: '350px',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      border: `1px solid ${CORES_PRIMARIAS.azulClaro}30`
                    }}
                  >
                    {/* Header */}
                    <div className="p-5 text-center"
                         style={{ 
                           background: `linear-gradient(135deg, ${item.color}15, ${item.color}05)`,
                           borderBottom: `2px solid ${item.color}20`
                         }}>
                      <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
                           style={{ 
                             width: '80px', 
                             height: '80px',
                             backgroundColor: item.color,
                             fontSize: '2rem',
                             color: CORES_PRIMARIAS.brancoPuro
                           }}>
                        {item.icon}
                      </div>
                      <h3 className="fw-bold mb-3" style={{ color: CORES_PRIMARIAS.azulEscuro, fontSize: '1.5rem' }}>
                        {item.title}
                      </h3>
                    </div>

                    {/* Content */}
                    <div className="p-5 d-flex align-items-center justify-content-center">
                      <p className="mb-0 text-center" style={{ color: CORES_PRIMARIAS.cinzaNeutro, lineHeight: 1.6 }}>
                        {item.description}
                      </p>
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