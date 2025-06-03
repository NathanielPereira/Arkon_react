import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Button, Badge, Modal, Form } from 'react-bootstrap';
import { 
  FaCheck, 
  FaWhatsapp, 
  FaStar, 
  FaRocket, 
  FaBuilding, 
  FaSeedling,
  FaGem,
  FaClock,
  FaUsers,
  FaShoppingCart,
  FaSearch,
  FaMobile,
  FaGlobe,
  FaBlog,
  FaTools,
  FaHeadset,
  FaChartLine,
  FaShieldAlt,
  FaTrophy,
  FaLightbulb,
  FaArrowRight
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

interface PlanFeature {
  text: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

interface ServicePlan {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  targetAudience: string;
  deliveryTime: string;
  support: string;
  icon: React.ReactNode;
  color: string;
  badge?: string;
  badgeColor?: string;
  features: PlanFeature[];
  cta: string;
  popular?: boolean;
  priceRange?: string;
}

const Planos: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const plans: ServicePlan[] = [
    {
      id: 'starter',
      name: 'Starter',
      subtitle: 'Presença Digital Essencial',
      description: 'Perfeito para autônomos e microempresas que precisam de uma presença digital rápida, profissional e eficiente.',
      targetAudience: 'Autônomos e Microempresas',
      deliveryTime: '5 dias úteis',
      support: '30 dias',
      priceRange: 'R$ 800 - R$ 1.200',
      icon: <FaSeedling />,
      color: CORES_SECUNDARIAS.verdeForest,
      features: [
        { text: 'Site de até 2 páginas (Home + Contato)', icon: <FaGlobe /> },
        { text: 'Design responsivo (mobile + desktop)', icon: <FaMobile /> },
        { text: 'Integração com WhatsApp Business', icon: <FaWhatsapp />, highlight: true },
        { text: 'Cadastro no Google Meu Negócio', icon: <FaSearch /> },
        { text: '1 rodada de revisão', icon: <FaTools /> },
        { text: 'Suporte pós-entrega (30 dias)', icon: <FaHeadset /> }
      ],
      cta: 'Ideal para começar'
    },
    {
      id: 'standard',
      name: 'Standard',
      subtitle: 'Site Completo e Profissional',
      description: 'Solução completa para PMEs e profissionais liberais que desejam um site robusto com SEO e recursos avançados.',
      targetAudience: 'PMEs e Profissionais Liberais',
      deliveryTime: '7 dias úteis',
      support: '30 dias',
      priceRange: 'R$ 1.500 - R$ 2.200',
      icon: <FaBuilding />,
      color: CORES_PRIMARIAS.azulPrincipal,
      badge: 'Mais Popular',
      badgeColor: CORES_SECUNDARIAS.laranjaWarn,
      popular: true,
      features: [
        { text: 'Site de até 5 páginas completas', icon: <FaGlobe /> },
        { text: 'Design personalizado e responsivo', icon: <FaMobile /> },
        { text: 'WhatsApp + Formulário de contato', icon: <FaWhatsapp />, highlight: true },
        { text: 'Otimização inicial no Google Meu Negócio', icon: <FaSearch /> },
        { text: 'SEO on-page básico (meta tags, URLs)', icon: <FaChartLine /> },
        { text: '2 rodadas de revisão', icon: <FaTools /> },
        { text: 'Suporte pós-entrega (30 dias)', icon: <FaHeadset /> }
      ],
      cta: 'Mais popular'
    },
    {
      id: 'premium',
      name: 'Premium',
      subtitle: 'Presença Digital Robusta',
      description: 'Para empresas que desejam presença digital completa com blog, SEO avançado e funcionalidades premium.',
      targetAudience: 'Empresas Estabelecidas',
      deliveryTime: '10 dias úteis',
      support: '60 dias',
      priceRange: 'R$ 2.800 - R$ 4.000',
      icon: <FaGem />,
      color: CORES_SECUNDARIAS.roxoTech,
      badge: 'Recomendado',
      badgeColor: CORES_SECUNDARIAS.ciano,
      features: [
        { text: 'Site de até 8 páginas + Blog', icon: <FaGlobe /> },
        { text: 'Design premium com identidade visual', icon: <FaStar />, highlight: true },
        { text: 'WhatsApp + Chat Online integrado', icon: <FaWhatsapp /> },
        { text: 'Google Meu Negócio + otimização avançada', icon: <FaSearch /> },
        { text: 'SEO completo + Google Analytics', icon: <FaChartLine />, highlight: true },
        { text: 'Blog funcional + 3 posts exemplo', icon: <FaBlog /> },
        { text: '3 rodadas de revisão', icon: <FaTools /> },
        { text: 'Treinamento personalizado incluído', icon: <FaUsers />, highlight: true },
        { text: 'Suporte estendido (60 dias)', icon: <FaHeadset /> }
      ],
      cta: 'Recomendado'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      subtitle: 'Solução Sob Medida',
      description: 'Desenvolvimento personalizado para empresas com necessidades específicas, integrações avançadas e funcionalidades complexas.',
      targetAudience: 'Empresas com Necessidades Específicas',
      deliveryTime: '15-20 dias úteis',
      support: '90 dias',
      priceRange: 'Sob consulta',
      icon: <FaRocket />,
      color: CORES_PRIMARIAS.azulEscuro,
      features: [
        { text: 'Site sob medida (páginas ilimitadas)', icon: <FaGlobe /> },
        { text: 'Design 100% personalizado + prototipagem', icon: <FaStar />, highlight: true },
        { text: 'Integrações avançadas (CRM, ERP)', icon: <FaTools />, highlight: true },
        { text: 'SEO avançado + Tag Manager', icon: <FaChartLine /> },
        { text: 'E-commerce ou Sistema de Agendamento', icon: <FaShoppingCart />, highlight: true },
        { text: '4 rodadas de revisão + QA completo', icon: <FaTools /> },
        { text: 'Treinamento presencial/remoto', icon: <FaUsers />, highlight: true },
        { text: 'Suporte premium (90 dias)', icon: <FaHeadset /> }
      ],
      cta: 'Sob consulta'
    }
  ];

  const benefits = [
    {
      icon: <FaClock />,
      title: 'Entrega Rápida',
      description: 'Projetos entregues no prazo combinado, sem atrasos'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Garantia Total',
      description: 'Suporte completo e garantia de funcionamento'
    },
    {
      icon: <FaTrophy />,
      title: 'Qualidade Premium',
      description: 'Design moderno e código otimizado para performance'
    },
    {
      icon: <FaLightbulb />,
      title: 'Consultoria Incluída',
      description: 'Orientação estratégica para maximizar resultados'
    }
  ];

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    setShowModal(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const plan = plans.find(p => p.id === selectedPlan);
    const whatsappMessage = `Olá! Tenho interesse no plano *${plan?.name}* (${plan?.subtitle}). 
    
Meus dados:
- Nome: ${formData.name}
- Email: ${formData.email}
- Telefone: ${formData.phone}
- Empresa: ${formData.company}
- Mensagem: ${formData.message}

Gostaria de receber um orçamento personalizado!`;

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    setShowModal(false);
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
          Planos e Investimentos
        </h1>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 text-center leading-relaxed font-medium" 
           style={{ color: CORES_PRIMARIAS.azulEscuro }}>
          Soluções digitais personalizadas para <span style={{ color: CORES_SECUNDARIAS.laranjaWarn }}>cada necessidade</span> e orçamento
        </p>
        <p className="text-lg max-w-3xl mx-auto text-center leading-relaxed" 
           style={{ color: CORES_PRIMARIAS.cinzaNeutro }}>
          Escolha o plano ideal para seu negócio e comece a conquistar mais clientes online
        </p>
      </motion.div>

      {/* Benefits Section */}
      <Container className="w-full mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Row className="g-4">
            {benefits.map((benefit, index) => (
              <Col md={6} lg={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center rounded-3xl p-5 shadow-lg hover-lift"
                       style={{ 
                         background: GRADIENTES.cardGradient,
                         border: `1px solid ${CORES_PRIMARIAS.azulClaro}30`,
                         minHeight: '200px'
                       }}>
                    <div className="mb-3" style={{ color: CORES_SECUNDARIAS.laranjaWarn, fontSize: '2.5rem' }}>
                      {benefit.icon}
                    </div>
                    <h5 className="fw-bold mb-3" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
                      {benefit.title}
                    </h5>
                    <p className="mb-0" style={{ color: CORES_PRIMARIAS.cinzaNeutro, fontSize: '0.9rem' }}>
                      {benefit.description}
                    </p>
                  </div>
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

      {/* Plans Section */}
      <Container className="w-full mb-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center" style={{ marginBottom: '24px' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
              Escolha Seu Plano Ideal
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: CORES_PRIMARIAS.cinzaNeutro }}>
              Cada plano foi desenvolvido para atender diferentes necessidades e estágios de crescimento
            </p>
          </div>

          <Row className="g-5 justify-content-center">
            {plans.map((plan) => (
              <Col lg={6} xl={3} key={plan.id}>
                <motion.div variants={cardVariants}>
                  <div 
                    className="h-100 rounded-3 shadow-lg border-0 overflow-hidden hover-lift position-relative"
                    style={{ 
                      background: GRADIENTES.cardGradient,
                      minHeight: plan.id === 'starter' ? '700px' : 
                                 plan.id === 'standard' ? '720px' : 
                                 plan.id === 'premium' ? '750px' : 
                                 plan.id === 'enterprise' ? '780px' : '720px',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      border: plan.popular ? `3px solid ${CORES_SECUNDARIAS.laranjaWarn}` : `1px solid ${CORES_PRIMARIAS.azulClaro}30`,
                      transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
                      marginTop: plan.popular ? '20px' : (plan.badge ? '40px' : '0'),
                      boxShadow: plan.popular ? `0 20px 50px ${CORES_SECUNDARIAS.laranjaWarn}30, 0 0 0 2px ${CORES_SECUNDARIAS.laranjaWarn}30` : '0 10px 30px rgba(0,0,0,0.1)',
                      position: 'relative',
                      zIndex: plan.popular ? 2 : 1
                    }}
                  >
                    {/* Badge do Plano */}
                    {plan.badge && (
                      <div
                        className="position-absolute start-50 translate-middle-x"
                        style={{ top: '-35px', zIndex: 10 }}
                      >
                        <Badge
                          className="px-4 py-2 rounded-pill fw-bold shadow-lg"
                          style={{
                            backgroundColor: plan.badgeColor,
                            color: CORES_PRIMARIAS.brancoPuro,
                            fontSize: '0.9rem',
                            boxShadow: `0 6px 15px ${plan.badgeColor}40`,
                            letterSpacing: '0.01em',
                          }}
                        >
                          <FaStar className="me-2" />
                          {plan.badge}
                        </Badge>
                      </div>
                    )}

                    {/* Header do Plano */}
                    <div
                      className="p-5 text-center"
                      style={{
                        background: GRADIENTES.cardGradient,
                        borderBottom: `1px solid ${CORES_PRIMARIAS.azulClaro}30`,
                        paddingTop: plan.badge ? '50px' : '32px',
                        position: 'relative',
                      }}
                    >
                      
                      <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
                           style={{ 
                             width: '80px', 
                             height: '80px',
                             backgroundColor: plan.color,
                             fontSize: '2rem',
                             color: CORES_PRIMARIAS.brancoPuro
                           }}>
                        {plan.icon}
                      </div>
                      <h3 className="fw-bold mb-2" style={{ 
                        color: CORES_PRIMARIAS.azulEscuro, 
                        fontSize: '1.8rem'
                      }}>
                        {plan.name}
                      </h3>
                      <p className="fw-semibold mb-3" style={{ 
                        color: plan.color, 
                        fontSize: '1.1rem',
                        fontWeight: '600'
                      }}>
                        {plan.subtitle}
                      </p>
                      
                      {/* Price Box */}
                      <div className="mb-3">
                        <span className="fw-bold" style={{ 
                          color: CORES_PRIMARIAS.azulPrincipal, 
                          fontSize: '1.2rem'
                        }}>
                          {plan.priceRange}
                        </span>
                      </div>
                    </div>

                    {/* Conteúdo do Plano */}
                    <div className="p-5 d-flex flex-column">
                      <p className="mb-4" style={{ color: CORES_PRIMARIAS.cinzaNeutro, lineHeight: 1.6 }}>
                        {plan.description}
                      </p>

                      {/* Informações Rápidas */}
                      <div className="mb-4 rounded-3 p-4" style={{ backgroundColor: `${CORES_PRIMARIAS.azulClaro}20` }}>
                        <Row className="g-3 text-center">
                          <Col>
                            <div className="mb-2">
                              <FaClock style={{ color: plan.color }} />
                            </div>
                            <small className="fw-semibold d-block" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
                              Entrega
                            </small>
                            <small style={{ color: CORES_PRIMARIAS.cinzaNeutro }}>
                              {plan.deliveryTime}
                            </small>
                          </Col>
                          <Col>
                            <div className="mb-2">
                              <FaHeadset style={{ color: plan.color }} />
                            </div>
                            <small className="fw-semibold d-block" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
                              Suporte
                            </small>
                            <small style={{ color: CORES_PRIMARIAS.cinzaNeutro }}>
                              {plan.support}
                            </small>
                          </Col>
                        </Row>
                      </div>

                      {/* Features */}
                      <div className="mb-5 flex-grow-1">
                        <h6 className="fw-bold mb-3" style={{ color: plan.color }}>
                          O que está incluso:
                        </h6>
                        <ul className="list-unstyled">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className={`mb-3 d-flex align-items-start ${feature.highlight ? 'highlight-feature' : ''}`}>
                              <div className="me-3 mt-1 rounded-circle p-1"
                                   style={{ 
                                     backgroundColor: feature.highlight ? '#10B981' : '#059669',
                                     color: CORES_PRIMARIAS.brancoPuro,
                                     fontSize: '0.7rem',
                                     minWidth: '20px',
                                     height: '20px',
                                     display: 'flex',
                                     alignItems: 'center',
                                     justifyContent: 'center'
                                   }}>
                                <FaCheck />
                              </div>
                              <span style={{ 
                                color: feature.highlight ? CORES_PRIMARIAS.azulEscuro : CORES_PRIMARIAS.cinzaNeutro, 
                                fontSize: '0.9rem',
                                fontWeight: feature.highlight ? '600' : '400',
                                lineHeight: '1.4'
                              }}>
                                {feature.text}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-auto pt-3">
                        <Button
                          onClick={() => handlePlanSelect(plan.id)}
                          className="w-100 fw-bold py-4 rounded-pill border-0"
                          style={{ 
                            background: plan.popular 
                              ? 'linear-gradient(135deg, #10B981, #059669)'
                              : `linear-gradient(135deg, ${plan.color}, ${CORES_PRIMARIAS.azulPrincipal})`,
                            color: CORES_PRIMARIAS.brancoPuro,
                            transition: 'all 0.3s ease',
                            fontSize: '1.1rem',
                            fontWeight: '600'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = `0 8px 25px ${plan.color}40`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        >
                          Solicitar Orçamento
                          <FaArrowRight className="ms-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>

      {/* Call to Action Personalizado */}
      <Container className="w-full mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="rounded-3xl shadow-lg p-8 text-center"
               style={{ 
                 background: `linear-gradient(135deg, ${CORES_PRIMARIAS.azulPrincipal} 0%, ${CORES_PRIMARIAS.azulEscuro} 100%)`,
                 color: CORES_PRIMARIAS.brancoPuro
               }}>
            <h3 className="fw-bold mb-4 text-white">
              Não encontrou o plano ideal?
            </h3>
            <p className="mb-5 text-white lead">
              Desenvolvemos soluções personalizadas para cada necessidade. Entre em contato e vamos criar algo único para seu negócio!
            </p>
            <Button
              href="https://wa.me/5511999999999?text=Olá! Não encontrei o plano ideal no site e gostaria de uma solução personalizada. Podem me ajudar?"
              target="_blank"
              className="fw-bold px-5 py-3 rounded-pill border-0"
              style={{ 
                backgroundColor: CORES_PRIMARIAS.brancoPuro,
                color: CORES_PRIMARIAS.azulPrincipal,
                fontSize: '1.1rem',
                boxShadow: '0 4px 15px rgba(255,255,255,0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,255,255,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(255,255,255,0.2)';
              }}
            >
              <FaWhatsapp className="me-2" />
              Conversar no WhatsApp
              <FaArrowRight className="ms-2" />
            </Button>
          </div>
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

      {/* Modal de Orçamento */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton style={{ backgroundColor: CORES_PRIMARIAS.azulClaro, border: 'none' }}>
          <Modal.Title className="fw-bold" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
            <FaWhatsapp className="me-2" style={{ color: CORES_SECUNDARIAS.ciano }} />
            Solicitar Orçamento - {plans.find(p => p.id === selectedPlan)?.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <div className="mb-4 p-4 rounded-3"
               style={{ backgroundColor: `${CORES_PRIMARIAS.azulClaro}50` }}>
            <h5 className="fw-bold mb-2" style={{ color: CORES_PRIMARIAS.azulPrincipal }}>
              {plans.find(p => p.id === selectedPlan)?.subtitle}
            </h5>
            <p className="mb-0" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
              {plans.find(p => p.id === selectedPlan)?.description}
            </p>
          </div>

          <Form onSubmit={handleSubmit}>
            <Row className="g-3">
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
                    Nome Completo *
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="py-3"
                    style={{ borderColor: CORES_PRIMARIAS.azulClaro }}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
                    WhatsApp *
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="py-3"
                    style={{ borderColor: CORES_PRIMARIAS.azulClaro }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="g-3">
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
                    Email *
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="py-3"
                    style={{ borderColor: CORES_PRIMARIAS.azulClaro }}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
                    Empresa
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nome da empresa (opcional)"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="py-3"
                    style={{ borderColor: CORES_PRIMARIAS.azulClaro }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-4">
              <Form.Label className="fw-semibold" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
                Conte-nos sobre seu projeto
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Descreva brevemente suas necessidades e objetivos..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                style={{ borderColor: CORES_PRIMARIAS.azulClaro }}
              />
            </Form.Group>

            <div className="d-flex gap-3">
              <Button 
                variant="outline-secondary" 
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-pill"
              >
                Cancelar
              </Button>
              <Button 
                type="submit"
                className="flex-grow-1 fw-bold py-3 rounded-pill border-0"
                style={{ 
                  backgroundColor: CORES_SECUNDARIAS.ciano,
                  color: CORES_PRIMARIAS.brancoPuro
                }}
              >
                <FaWhatsapp className="me-2" />
                Enviar via WhatsApp
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      <style>{`
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12) !important;
        }
        
        .highlight-feature {
          background: linear-gradient(135deg, ${CORES_SECUNDARIAS.laranjaWarn}10, transparent);
          border-radius: 8px;
          padding: 8px;
          margin: -8px;
        }
        
        .form-control:focus {
          border-color: ${CORES_SECUNDARIAS.ciano} !important;
          box-shadow: 0 0 0 0.2rem rgba(0, 201, 167, 0.25) !important;
        }
        
        /* Animações Estratégicas para Conversão */
        @keyframes borderPulse {
          0%, 100% {
            border-color: ${CORES_SECUNDARIAS.laranjaWarn};
            box-shadow: 0 0 0 0 ${CORES_SECUNDARIAS.laranjaWarn}40;
          }
          50% {
            border-color: ${CORES_SECUNDARIAS.laranjaWarn}CC;
            box-shadow: 0 0 0 8px transparent;
          }
        }
        
        @keyframes badgeGlow {
          0% {
            box-shadow: 0 10px 30px ${CORES_SECUNDARIAS.laranjaWarn}50, 0 0 20px ${CORES_SECUNDARIAS.laranjaWarn}30;
          }
          100% {
            box-shadow: 0 15px 40px ${CORES_SECUNDARIAS.laranjaWarn}70, 0 0 30px ${CORES_SECUNDARIAS.laranjaWarn}50;
          }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
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
        
        /* Melhoria na responsividade */
        @media (max-width: 768px) {
          .plan-popular {
            transform: scale(1) !important;
            margin-top: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Planos; 