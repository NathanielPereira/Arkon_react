import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Button, Badge, Modal, Nav } from 'react-bootstrap';
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
  FaFilter,
  FaStar,
  FaQuoteLeft,
  FaArrowRight
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

const Projetos: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showModal, setShowModal] = useState(false);

  const categories = [
    { id: 'all', name: 'Todos', icon: <FaGlobe /> },
    { id: 'web', name: 'Sites Institucionais', icon: <FaDesktop /> },
    { id: 'ecommerce', name: 'E-commerce', icon: <FaShoppingCart /> },
    { id: 'mobile', name: 'Apps Mobile', icon: <FaMobile /> },
    { id: 'landing', name: 'Landing Pages', icon: <FaRocket /> },
    { id: 'sistema', name: 'Sistemas Web', icon: <FaCode /> }
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
      ]
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
      title: 'Advocacia & Consultoria',
      subtitle: 'Site institucional para escritório jurídico',
      category: 'web',
      image: '/api/placeholder/800/600',
      technologies: ['WordPress', 'Elementor', 'SEO', 'Google Ads'],
      duration: '8 dias',
      sector: 'Jurídico',
      description: 'Website profissional para escritório de advocacia especializado em direito empresarial.',
      challenge: 'Transmitir credibilidade e expertise legal, além de facilitar o contato com potenciais clientes.',
      solution: 'Design elegante e profissional, área de artigos jurídicos, formulários de consulta e otimização para termos jurídicos.',
      results: [
        '+180% no número de consultas',
        'Posicionamento orgânico para termos-chave',
        '+300% no tráfego orgânico',
        'Aumento de 150% na conversão'
      ]
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
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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
              Nossos <span className="text-primary">Projetos</span>
            </h1>
            <p className="lead mb-4 text-light opacity-75">
              Conheça alguns dos projetos que desenvolvemos e os resultados incríveis que alcançamos
            </p>
            <p className="h5 text-warning">
              Cada projeto é uma história de sucesso única
            </p>
          </motion.div>
        </Container>
      </Container>

      {/* Filtros */}
      <Container className="py-4">
        <Row className="justify-content-center">
          <Col lg={10}>
            <Nav variant="pills" className="justify-content-center flex-wrap">
              {categories.map(category => (
                <Nav.Item key={category.id} className="mb-2">
                  <Nav.Link
                    active={selectedCategory === category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className="mx-1 d-flex align-items-center"
                  >
                    <span className="me-2">{category.icon}</span>
                    {category.name}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
        </Row>
      </Container>

      {/* Projetos Grid */}
      <Container className="pb-5">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Row className="g-4">
            {filteredProjects.map((project) => (
              <Col lg={4} md={6} key={project.id}>
                <motion.div variants={cardVariants}>
                  <Card className="h-100 shadow-lg border-0 project-card">
                    {project.featured && (
                      <div className="position-absolute top-0 end-0 m-3">
                        <Badge bg="warning" className="d-flex align-items-center">
                          <FaStar className="me-1" />
                          Destaque
                        </Badge>
                      </div>
                    )}

                    <div className="position-relative overflow-hidden">
                      <Card.Img
                        variant="top"
                        src={project.image}
                        style={{ height: '200px', objectFit: 'cover' }}
                        className="project-image"
                      />
                      <div className="position-absolute top-0 start-0 m-3">
                        <Badge bg="primary" className="d-flex align-items-center">
                          {categories.find(c => c.id === project.category)?.icon}
                          <span className="ms-1">
                            {categories.find(c => c.id === project.category)?.name}
                          </span>
                        </Badge>
                      </div>
                      <div className="project-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                        <Button
                          variant="light"
                          className="fw-bold"
                          onClick={() => handleProjectClick(project)}
                        >
                          <FaEye className="me-2" />
                          Ver Detalhes
                        </Button>
                      </div>
                    </div>

                    <Card.Body className="p-4">
                      <h5 className="fw-bold text-dark mb-2">{project.title}</h5>
                      <p className="text-muted mb-3 leading-relaxed">{project.subtitle}</p>

                      <div className="mb-3">
                        <div className="d-flex align-items-center mb-2">
                          <FaClock className="text-primary me-2" />
                          <small className="text-muted">
                            <strong>Prazo:</strong> {project.duration}
                          </small>
                        </div>
                        <div className="d-flex align-items-center">
                          <FaGlobe className="text-primary me-2" />
                          <small className="text-muted">
                            <strong>Setor:</strong> {project.sector}
                          </small>
                        </div>
                      </div>

                      <div className="mb-3">
                        <h6 className="fw-bold text-dark mb-2">Tecnologias:</h6>
                        <div className="d-flex flex-wrap gap-1">
                          {project.technologies.slice(0, 3).map((tech, index) => (
                            <Badge key={index} bg="light" text="dark" className="border">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge bg="secondary">
                              +{project.technologies.length - 3} mais
                            </Badge>
                          )}
                        </div>
                      </div>
                    </Card.Body>

                    <Card.Footer className="bg-transparent border-0 p-4 pt-0">
                      <Button
                        variant="outline-primary"
                        className="w-100 fw-bold"
                        onClick={() => handleProjectClick(project)}
                      >
                        Ver Case Completo
                        <FaArrowRight className="ms-2" />
                      </Button>
                    </Card.Footer>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-5">
            <h4 className="text-muted">Nenhum projeto encontrado nesta categoria</h4>
            <p className="text-muted">Experimente filtrar por outra categoria</p>
          </div>
        )}
      </Container>

      {/* Modal de Detalhes do Projeto */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        {selectedProject && (
          <>
            <Modal.Header closeButton className="border-0">
              <Modal.Title className="fw-bold">{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-4">
              <Row>
                <Col md={6}>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="img-fluid rounded shadow-sm mb-4"
                  />
                </Col>
                <Col md={6}>
                  <div className="mb-4">
                    <h5 className="fw-bold text-primary mb-3">Informações do Projeto</h5>
                    <div className="mb-2">
                      <strong>Categoria:</strong> {categories.find(c => c.id === selectedProject.category)?.name}
                    </div>
                    <div className="mb-2">
                      <strong>Setor:</strong> {selectedProject.sector}
                    </div>
                    <div className="mb-2">
                      <strong>Duração:</strong> {selectedProject.duration}
                    </div>
                    <div className="mb-3">
                      <strong>Tecnologias:</strong>
                      <div className="mt-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <Badge key={index} bg="primary" className="me-1 mb-1">
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
                        className="fw-bold"
                      >
                        <FaExternalLinkAlt className="me-2" />
                        Visitar Site
                      </Button>
                    )}
                  </div>
                </Col>
              </Row>

              <div className="mb-4">
                <h5 className="fw-bold text-primary mb-3">Descrição do Projeto</h5>
                <p className="leading-relaxed">{selectedProject.description}</p>
              </div>

              <div className="mb-4">
                <h5 className="fw-bold text-primary mb-3">Desafio</h5>
                <p className="leading-relaxed">{selectedProject.challenge}</p>
              </div>

              <div className="mb-4">
                <h5 className="fw-bold text-primary mb-3">Solução Desenvolvida</h5>
                <p className="leading-relaxed">{selectedProject.solution}</p>
              </div>

              <div className="mb-4">
                <h5 className="fw-bold text-primary mb-3">Resultados Alcançados</h5>
                <ul className="list-unstyled">
                  {selectedProject.results.map((result, index) => (
                    <li key={index} className="mb-2 d-flex align-items-start">
                      <FaStar className="text-warning me-2 mt-1" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedProject.testimonial && (
                <div className="bg-light rounded p-4">
                  <h5 className="fw-bold text-primary mb-3">Depoimento do Cliente</h5>
                  <blockquote className="mb-3">
                    <FaQuoteLeft className="text-muted me-2" />
                    <em className="leading-relaxed">"{selectedProject.testimonial.text}"</em>
                  </blockquote>
                  <div className="text-end">
                    <strong>{selectedProject.testimonial.author}</strong><br />
                    <small className="text-muted">
                      {selectedProject.testimonial.position} - {selectedProject.testimonial.company}
                    </small>
                  </div>
                </div>
              )}
            </Modal.Body>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Projetos; 