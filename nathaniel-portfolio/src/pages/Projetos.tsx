import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Button, Badge, Modal, Nav } from 'react-bootstrap';
import { 
  FaExternalLinkAlt, 
  FaClock, 
  FaCode, 
  FaMobile, 
  FaShoppingCart, 
  FaGlobe,
  FaDesktop,
  FaRocket,
  FaEye,
  FaStar,
  FaQuoteLeft
} from 'react-icons/fa';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'web' | 'mobile' | 'ecommerce' | 'landing' | 'sistema';
  image: string;
  technologies: string[];
  duration: string;
  sector: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    text: string;
    author: string;
    position: string;
    company: string;
  };
  link?: string;
  featured?: boolean;
}

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
  vermelhoCrit: "#DC3545",       // Vermelho - alertas e erros
  ciano: "#00C9A7"               // Ciano - criatividade e inovação
};

const GRADIENTES = {
  heroGradient: "linear-gradient(135deg, #1A73E8 0%, #0B2341 100%)",
  cardGradient: "linear-gradient(145deg, #FFFFFF 0%, #F8F9FA 100%)",
  hoverGradient: "linear-gradient(135deg, #E3F2FD 0%, #FFFFFF 100%)"
};

const Projetos: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showModal, setShowModal] = useState(false);

  const categories = [
    { id: 'all', name: 'Todos', icon: <FaGlobe />, color: CORES_PRIMARIAS.azulPrincipal },
    { id: 'web', name: 'Sites Institucionais', icon: <FaDesktop />, color: CORES_SECUNDARIAS.verdeForest },
    { id: 'ecommerce', name: 'E-commerce', icon: <FaShoppingCart />, color: CORES_SECUNDARIAS.laranjaWarn },
    { id: 'mobile', name: 'Apps Mobile', icon: <FaMobile />, color: CORES_SECUNDARIAS.roxoTech },
    { id: 'landing', name: 'Landing Pages', icon: <FaRocket />, color: CORES_SECUNDARIAS.verdeForest },
    { id: 'sistema', name: 'Sistemas Web', icon: <FaCode />, color: CORES_PRIMARIAS.azulPrincipal }
  ];

  const projects: Project[] = [
    {
      id: '1',
      title: 'Portal Médico Prime',
      subtitle: 'Site institucional para clínica médica premium',
      category: 'web',
      image: '/api/placeholder/800/600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Bootstrap'],
      duration: '12 dias',
      sector: 'Saúde',
      description: 'Desenvolvimento de site institucional completo para clínica médica especializada em cardiologia, com foco em conversão e credibilidade.',
      challenge: 'A clínica precisava de uma presença digital que transmitisse confiança e profissionalismo, além de facilitar o agendamento de consultas online.',
      solution: 'Criamos um design clean e moderno, com sistema de agendamento integrado, área do paciente e otimização completa para SEO médico.',
      results: [
        '+250% no número de agendamentos online',
        '+180% no tempo de permanência no site',
        'Posicionamento na 1ª página do Google para "cardiologista [cidade]"',
        '+90% na taxa de conversão de visitante para lead'
      ],
      testimonial: {
        text: 'O site superou nossas expectativas. Aumentamos significativamente nossos agendamentos e a credibilidade da clínica no mercado.',
        author: 'Dr. Carlos Silva',
        position: 'Diretor Médico',
        company: 'Clínica Prime'
      },
      link: 'https://clinicaprime.com.br',
      featured: true
    },
    {
      id: '2',
      title: 'EcoStore Brasil',
      subtitle: 'Loja virtual para produtos sustentáveis',
      category: 'ecommerce',
      image: '/api/placeholder/800/600',
      technologies: ['WooCommerce', 'WordPress', 'PayPal', 'Stripe'],
      duration: '18 dias',
      sector: 'Sustentabilidade',
      description: 'E-commerce completo para venda de produtos ecológicos e sustentáveis, com foco em experiência do usuário e conversão.',
      challenge: 'Criar uma loja online que educasse sobre sustentabilidade enquanto vendia produtos, com múltiplas formas de pagamento.',
      solution: 'Desenvolvemos uma plataforma robusta com blog integrado, sistema de reviews, múltiplos gateways de pagamento e otimização para mobile.',
      results: [
        '+400% no faturamento online',
        '85% das vendas através do mobile',
        '+300% no número de produtos cadastrados',
        'Redução de 60% no abandono de carrinho'
      ],
      featured: true
    },
    {
      id: '3',
      title: 'FitApp Pro',
      subtitle: 'Aplicativo para personal trainers',
      category: 'mobile',
      image: '/api/placeholder/400/800',
      technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB'],
      duration: '25 dias',
      sector: 'Fitness',
      description: 'App mobile completo para personal trainers gerenciarem seus alunos, treinos e acompanhar evolução.',
      challenge: 'Criar um app intuitivo que funcionasse offline e sincronizasse dados automaticamente quando conectado.',
      solution: 'Desenvolvemos com arquitetura offline-first, sincronização automática, notificações push e interface gamificada.',
      results: [
        '+500 downloads na primeira semana',
        '4.8 estrelas na App Store',
        '92% de retenção no primeiro mês',
        '+50% na produtividade dos personal trainers'
      ]
    },
    {
      id: '4',
      title: 'Imobiliária Digital',
      subtitle: 'Landing page de alta conversão',
      category: 'landing',
      image: '/api/placeholder/800/600',
      technologies: ['React', 'Tailwind CSS', 'Google Analytics', 'HubSpot'],
      duration: '5 dias',
      sector: 'Imobiliário',
      description: 'Landing page otimizada para captura de leads interessados em imóveis de alto padrão.',
      challenge: 'Converter visitantes em leads qualificados com alta taxa de conversão em um mercado competitivo.',
      solution: 'Design focado em conversão, formulários otimizados, integração com CRM e testes A/B contínuos.',
      results: [
        '32% de taxa de conversão',
        '+250% em leads qualificados',
        'ROI de 400% nas campanhas de tráfego pago',
        'Tempo de carregamento inferior a 1.5s'
      ],
      link: '/projeto/imobiliaria-digital',
      featured: true
    },
    {
      id: '5',
      title: 'Sistema ERP Varejo',
      subtitle: 'Plataforma de gestão empresarial',
      category: 'sistema',
      image: '/api/placeholder/800/600',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
      duration: '45 dias',
      sector: 'Varejo',
      description: 'Sistema completo de gestão para redes de varejo com múltiplas lojas e controle de estoque.',
      challenge: 'Integrar gestão de estoque, vendas, financeiro e relatórios em tempo real para múltiplas filiais.',
      solution: 'Arquitetura microserviços, dashboard em tempo real, API robusta e interface intuitiva para diferentes perfis de usuário.',
      results: [
        'Redução de 70% no tempo de fechamento mensal',
        'Controle de estoque em tempo real',
        '+95% de precisão nos relatórios',
        'Economia de R$ 50k/mês em operações'
      ]
    },
    {
      id: '6',
      title: 'Santos & Oliveira Advocacia',
      subtitle: 'Site institucional para escritório jurídico premium',
      category: 'web',
      image: '/api/placeholder/800/600',
      technologies: ['React', 'TypeScript', 'Bootstrap', 'Framer Motion'],
      duration: '8 dias',
      sector: 'Jurídico',
      description: 'Website institucional completo para escritório de advocacia especializado em direito empresarial, trabalhista e tributário.',
      challenge: 'Transmitir credibilidade e expertise legal, além de facilitar o contato com potenciais clientes empresariais.',
      solution: 'Design elegante com paleta dourada, seção de equipe, blog jurídico, depoimentos com resultados e formulários otimizados.',
      results: [
        '+180% no número de consultas',
        'Posicionamento orgânico para termos jurídicos',
        '+300% no tráfego orgânico',
        'Aumento de 150% na conversão de leads'
      ],
      link: '/projeto/advocacia-consultoria',
      featured: true
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
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

  const filterVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
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
      
      {/* Hero Text */}
      <motion.div 
        className="max-w-5xl w-full text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" 
            style={{ color: CORES_PRIMARIAS.azulPrincipal, letterSpacing: '-0.025em' }}>
          Portfólio de Projetos
        </h1>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 text-center leading-relaxed font-medium" 
           style={{ color: CORES_PRIMARIAS.azulEscuro }}>
          Conheça alguns dos projetos que desenvolvemos e os <span style={{ color: CORES_SECUNDARIAS.laranjaWarn }}>resultados incríveis</span> que alcançamos
        </p>
        <p className="text-lg max-w-3xl mx-auto text-center leading-relaxed" 
           style={{ color: CORES_PRIMARIAS.cinzaNeutro }}>
          Cada projeto é uma história de sucesso única, desenvolvida com foco em resultados mensuráveis
        </p>
      </motion.div>

      <div className="w-full flex flex-col items-center">
        {/* Divisória Elegante */}
        <motion.div 
          className="w-full max-w-7xl"
          style={{ marginBottom: '24px' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="w-full h-[3px]" 
               style={{ 
                 background: `linear-gradient(90deg, transparent 0%, ${CORES_PRIMARIAS.azulPrincipal} 20%, ${CORES_SECUNDARIAS.laranjaWarn} 50%, ${CORES_PRIMARIAS.azulPrincipal} 80%, transparent 100%)` 
               }} />
        </motion.div>

        {/* Filtros Modernos */}
        <Container className="w-full mb-20">
          <Row className="justify-content-center">
            <Col lg={12}>
              <motion.div
                variants={filterVariants}
                initial="hidden"
                animate="visible"
                className="w-full rounded-3xl shadow-2xl border-0 p-8"
                style={{ 
                  background: GRADIENTES.cardGradient,
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${CORES_PRIMARIAS.azulClaro}40`,
                  marginBottom: '24px'
                }}
              >
                <h3 className="text-center mb-6 fw-bold" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
                  Filtrar por Categoria
                </h3>
                <Nav variant="pills" className="justify-content-center flex-wrap gap-3">
                  {categories.map(category => (
                    <Nav.Item key={category.id} className="mb-3">
                      <Nav.Link
                        active={selectedCategory === category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className="mx-2 d-flex align-items-center px-5 py-4 fw-semibold rounded-pill transition-all"
                        style={{
                          backgroundColor: selectedCategory === category.id ? category.color : 'transparent',
                          borderColor: selectedCategory === category.id ? category.color : category.color,
                          color: selectedCategory === category.id ? CORES_PRIMARIAS.brancoPuro : category.color,
                          border: `2px solid ${category.color}`,
                          transform: selectedCategory === category.id ? 'scale(1.05)' : 'scale(1)',
                          boxShadow: selectedCategory === category.id ? `0 8px 25px ${category.color}25` : 'none',
                          fontSize: '1rem'
                        }}
                      >
                        <span className="me-3" style={{ fontSize: '1.2rem' }}>{category.icon}</span>
                        {category.name}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </motion.div>
            </Col>
          </Row>
        </Container>

        {/* Grid de Projetos */}
        <Container className="w-full mb-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Row className="g-5">
              {filteredProjects.map((project) => (
                <Col lg={4} md={6} key={project.id}>
                  <motion.div variants={cardVariants}>
                    <div 
                      className="position-relative overflow-hidden rounded-3xl shadow-lg border-0 h-100"
                      style={{ 
                        background: GRADIENTES.cardGradient,
                        minHeight: '650px',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        border: `1px solid ${CORES_PRIMARIAS.azulClaro}30`
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                        e.currentTarget.style.boxShadow = `0 30px 60px ${CORES_PRIMARIAS.azulPrincipal}20`;
                        e.currentTarget.style.background = GRADIENTES.hoverGradient;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                        e.currentTarget.style.background = GRADIENTES.cardGradient;
                      }}
                    >
                      {/* Badge de Destaque */}
                      {project.featured && (
                        <div className="position-absolute top-0 end-0 m-4" style={{ zIndex: 10 }}>
                          <Badge className="d-flex align-items-center px-4 py-3 rounded-pill fw-bold"
                                 style={{ 
                                   backgroundColor: CORES_SECUNDARIAS.laranjaWarn,
                                   color: CORES_PRIMARIAS.brancoPuro,
                                   fontSize: '0.9rem'
                                 }}>
                            <FaStar className="me-2" />
                            Projeto Destaque
                          </Badge>
                        </div>
                      )}

                      {/* Imagem do Projeto */}
                      <div className="position-relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          style={{ height: '260px', objectFit: 'cover', width: '100%' }}
                          className="transition-transform duration-500"
                        />
                        
                        {/* Badge de Categoria */}
                        <div className="position-absolute top-0 start-0 m-4">
                          <Badge className="d-flex align-items-center px-4 py-3 rounded-pill fw-semibold"
                                 style={{ 
                                   backgroundColor: categories.find(c => c.id === project.category)?.color || CORES_PRIMARIAS.azulPrincipal,
                                   color: CORES_PRIMARIAS.brancoPuro,
                                   fontSize: '0.85rem'
                                 }}>
                            <span className="me-2">{categories.find(c => c.id === project.category)?.icon}</span>
                            {categories.find(c => c.id === project.category)?.name}
                          </Badge>
                        </div>

                        {/* Overlay de Hover */}
                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0 hover-overlay"
                             style={{
                               background: `linear-gradient(135deg, ${CORES_PRIMARIAS.azulPrincipal}90, ${CORES_SECUNDARIAS.laranjaWarn}70)`,
                               transition: 'opacity 0.3s ease'
                             }}>
                          <Button
                            variant="light"
                            className="fw-bold px-5 py-3 rounded-pill shadow-lg"
                            style={{ 
                              border: 'none',
                              color: CORES_PRIMARIAS.azulPrincipal,
                              fontSize: '1.1rem'
                            }}
                          >
                            <FaEye className="me-2" />
                            {project.link ? 'Visitar Projeto' : 'Ver Detalhes'}
                          </Button>
                        </div>
                      </div>

                      {/* Conteúdo do Card */}
                      <div className="p-5 d-flex flex-column flex-grow-1">
                        <h4 className="fw-bold mb-3" 
                            style={{ color: CORES_PRIMARIAS.azulEscuro, fontSize: '1.4rem' }}>
                          {project.title}
                        </h4>
                        <p className="mb-4" 
                           style={{ color: CORES_PRIMARIAS.cinzaNeutro, lineHeight: 1.6, fontSize: '1rem' }}>
                          {project.subtitle}
                        </p>

                        {/* Informações do Projeto */}
                        <div className="mb-4">
                          <Row className="g-3">
                            <Col md={6}>
                              <div className="d-flex align-items-center">
                                <FaClock style={{ color: CORES_SECUNDARIAS.laranjaWarn }} className="me-2" />
                                <small className="fw-semibold" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
                                  {project.duration}
                                </small>
                              </div>
                            </Col>
                            <Col md={6}>
                              <div className="d-flex align-items-center">
                                <FaGlobe style={{ color: CORES_SECUNDARIAS.verdeForest }} className="me-2" />
                                <small className="fw-semibold" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
                                  {project.sector}
                                </small>
                              </div>
                            </Col>
                          </Row>
                        </div>

                        {/* Tecnologias */}
                        <div className="mb-5">
                          <h6 className="fw-bold mb-3" style={{ color: CORES_PRIMARIAS.azulEscuro, fontSize: '1rem' }}>
                            Tecnologias:
                          </h6>
                          <div className="d-flex flex-wrap gap-2">
                            {project.technologies.slice(0, 3).map((tech, index) => (
                              <Badge key={index} className="px-3 py-2"
                                     style={{ 
                                       backgroundColor: '#10B981',
                                       color: CORES_PRIMARIAS.brancoPuro,
                                       fontSize: '0.85rem',
                                       fontWeight: '600',
                                       borderRadius: '12px'
                                     }}>
                                {tech}
                              </Badge>
                            ))}
                            {project.technologies.length > 3 && (
                              <Badge className="px-3 py-2"
                                     style={{ 
                                       backgroundColor: '#F59E0B',
                                       color: CORES_PRIMARIAS.brancoPuro,
                                       fontSize: '0.85rem',
                                       fontWeight: '600',
                                       borderRadius: '12px'
                                     }}>
                                +{project.technologies.length - 3} mais
                              </Badge>
                            )}
                          </div>
                        </div>

                        {/* Botões de Ação */}
                        <div className="mt-auto d-flex flex-column gap-3">
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleProjectClick(project);
                            }}
                            className="w-100 fw-bold py-3 rounded-pill border-0"
                            style={{ 
                              background: 'linear-gradient(135deg, #3B82F6, #1E40AF)',
                              color: CORES_PRIMARIAS.brancoPuro,
                              fontSize: '1rem'
                            }}
                          >
                            <FaEye className="me-2" />
                            Ver Detalhes
                          </Button>
                          
                          {project.link && (
                            <Button
                              onClick={(e) => {
                                e.stopPropagation();
                                if (project.link?.startsWith('/')) {
                                  window.location.href = project.link;
                                } else {
                                  window.open(project.link, '_blank');
                                }
                              }}
                              variant="outline-primary"
                              className="w-100 fw-bold py-3 rounded-pill"
                              style={{ 
                                borderColor: '#10B981',
                                color: '#10B981',
                                fontSize: '1rem'
                              }}
                            >
                              <FaExternalLinkAlt className="me-2" />
                              Ver Case Completo
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div 
              className="text-center py-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h4 style={{ color: CORES_PRIMARIAS.azulPrincipal }}>
                Nenhum projeto encontrado nesta categoria
              </h4>
              <p style={{ color: CORES_PRIMARIAS.cinzaNeutro }}>
                Experimente filtrar por outra categoria para ver mais projetos
              </p>
            </motion.div>
          )}
        </Container>

        {/* Divisória Final */}
        <motion.div 
          className="w-full max-w-7xl mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="w-full h-[2px]" 
               style={{ 
                 background: `linear-gradient(90deg, transparent 0%, ${CORES_PRIMARIAS.azulPrincipal} 50%, transparent 100%)` 
               }} />
        </motion.div>
      </div>

      {/* Modal de Detalhes do Projeto */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        {selectedProject && (
          <>
            <Modal.Header closeButton className="border-0" style={{ backgroundColor: CORES_PRIMARIAS.azulClaro }}>
              <Modal.Title className="fw-bold" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
                {selectedProject.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-4">
              <Row>
                <Col md={6}>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="img-fluid rounded-3 shadow-sm mb-4"
                  />
                </Col>
                <Col md={6}>
                  <div className="mb-4">
                    <h5 className="fw-bold mb-3" style={{ color: CORES_PRIMARIAS.azulPrincipal }}>
                      Informações do Projeto
                    </h5>
                    <div className="mb-2">
                      <strong style={{ color: CORES_PRIMARIAS.azulEscuro }}>Categoria:</strong> {categories.find(c => c.id === selectedProject.category)?.name}
                    </div>
                    <div className="mb-2">
                      <strong style={{ color: CORES_PRIMARIAS.azulEscuro }}>Setor:</strong> {selectedProject.sector}
                    </div>
                    <div className="mb-2">
                      <strong style={{ color: CORES_PRIMARIAS.azulEscuro }}>Duração:</strong> {selectedProject.duration}
                    </div>
                    <div className="mb-3">
                      <strong style={{ color: CORES_PRIMARIAS.azulEscuro }}>Tecnologias:</strong>
                      <div className="mt-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <Badge key={index} className="me-1 mb-1 px-2 py-1"
                                 style={{ 
                                   backgroundColor: CORES_PRIMARIAS.azulPrincipal,
                                   color: CORES_PRIMARIAS.brancoPuro
                                 }}>
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    {selectedProject.link && (
                      <Button
                        variant="outline-primary"
                        size="sm"
                        href={selectedProject.link}
                        target="_blank"
                        className="fw-bold rounded-pill"
                        style={{ borderColor: CORES_PRIMARIAS.azulPrincipal, color: CORES_PRIMARIAS.azulPrincipal }}
                      >
                        <FaExternalLinkAlt className="me-2" />
                        Visitar Projeto
                      </Button>
                    )}
                  </div>
                </Col>
              </Row>

              <div className="mb-4">
                <h5 className="fw-bold mb-3" style={{ color: CORES_PRIMARIAS.azulPrincipal }}>
                  Descrição do Projeto
                </h5>
                <p className="leading-relaxed" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
                  {selectedProject.description}
                </p>
              </div>

              <div className="mb-4">
                <h5 className="fw-bold mb-3" style={{ color: CORES_PRIMARIAS.azulPrincipal }}>
                  Desafio
                </h5>
                <p className="leading-relaxed" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
                  {selectedProject.challenge}
                </p>
              </div>

              <div className="mb-4">
                <h5 className="fw-bold mb-3" style={{ color: CORES_PRIMARIAS.azulPrincipal }}>
                  Solução Desenvolvida
                </h5>
                <p className="leading-relaxed" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
                  {selectedProject.solution}
                </p>
              </div>

              <div className="mb-4">
                <h5 className="fw-bold mb-3" style={{ color: CORES_PRIMARIAS.azulPrincipal }}>
                  Resultados Alcançados
                </h5>
                <ul className="list-unstyled">
                  {selectedProject.results.map((result, index) => (
                    <li key={index} className="mb-2 d-flex align-items-start">
                      <FaStar style={{ color: CORES_SECUNDARIAS.laranjaWarn }} className="me-2 mt-1" />
                      <span style={{ color: CORES_PRIMARIAS.azulEscuro }}>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedProject.testimonial && (
                <div className="rounded-3 p-4" style={{ backgroundColor: CORES_PRIMARIAS.azulClaro }}>
                  <h5 className="fw-bold mb-3" style={{ color: CORES_PRIMARIAS.azulPrincipal }}>
                    Depoimento do Cliente
                  </h5>
                  <blockquote className="mb-3">
                    <FaQuoteLeft style={{ color: CORES_PRIMARIAS.cinzaNeutro }} className="me-2" />
                    <em className="leading-relaxed" style={{ color: CORES_PRIMARIAS.azulEscuro }}>
                      "{selectedProject.testimonial.text}"
                    </em>
                  </blockquote>
                  <div className="text-end">
                    <strong style={{ color: CORES_PRIMARIAS.azulEscuro }}>
                      {selectedProject.testimonial.author}
                    </strong><br />
                    <small style={{ color: CORES_PRIMARIAS.cinzaNeutro }}>
                      {selectedProject.testimonial.position} - {selectedProject.testimonial.company}
                    </small>
                  </div>
                </div>
              )}
            </Modal.Body>
          </>
        )}
      </Modal>

      <style>{`
        .hover-overlay {
          transition: opacity 0.3s ease !important;
        }
        .hover-overlay:hover {
          opacity: 1 !important;
        }
        .project-image {
          transition: transform 0.3s ease;
        }
        .project-image:hover {
          transform: scale(1.05);
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
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        /* Scroll suave */
        html {
          scroll-behavior: smooth;
        }
        
        /* Hover effects personalizados */
        .nav-link {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        
        .nav-link:hover {
          transform: translateY(-2px) !important;
        }
      `}</style>
    </section>
  );
};

export default Projetos; 