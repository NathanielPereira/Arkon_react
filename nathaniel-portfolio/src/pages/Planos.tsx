import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Button, Badge, Modal, Form } from 'react-bootstrap';
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
  FaChartLine
} from 'react-icons/fa';

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
      description: 'Perfeito para autônomos e microempresas que precisam de uma presença digital rápida e eficiente.',
      targetAudience: 'Autônomos e Microempresas',
      deliveryTime: '5 dias úteis',
      support: '30 dias',
      icon: <FaSeedling />,
      color: 'success',
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
      description: 'Solução completa para PMEs e profissionais liberais que desejam um site robusto com SEO.',
      targetAudience: 'PMEs e Profissionais Liberais',
      deliveryTime: '7 dias úteis',
      support: '30 dias',
      icon: <FaBuilding />,
      color: 'primary',
      badge: 'Mais Popular',
      badgeColor: 'warning',
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
      description: 'Para empresas que desejam presença digital completa com blog e funcionalidades avançadas.',
      targetAudience: 'Empresas Estabelecidas',
      deliveryTime: '10 dias úteis',
      support: '60 dias',
      icon: <FaGem />,
      color: 'info',
      badge: 'Recomendado',
      badgeColor: 'info',
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
      description: 'Desenvolvimento personalizado para empresas com necessidades específicas e funcionalidades avançadas.',
      targetAudience: 'Empresas com Necessidades Específicas',
      deliveryTime: '15-20 dias úteis',
      support: '90 dias',
      icon: <FaRocket />,
      color: 'dark',
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
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-light">
      {/* Hero Section */}
      <Container fluid className="bg-dark text-white py-5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-5"
          >
            <h1 className="display-4 fw-bold mb-4">
              Planos de <span className="text-primary">Serviços</span>
            </h1>
            <p className="lead mb-4 text-light opacity-75">
              Escolha o plano ideal para sua empresa e transforme sua presença digital
            </p>
            <p className="h5 text-warning">
              Soluções que brilham os olhos e convertem visitantes em clientes
            </p>
          </motion.div>
        </Container>
      </Container>

      {/* Plans Section */}
      <Container className="py-5">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="py-4"
        >
          <Row className="g-4">
            {plans.map((plan, index) => (
              <Col lg={6} xl={3} key={plan.id}>
                <motion.div variants={cardVariants}>
                  <Card 
                    className={`h-100 shadow-lg border-0 ${plan.popular ? 'border-warning border-3' : ''}`}
                    style={{ 
                      transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {plan.badge && (
                      <div className="position-absolute top-0 start-50 translate-middle">
                        <Badge bg={plan.badgeColor} className="px-3 py-2 fs-6">
                          {plan.badge}
                        </Badge>
                      </div>
                    )}

                    <Card.Header className={`bg-${plan.color} text-white text-center py-4`}>
                      <div className="display-4 mb-3">
                        {plan.icon}
                      </div>
                      <h3 className="fw-bold">{plan.name}</h3>
                      <p className="mb-0 opacity-75">{plan.subtitle}</p>
                    </Card.Header>

                    <Card.Body className="p-4">
                      <p className="text-muted mb-4 leading-relaxed">
                        {plan.description}
                      </p>

                      <div className="mb-4">
                        <div className="d-flex align-items-center mb-2">
                          <FaUsers className="text-primary me-2" />
                          <small className="text-muted">
                            <strong>Público:</strong> {plan.targetAudience}
                          </small>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <FaClock className="text-primary me-2" />
                          <small className="text-muted">
                            <strong>Entrega:</strong> {plan.deliveryTime}
                          </small>
                        </div>
                        <div className="d-flex align-items-center">
                          <FaHeadset className="text-primary me-2" />
                          <small className="text-muted">
                            <strong>Suporte:</strong> {plan.support}
                          </small>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h6 className="fw-bold text-dark mb-3">Incluso no plano:</h6>
                        <ul className="list-unstyled">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="mb-2 d-flex align-items-start">
                              <span className={`me-2 ${feature.highlight ? 'text-warning' : 'text-success'}`}>
                                <FaCheck />
                              </span>
                              <span className={`flex-grow-1 ${feature.highlight ? 'fw-bold text-dark' : ''}`}>
                                {feature.text}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card.Body>

                    <Card.Footer className="bg-transparent border-0 p-4 pt-0">
                      <Button
                        variant={plan.color}
                        size="lg"
                        className="w-100 fw-bold py-3"
                        onClick={() => handlePlanSelect(plan.id)}
                      >
                        Solicitar Orçamento
                        <FaWhatsapp className="ms-2" />
                      </Button>
                      <div className="text-center mt-2">
                        <small className="text-muted">{plan.cta}</small>
                      </div>
                    </Card.Footer>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center py-5 mt-5"
        >
          <Container>
            <h2 className="display-6 fw-bold mb-4">Serviços Adicionais</h2>
            <Row className="g-4">
              <Col md={4}>
                <Card className="h-100 shadow-sm border-0 bg-light">
                  <Card.Body className="text-center p-4">
                    <FaGlobe className="display-5 text-primary mb-3" />
                    <h5 className="fw-bold">Página Extra</h5>
                    <p className="text-muted">Adicione páginas específicas ao seu projeto</p>
                    <small className="text-primary fw-bold">A partir de R$ 200/página</small>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="h-100 shadow-sm border-0 bg-light">
                  <Card.Body className="text-center p-4">
                    <FaShoppingCart className="display-5 text-success mb-3" />
                    <h5 className="fw-bold">Loja Online</h5>
                    <p className="text-muted">E-commerce completo para suas vendas</p>
                    <small className="text-success fw-bold">A partir de R$ 1.200</small>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="h-100 shadow-sm border-0 bg-light">
                  <Card.Body className="text-center p-4">
                    <FaChartLine className="display-5 text-warning mb-3" />
                    <h5 className="fw-bold">SEO Mensal</h5>
                    <p className="text-muted">Otimização contínua para melhor posicionamento</p>
                    <small className="text-warning fw-bold">R$ 800/mês</small>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </motion.div>
      </Container>

      {/* Modal de Contato */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Solicitar Orçamento - {plans.find(p => p.id === selectedPlan)?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Nome *</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Telefone *</Form.Label>
                  <Form.Control
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Empresa</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Mensagem adicional</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Conte-nos mais sobre seu projeto..."
              />
            </Form.Group>
            <Button
              type="submit"
              variant="success"
              size="lg"
              className="w-100 fw-bold"
            >
              <FaWhatsapp className="me-2" />
              Enviar via WhatsApp
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Planos; 