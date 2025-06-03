import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Button, Form, Card, Badge } from 'react-bootstrap';
import { 
  FaWhatsapp, 
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaCar,
  FaRuler,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaStar,
  FaShieldAlt,
  FaCalendarAlt,
  FaCheckCircle
} from 'react-icons/fa';

const AZUL_ESCURO = "#0B2341";

const ImobiliariaDigital: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'comprar'
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const properties = [
    {
      id: 1,
      title: 'Apartamento Luxo Jardins',
      location: 'Jardins, São Paulo',
      price: 'R$ 1.850.000',
      bedrooms: 3,
      bathrooms: 2,
      parking: 2,
      area: 120,
      image: '/api/placeholder/400/300',
      featured: true
    },
    {
      id: 2,
      title: 'Cobertura Vista Mar',
      location: 'Copacabana, Rio de Janeiro',
      price: 'R$ 2.400.000',
      bedrooms: 4,
      bathrooms: 3,
      parking: 3,
      area: 180,
      image: '/api/placeholder/400/300',
      featured: true
    },
    {
      id: 3,
      title: 'Casa Condomínio Fechado',
      location: 'Alphaville, Barueri',
      price: 'R$ 980.000',
      bedrooms: 4,
      bathrooms: 3,
      parking: 4,
      area: 250,
      image: '/api/placeholder/400/300'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Olá! Tenho interesse em imóveis de alto padrão.

Meus dados:
- Nome: ${formData.name}
- Email: ${formData.email}
- Telefone: ${formData.phone}
- Interesse: ${formData.interest === 'comprar' ? 'Comprar' : formData.interest === 'vender' ? 'Vender' : 'Alugar'}

Gostaria de agendar uma conversa!`;

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    setShowSuccess(true);
    
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <Container>
          <Row className="align-items-center min-vh-75">
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="display-4 fw-bold mb-4">
                  Encontre o Imóvel dos 
                  <span className="text-warning"> Seus Sonhos</span>
                </h1>
                <p className="lead mb-4 opacity-90">
                  Mais de 15 anos conectando pessoas aos melhores imóveis de alto padrão. 
                  Expertise, confiança e resultados que transformam vidas.
                </p>
                <div className="d-flex flex-wrap gap-3 mb-4">
                  <Badge bg="warning" className="p-2 fs-6">
                    <FaShieldAlt className="me-2" />
                    +500 Imóveis Vendidos
                  </Badge>
                  <Badge bg="success" className="p-2 fs-6">
                    <FaStar className="me-2" />
                    98% Satisfação
                  </Badge>
                  <Badge bg="info" className="p-2 fs-6">
                    <FaCalendarAlt className="me-2" />
                    15+ Anos Experiência
                  </Badge>
                </div>
                <Button 
                  variant="warning" 
                  size="lg" 
                  className="fw-bold px-5 py-3 me-3 mb-3"
                  href="#contato"
                >
                  Quero Meu Imóvel
                </Button>
                <Button 
                  variant="outline-light" 
                  size="lg" 
                  className="fw-bold px-5 py-3 mb-3"
                  href="#imoveis"
                >
                  Ver Imóveis
                </Button>
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
                  src="/api/placeholder/600/400" 
                  alt="Imóvel de Luxo"
                  className="img-fluid rounded-3 shadow-lg"
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Formulário de Contato Destacado */}
      <section id="contato" className="py-5 bg-white shadow-lg" style={{ marginTop: '-50px', position: 'relative', zIndex: 10 }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="shadow-lg border-0 rounded-3">
                  <Card.Body className="p-5">
                    <div className="text-center mb-4">
                      <h2 className="h3 fw-bold" style={{ color: AZUL_ESCURO }}>
                        🏠 Encontre Seu Imóvel Ideal em 24h
                      </h2>
                      <p className="text-muted">
                        Preencha seus dados e receba uma seleção personalizada dos melhores imóveis
                      </p>
                    </div>

                    {showSuccess && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="alert alert-success d-flex align-items-center mb-4"
                      >
                        <FaCheckCircle className="me-2" />
                        Mensagem enviada! Entraremos em contato em breve.
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
                              className="py-3"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">WhatsApp *</Form.Label>
                            <Form.Control
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              placeholder="(11) 99999-9999"
                              className="py-3"
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
                              className="py-3"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">Interesse</Form.Label>
                            <Form.Select
                              value={formData.interest}
                              onChange={(e) => setFormData({...formData, interest: e.target.value})}
                              className="py-3"
                            >
                              <option value="comprar">Comprar Imóvel</option>
                              <option value="vender">Vender Imóvel</option>
                              <option value="alugar">Alugar Imóvel</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>
                      <div className="text-center">
                        <Button
                          type="submit"
                          variant="success"
                          size="lg"
                          className="fw-bold px-5 py-3 w-100"
                          style={{ background: 'linear-gradient(45deg, #28a745, #20c997)' }}
                        >
                          <FaWhatsapp className="me-2" />
                          Quero Receber Propostas Agora
                        </Button>
                        <small className="text-muted d-block mt-2">
                          100% Gratuito • Resposta em até 2 horas
                        </small>
                      </div>
                    </Form>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Imóveis em Destaque */}
      <section id="imoveis" className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold" style={{ color: AZUL_ESCURO }}>
              Imóveis em Destaque
            </h2>
            <p className="lead text-muted">
              Seleção exclusiva dos melhores imóveis disponíveis
            </p>
          </div>

          <Row className="g-4">
            {properties.map((property, index) => (
              <Col lg={4} md={6} key={property.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="shadow-lg border-0 rounded-3 overflow-hidden h-100 hover-lift">
                    {property.featured && (
                      <div className="position-absolute top-0 end-0 m-3" style={{ zIndex: 5 }}>
                        <Badge bg="warning" className="p-2">
                          <FaStar className="me-1" />
                          Destaque
                        </Badge>
                      </div>
                    )}
                    
                    <div className="position-relative">
                      <img 
                        src={property.image} 
                        alt={property.title}
                        className="card-img-top"
                        style={{ height: '250px', objectFit: 'cover' }}
                      />
                      <div className="position-absolute bottom-0 start-0 m-3">
                        <Badge bg="dark" className="p-2 fs-6">
                          {property.price}
                        </Badge>
                      </div>
                    </div>

                    <Card.Body className="p-4">
                      <h5 className="fw-bold mb-2" style={{ color: AZUL_ESCURO }}>
                        {property.title}
                      </h5>
                      <p className="text-muted mb-3 d-flex align-items-center">
                        <FaMapMarkerAlt className="me-2 text-danger" />
                        {property.location}
                      </p>

                      <Row className="g-3 mb-3 text-center">
                        <Col>
                          <div className="d-flex align-items-center justify-content-center">
                            <FaBed className="text-primary me-2" />
                            <span className="fw-semibold">{property.bedrooms}</span>
                          </div>
                          <small className="text-muted">Quartos</small>
                        </Col>
                        <Col>
                          <div className="d-flex align-items-center justify-content-center">
                            <FaBath className="text-info me-2" />
                            <span className="fw-semibold">{property.bathrooms}</span>
                          </div>
                          <small className="text-muted">Banheiros</small>
                        </Col>
                        <Col>
                          <div className="d-flex align-items-center justify-content-center">
                            <FaCar className="text-warning me-2" />
                            <span className="fw-semibold">{property.parking}</span>
                          </div>
                          <small className="text-muted">Vagas</small>
                        </Col>
                        <Col>
                          <div className="d-flex align-items-center justify-content-center">
                            <FaRuler className="text-success me-2" />
                            <span className="fw-semibold">{property.area}m²</span>
                          </div>
                          <small className="text-muted">Área</small>
                        </Col>
                      </Row>

                      <Button
                        variant="outline-primary"
                        className="w-100 fw-bold"
                        href="#contato"
                      >
                        Tenho Interesse
                      </Button>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Seção de Benefícios */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold" style={{ color: AZUL_ESCURO }}>
              Por Que Escolher a Imobiliária Digital?
            </h2>
          </div>

          <Row className="g-4">
            <Col md={4}>
              <div className="text-center p-4">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <FaShieldAlt className="text-white" size={32} />
                </div>
                <h5 className="fw-bold mb-3">Segurança Garantida</h5>
                <p className="text-muted">
                  Documentação completa e assessoria jurídica em todas as transações
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center p-4">
                <div className="bg-success rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <FaStar className="text-white" size={32} />
                </div>
                <h5 className="fw-bold mb-3">Experiência Comprovada</h5>
                <p className="text-muted">
                  Mais de 15 anos no mercado com centenas de clientes satisfeitos
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center p-4">
                <div className="bg-warning rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                  <FaCalendarAlt className="text-white" size={32} />
                </div>
                <h5 className="fw-bold mb-3">Agilidade</h5>
                <p className="text-muted">
                  Processos otimizados para você encontrar seu imóvel rapidamente
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer com Contatos */}
      <footer className="bg-dark text-white py-4">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h5 className="fw-bold mb-2">Imobiliária Digital</h5>
              <p className="mb-0 opacity-75">
                Conectando pessoas aos seus sonhos desde 2008
              </p>
            </Col>
            <Col md={6} className="text-md-end">
              <div className="d-flex justify-content-md-end gap-3">
                <Button variant="outline-light" size="sm" className="rounded-circle">
                  <FaWhatsapp />
                </Button>
                <Button variant="outline-light" size="sm" className="rounded-circle">
                  <FaInstagram />
                </Button>
                <Button variant="outline-light" size="sm" className="rounded-circle">
                  <FaFacebook />
                </Button>
                <Button variant="outline-light" size="sm" className="rounded-circle">
                  <FaEnvelope />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      <style>{`
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
        }
        .min-vh-75 {
          min-height: 75vh;
        }
      `}</style>
    </div>
  );
};

export default ImobiliariaDigital; 