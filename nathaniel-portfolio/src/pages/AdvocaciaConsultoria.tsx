import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Button, Form, Card, Badge, Nav, Navbar } from 'react-bootstrap';
import { 
  FaWhatsapp, 
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
  FaGavel,
  FaBuilding,
  FaHandshake,
  FaShieldAlt,
  FaCertificate,
  FaCalendarAlt,
  FaCheckCircle,
  FaGraduationCap,
  FaBalanceScale,
  FaFileContract,
  FaClock,
  FaTrophy,
  FaQuoteLeft,
  FaAward,
  FaArrowRight,
  FaStar
} from 'react-icons/fa';

const AZUL_ESCURO = "#0B2341";
const DOURADO = "#D4AF37";

const AdvocaciaConsultoria: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'consultoria',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const services = [
    {
      id: 1,
      title: 'Direito Empresarial',
      description: 'Assessoria completa para empresas, contratos comerciais e societários',
      icon: <FaBuilding />,
      color: 'primary',
      features: ['Contratos Comerciais', 'Direito Societário', 'Fusões e Aquisições', 'Compliance Empresarial']
    },
    {
      id: 2,
      title: 'Consultoria Jurídica',
      description: 'Orientação preventiva e estratégica para tomada de decisões',
      icon: <FaHandshake />,
      color: 'success',
      features: ['Análise de Riscos', 'Pareceres Jurídicos', 'Due Diligence', 'Consultoria Preventiva']
    },
    {
      id: 3,
      title: 'Direito Trabalhista',
      description: 'Defesa em processos trabalhistas e compliance de RH',
      icon: <FaGavel />,
      color: 'warning',
      features: ['Processos Trabalhistas', 'Compliance de RH', 'Políticas Internas', 'Auditoria Trabalhista']
    },
    {
      id: 4,
      title: 'Direito Tributário',
      description: 'Planejamento fiscal e defesas em autuações tributárias',
      icon: <FaFileContract />,
      color: 'info',
      features: ['Planejamento Tributário', 'Defesas Fiscais', 'Consultoria Fiscal', 'Elisão Fiscal']
    }
  ];

  const team = [
    {
      name: 'Dr. Ricardo Santos',
      position: 'Sócio Fundador',
      expertise: 'Direito Empresarial',
      experience: '20+ anos',
      image: '/api/placeholder/300/400',
      oab: 'OAB/SP 123.456',
      description: 'Especialista em Direito Empresarial com vasta experiência em grandes corporações.'
    },
    {
      name: 'Dra. Ana Oliveira',
      position: 'Sócia',
      expertise: 'Direito Trabalhista',
      experience: '15+ anos',
      image: '/api/placeholder/300/400',
      oab: 'OAB/SP 234.567',
      description: 'Referência em Direito Trabalhista, atuando em complexos processos corporativos.'
    },
    {
      name: 'Dr. Carlos Lima',
      position: 'Advogado Senior',
      expertise: 'Direito Tributário',
      experience: '12+ anos',
      image: '/api/placeholder/300/400',
      oab: 'OAB/SP 345.678',
      description: 'Expert em planejamento tributário e otimização fiscal para empresas.'
    }
  ];

  const testimonials = [
    {
      text: "Excelente atendimento e expertise jurídica. Conseguiram resolver nosso caso complexo com eficiência e economia de 40% nos custos tributários.",
      author: "João Silva",
      company: "CEO, TechCorp Soluções",
      rating: 5,
      result: "Economia de R$ 2.5M em tributos"
    },
    {
      text: "Profissionais competentes e comprometidos. O escritório nos ajudou a evitar uma multa de R$ 800mil e estruturou nosso compliance.",
      author: "Maria Santos",
      company: "Diretora Jurídica, LogisPro",
      rating: 5,
      result: "Evitou multa de R$ 800k"
    },
    {
      text: "Parceiros estratégicos do nosso crescimento. Nos orientaram em toda reestruturação societária da empresa.",
      author: "Pedro Costa",
      company: "Fundador, InnovaTech",
      rating: 5,
      result: "Reestruturação bem-sucedida"
    }
  ];

  const stats = [
    { number: "500+", label: "Casos Vencidos", icon: <FaTrophy /> },
    { number: "200+", label: "Empresas Atendidas", icon: <FaBuilding /> },
    { number: "20+", label: "Anos de Experiência", icon: <FaCalendarAlt /> },
    { number: "98%", label: "Taxa de Sucesso", icon: <FaAward /> }
  ];

  const blogPosts = [
    {
      title: "Nova Lei de Proteção de Dados (LGPD) para Empresas",
      excerpt: "Entenda as principais mudanças e como adequar sua empresa às novas exigências.",
      date: "15 Jan 2024",
      category: "Compliance",
      readTime: "5 min"
    },
    {
      title: "Planejamento Tributário: Como Reduzir Custos Legalmente",
      excerpt: "Estratégias eficazes para otimização tributária dentro da legalidade.",
      date: "10 Jan 2024",
      category: "Tributário",
      readTime: "7 min"
    },
    {
      title: "Contratos Empresariais: Cláusulas Essenciais",
      excerpt: "Principais pontos de atenção na elaboração de contratos comerciais.",
      date: "05 Jan 2024",
      category: "Empresarial",
      readTime: "6 min"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Olá! Gostaria de agendar uma consulta jurídica.

Dados para contato:
- Nome: ${formData.name}
- Email: ${formData.email}
- Telefone: ${formData.phone}
- Empresa: ${formData.company}
- Assunto: ${formData.subject === 'consultoria' ? 'Consultoria Jurídica' : formData.subject === 'trabalhista' ? 'Direito Trabalhista' : formData.subject === 'tributario' ? 'Direito Tributário' : 'Direito Empresarial'}
- Mensagem: ${formData.message}

Aguardo retorno para agendarmos uma reunião.`;

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    setShowSuccess(true);
    
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar bg="dark" variant="dark" expand="lg" className="py-3 fixed-top">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-4">
            <FaBalanceScale className="me-2" style={{ color: DOURADO }} />
            Santos & Oliveira Advocacia
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Início</Nav.Link>
              <Nav.Link href="#servicos">Serviços</Nav.Link>
              <Nav.Link href="#equipe">Equipe</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#contato">Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section id="home" className="bg-dark text-white" style={{ paddingTop: '100px', minHeight: '100vh' }}>
        <Container className="h-100 d-flex align-items-center">
          <Row className="w-100 align-items-center">
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Badge bg="warning" className="mb-3 p-3 fs-6">
                  <FaCertificate className="me-2" />
                  20+ Anos de Excelência Jurídica
                </Badge>
                <h1 className="display-3 fw-bold mb-4">
                  Proteção Jurídica 
                  <span style={{ color: DOURADO }}> Estratégica</span> para Seu Negócio
                </h1>
                <p className="lead mb-4 opacity-90">
                  Especialistas em Direito Empresarial, Trabalhista e Tributário. 
                  Soluções jurídicas que protegem, otimizam e impulsionam o crescimento da sua empresa.
                </p>
                
                {/* Stats Cards */}
                <Row className="g-3 mb-4">
                  {stats.slice(0, 2).map((stat, index) => (
                    <Col md={6} key={index}>
                      <div className="d-flex align-items-center bg-white bg-opacity-10 rounded-3 p-3">
                        <div className="me-3 text-warning" style={{ fontSize: '1.5rem' }}>
                          {stat.icon}
                        </div>
                        <div>
                          <h4 className="mb-0 fw-bold">{stat.number}</h4>
                          <small className="opacity-75">{stat.label}</small>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>

                <div className="d-flex gap-3">
                  <Button 
                    variant="warning" 
                    size="lg" 
                    className="fw-bold px-5 py-3"
                    href="#contato"
                  >
                    <FaWhatsapp className="me-2" />
                    Consulta Gratuita
                  </Button>
                  <Button 
                    variant="outline-light" 
                    size="lg" 
                    className="fw-bold px-5 py-3"
                    href="#servicos"
                  >
                    Nossos Serviços
                  </Button>
                </div>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <img 
                  src="/api/placeholder/600/500" 
                  alt="Escritório de Advocacia Santos & Oliveira"
                  className="img-fluid rounded-3 shadow-lg"
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <Row className="g-4">
            {stats.map((stat, index) => (
              <Col md={6} lg={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-white rounded-3 p-4 shadow-sm hover-lift">
                    <div className="text-warning mb-3" style={{ fontSize: '2.5rem' }}>
                      {stat.icon}
                    </div>
                    <h3 className="fw-bold mb-1" style={{ color: AZUL_ESCURO }}>
                      {stat.number}
                    </h3>
                    <p className="text-muted mb-0">{stat.label}</p>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-5">
        <Container>
          <div className="text-center mb-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="display-5 fw-bold mb-3" style={{ color: AZUL_ESCURO }}>
                Áreas de Especialização
              </h2>
              <p className="lead text-muted mb-5">
                Soluções jurídicas completas e especializadas para cada necessidade da sua empresa
              </p>
            </motion.div>
          </div>

          <Row className="g-4">
            {services.map((service, index) => (
              <Col md={6} lg={6} key={service.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-100 shadow-lg border-0 hover-lift">
                    <Card.Body className="p-5">
                      <div className="d-flex align-items-start mb-4">
                        <div className={`bg-${service.color} text-white rounded-3 d-inline-flex align-items-center justify-content-center me-4`} 
                             style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                          {service.icon}
                        </div>
                        <div className="flex-grow-1">
                          <h4 className="fw-bold mb-2" style={{ color: AZUL_ESCURO }}>
                            {service.title}
                          </h4>
                          <p className="text-muted mb-4">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h6 className="fw-bold mb-3" style={{ color: AZUL_ESCURO }}>
                          Serviços Inclusos:
                        </h6>
                        <ul className="list-unstyled">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="mb-2 d-flex align-items-center">
                              <FaCheckCircle className="text-success me-2" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button 
                        variant={`outline-${service.color}`}
                        className="w-100 fw-bold"
                        href="#contato"
                      >
                        Solicitar Consultoria
                        <FaArrowRight className="ms-2" />
                      </Button>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Depoimentos */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3" style={{ color: AZUL_ESCURO }}>
              Resultados que Falam por Si
            </h2>
            <p className="lead text-muted">
              Veja os resultados reais que conquistamos para nossos clientes
            </p>
          </div>

          <Row className="g-4">
            {testimonials.map((testimonial, index) => (
              <Col lg={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-lg h-100 hover-lift">
                    <Card.Body className="p-4">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div className="d-flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <FaStar key={i} className="text-warning me-1" />
                          ))}
                        </div>
                        <Badge bg="success" className="fw-bold">
                          {testimonial.result}
                        </Badge>
                      </div>
                      
                      <blockquote className="mb-4">
                        <FaQuoteLeft className="text-muted me-2" />
                        <em>"{testimonial.text}"</em>
                      </blockquote>
                      
                      <div className="border-top pt-3">
                        <strong style={{ color: AZUL_ESCURO }}>{testimonial.author}</strong><br />
                        <small className="text-muted">{testimonial.company}</small>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Equipe */}
      <section id="equipe" className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3" style={{ color: AZUL_ESCURO }}>
              Nossa Equipe de Especialistas
            </h2>
            <p className="lead text-muted">
              Profissionais experientes e comprometidos com resultados excepcionais
            </p>
          </div>

          <Row className="g-4">
            {team.map((member, index) => (
              <Col lg={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center border-0 shadow-lg hover-lift">
                    <div className="position-relative">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="card-img-top"
                        style={{ height: '350px', objectFit: 'cover' }}
                      />
                      <div className="position-absolute top-0 end-0 m-3">
                        <Badge bg="warning" className="p-2">
                          <FaGraduationCap className="me-1" />
                          {member.experience}
                        </Badge>
                      </div>
                    </div>
                    <Card.Body className="p-4">
                      <h5 className="fw-bold mb-1" style={{ color: AZUL_ESCURO }}>
                        {member.name}
                      </h5>
                      <p className="text-muted mb-2">{member.position}</p>
                      <p className="fw-semibold mb-3" style={{ color: DOURADO }}>
                        {member.expertise}
                      </p>
                      <p className="text-muted small mb-3">
                        {member.description}
                      </p>
                      <small className="text-muted fw-bold">{member.oab}</small>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3" style={{ color: AZUL_ESCURO }}>
              Artigos e Insights Jurídicos
            </h2>
            <p className="lead text-muted">
              Mantenha-se atualizado com as últimas novidades do mundo jurídico
            </p>
          </div>

          <Row className="g-4">
            {blogPosts.map((post, index) => (
              <Col lg={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-sm h-100 hover-lift">
                    <Card.Body className="p-4">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <Badge bg="primary">{post.category}</Badge>
                        <small className="text-muted">{post.readTime} de leitura</small>
                      </div>
                      
                      <h5 className="fw-bold mb-3" style={{ color: AZUL_ESCURO }}>
                        {post.title}
                      </h5>
                      
                      <p className="text-muted mb-4">
                        {post.excerpt}
                      </p>
                      
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">{post.date}</small>
                        <Button variant="outline-primary" size="sm">
                          Ler Mais
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
          
          <div className="text-center mt-5">
            <Button variant="primary" size="lg" className="fw-bold px-5">
              Ver Todos os Artigos
              <FaArrowRight className="ms-2" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Formulário de Contato */}
      <section id="contato" className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="shadow-lg border-0 rounded-3">
                  <Row className="g-0">
                    <Col md={6} className="bg-dark text-white d-flex align-items-center">
                      <div className="p-5">
                        <h3 className="fw-bold mb-4">
                          <FaGavel className="me-3" style={{ color: DOURADO }} />
                          Agende sua Consulta Gratuita
                        </h3>
                        <p className="mb-4 opacity-90">
                          Entre em contato conosco e receba orientação jurídica especializada. 
                          A primeira consulta é completamente gratuita e sem compromisso.
                        </p>
                        
                        <div className="mb-3 d-flex align-items-center">
                          <FaPhone className="me-3" style={{ color: DOURADO }} />
                          <span>(11) 3456-7890</span>
                        </div>
                        <div className="mb-3 d-flex align-items-center">
                          <FaWhatsapp className="me-3" style={{ color: DOURADO }} />
                          <span>(11) 99999-9999</span>
                        </div>
                        <div className="mb-3 d-flex align-items-center">
                          <FaEnvelope className="me-3" style={{ color: DOURADO }} />
                          <span>contato@santosoliveira.com.br</span>
                        </div>
                        <div className="mb-4 d-flex align-items-center">
                          <FaMapMarkerAlt className="me-3" style={{ color: DOURADO }} />
                          <span>Av. Paulista, 1000 - Conj. 1001 - São Paulo/SP</span>
                        </div>

                        <div className="mb-4">
                          <h6 className="fw-bold mb-3" style={{ color: DOURADO }}>
                            Por que escolher nosso escritório?
                          </h6>
                          <div className="d-flex align-items-center mb-2">
                            <FaCheckCircle className="me-2 text-success" />
                            <small>Consulta inicial gratuita</small>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <FaCheckCircle className="me-2 text-success" />
                            <small>Resposta em até 2 horas</small>
                          </div>
                          <div className="d-flex align-items-center">
                            <FaCheckCircle className="me-2 text-success" />
                            <small>Atendimento personalizado</small>
                          </div>
                        </div>

                        <div className="d-flex gap-3">
                          <Button variant="outline-light" size="sm" className="rounded-circle">
                            <FaLinkedin />
                          </Button>
                          <Button variant="outline-light" size="sm" className="rounded-circle">
                            <FaInstagram />
                          </Button>
                          <Button variant="outline-light" size="sm" className="rounded-circle">
                            <FaWhatsapp />
                          </Button>
                        </div>
                      </div>
                    </Col>
                    
                    <Col md={6}>
                      <div className="p-5">
                        <h4 className="fw-bold mb-4" style={{ color: AZUL_ESCURO }}>
                          Formulário de Contato
                        </h4>

                        {showSuccess && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="alert alert-success d-flex align-items-center mb-4"
                          >
                            <FaCheckCircle className="me-2" />
                            Mensagem enviada! Retornaremos em breve.
                          </motion.div>
                        )}

                        <Form onSubmit={handleSubmit}>
                          <Row>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label className="fw-semibold">Nome Completo *</Form.Label>
                                <Form.Control
                                  type="text"
                                  value={formData.name}
                                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                                  placeholder="Seu nome completo"
                                  required
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label className="fw-semibold">Telefone *</Form.Label>
                                <Form.Control
                                  type="tel"
                                  value={formData.phone}
                                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                  placeholder="(11) 99999-9999"
                                  required
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          
                          <Row>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label className="fw-semibold">Email</Form.Label>
                                <Form.Control
                                  type="email"
                                  value={formData.email}
                                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                                  placeholder="seu@email.com"
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label className="fw-semibold">Empresa</Form.Label>
                                <Form.Control
                                  type="text"
                                  value={formData.company}
                                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                                  placeholder="Nome da empresa"
                                />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">Área de Interesse</Form.Label>
                            <Form.Select
                              value={formData.subject}
                              onChange={(e) => setFormData({...formData, subject: e.target.value})}
                            >
                              <option value="consultoria">Consultoria Jurídica</option>
                              <option value="empresarial">Direito Empresarial</option>
                              <option value="trabalhista">Direito Trabalhista</option>
                              <option value="tributario">Direito Tributário</option>
                            </Form.Select>
                          </Form.Group>

                          <Form.Group className="mb-4">
                            <Form.Label className="fw-semibold">Descreva sua Necessidade</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={4}
                              value={formData.message}
                              onChange={(e) => setFormData({...formData, message: e.target.value})}
                              placeholder="Descreva brevemente sua necessidade jurídica e como podemos ajudar..."
                            />
                          </Form.Group>

                          <Button
                            type="submit"
                            variant="warning"
                            size="lg"
                            className="w-100 fw-bold py-3"
                          >
                            <FaWhatsapp className="me-2" />
                            Agendar Consulta Gratuita
                          </Button>
                          <small className="text-muted d-block mt-2 text-center">
                            <FaShieldAlt className="me-1" />
                            Seus dados estão protegidos pela LGPD • Resposta garantida em até 2 horas úteis
                          </small>
                        </Form>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <Container>
          <Row className="g-4">
            <Col md={4}>
              <h5 className="fw-bold mb-3">
                <FaBalanceScale className="me-2" style={{ color: DOURADO }} />
                Santos & Oliveira Advocacia
              </h5>
              <p className="mb-3 opacity-75">
                Excelência jurídica e comprometimento com resultados desde 2003. 
                Protegendo e fazendo crescer seu negócio com soluções estratégicas e inovadoras.
              </p>
              <div className="d-flex gap-3">
                <Button variant="outline-light" size="sm" className="rounded-circle">
                  <FaLinkedin />
                </Button>
                <Button variant="outline-light" size="sm" className="rounded-circle">
                  <FaInstagram />
                </Button>
                <Button variant="outline-light" size="sm" className="rounded-circle">
                  <FaWhatsapp />
                </Button>
              </div>
            </Col>
            
            <Col md={3}>
              <h6 className="fw-bold mb-3" style={{ color: DOURADO }}>Contato</h6>
              <p className="mb-2 opacity-75">
                <FaPhone className="me-2" /> (11) 3456-7890
              </p>
              <p className="mb-2 opacity-75">
                <FaWhatsapp className="me-2" /> (11) 99999-9999
              </p>
              <p className="mb-2 opacity-75">
                <FaEnvelope className="me-2" /> contato@santosoliveira.com.br
              </p>
              <p className="mb-0 opacity-75">
                <FaMapMarkerAlt className="me-2" /> Av. Paulista, 1000 - Conj. 1001<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;São Paulo/SP - CEP: 01310-100
              </p>
            </Col>
            
            <Col md={2}>
              <h6 className="fw-bold mb-3" style={{ color: DOURADO }}>Áreas</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#servicos" className="text-white-50 text-decoration-none">
                    Direito Empresarial
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#servicos" className="text-white-50 text-decoration-none">
                    Direito Trabalhista
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#servicos" className="text-white-50 text-decoration-none">
                    Direito Tributário
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#servicos" className="text-white-50 text-decoration-none">
                    Consultoria Jurídica
                  </a>
                </li>
              </ul>
            </Col>
            
            <Col md={3}>
              <h6 className="fw-bold mb-3" style={{ color: DOURADO }}>Horário de Atendimento</h6>
              <p className="mb-2 opacity-75">
                <FaClock className="me-2" /> Segunda a Sexta: 8h às 18h
              </p>
              <p className="mb-2 opacity-75">
                <FaClock className="me-2" /> Sábado: 8h às 12h
              </p>
              <p className="mb-3 opacity-75">
                <FaWhatsapp className="me-2" /> Plantão 24h para urgências
              </p>
              <Badge bg="warning" className="p-2">
                <FaShieldAlt className="me-2" />
                Consulta Inicial Gratuita
              </Badge>
            </Col>
          </Row>
          
          <hr className="my-4 opacity-25" />
          
          <Row className="align-items-center">
            <Col md={6}>
              <small className="opacity-75">
                © 2024 Santos & Oliveira Advocacia. Todos os direitos reservados.
              </small>
            </Col>
            <Col md={6} className="text-md-end">
              <small className="opacity-75">
                OAB/SP • CNPJ: 12.345.678/0001-90 • Política de Privacidade
              </small>
            </Col>
          </Row>
        </Container>
      </footer>

      <style>{`
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
        }
        .navbar-nav .nav-link:hover {
          color: ${DOURADO} !important;
        }
        .navbar-nav .nav-link {
          transition: color 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default AdvocaciaConsultoria; 