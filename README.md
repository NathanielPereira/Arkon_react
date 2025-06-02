# 🚀 Arkon - Soluções Digitais | Portfolio Profissional

## 📋 Descrição do Projeto

Portfolio profissional da **Arkon - Soluções Digitais**, uma empresa especializada em desenvolvimento web, mobile e soluções digitais. O site apresenta serviços, valores da empresa e formas de contato, desenvolvido com tecnologias modernas e design responsivo.

## 🛠️ Tecnologias Utilizadas

### **Frontend**
- **React 19.1.0** - Framework principal
- **TypeScript** - Tipagem estática
- **Vite 6.3.5** - Build tool e desenvolvimento
- **React Router DOM 7.6.1** - Roteamento
- **Tailwind CSS 4.1.8** - Framework CSS utilitário
- **Bootstrap 5.3.6** - Componentes e layout responsivo
- **React Bootstrap 2.10.10** - Componentes React do Bootstrap

### **Animações e UX**
- **Framer Motion 12.15.0** - Animações fluidas
- **React Icons 5.5.0** - Ícones personalizados
- **Lucide React 0.511.0** - Ícones SVG otimizados

### **Deploy e CI/CD**
- **Firebase Hosting** - Hospedagem principal
- **GitHub Pages** - Deploy alternativo
- **GitHub Actions** - Automação de deploy
- **Firebase Preview Channels** - Ambientes de teste

## 🏗️ Arquitetura do Projeto

```
Porfolio/
├── .firebase/                    # Configurações do Firebase
├── .github/
│   └── workflows/               # GitHub Actions para CI/CD
│       ├── github-pages.yml
│       ├── staging-deploy.yml
│       └── develop-deploy.yml
├── nathaniel-portfolio/
│   ├── public/                  # Arquivos estáticos
│   └── src/
│       ├── components/
│       │   └── ui/              # Componentes reutilizáveis
│       ├── pages/               # Páginas principais
│       │   ├── Home.tsx         # Página inicial
│       │   ├── QuemSomos.tsx    # Sobre a empresa
│       │   ├── Servicos.tsx     # Serviços oferecidos
│       │   └── Contato.tsx      # Contato e localização
│       ├── assets/              # Imagens e recursos
│       ├── App.tsx              # Componente principal
│       ├── App.css              # Estilos globais
│       └── main.tsx             # Ponto de entrada
├── .firebaserc                  # Configuração do Firebase
├── firebase.json                # Configurações de hosting
├── package.json                 # Dependências e scripts
└── DESENVOLVIMENTO.md           # Guia de desenvolvimento
```

## 📱 Páginas e Funcionalidades

### **1. Home (Página Inicial)**
- **Hero Section** - Apresentação da empresa com CTA
- **Cards de Serviços** - Desenvolvimento Web, Mobile e Consultoria
- **Animações** - Efeitos de entrada suaves com Framer Motion
- **Design Responsivo** - Adaptável para mobile e desktop

### **2. Quem Somos**
- **História da Empresa** - Missão, visão e valores
- **Equipe** - Apresentação dos profissionais
- **Diferenciais** - Pontos fortes da Arkon
- **Timeline** - Evolução da empresa

### **3. Serviços**
- **Desenvolvimento Web** - Sites institucionais e e-commerce
- **Desenvolvimento Mobile** - Apps iOS e Android
- **Consultoria Digital** - Estratégias e otimização
- **Cards Interativos** - Hover effects e animações

### **4. Contato**
- **Formulário de Contato** - Integração funcional
- **Informações de Contato** - Telefone, email e endereço
- **Mapa Integrado** - Localização da empresa
- **Redes Sociais** - Links para perfis oficiais

## 🌐 Ambientes de Deploy

| Ambiente | Branch | URL | Uso |
|----------|--------|-----|-----|
| **Produção** | `main` | https://arkon-lab.web.app | Site oficial |
| **Staging** | `staging` | Preview Channel | Testes finais |
| **Desenvolvimento** | `develop` | Preview Channel | Integração de features |

## ⚙️ Scripts Disponíveis

```bash
# Desenvolvimento local
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Deploy para Firebase (produção)
firebase deploy

# Deploy para ambiente específico
firebase hosting:channel:deploy NOME_CANAL
```

## 🚀 Como Executar Localmente

1. **Clone o repositório**
```bash
git clone https://github.com/NathanielPereira/Arkon_react.git
cd Porfolio
```

2. **Instale as dependências**
```bash
cd nathaniel-portfolio
npm install
```

3. **Execute o projeto**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

## 🔄 Fluxo de Desenvolvimento

### **Criando uma nova feature:**
```bash
git checkout develop
git pull origin develop
git checkout -b feature/nome-da-feature
# Desenvolver...
git commit -m "feat: adiciona nova funcionalidade"
git push origin feature/nome-da-feature
```

### **Deploy para produção:**
```bash
git checkout main
git merge staging
git push origin main
# Deploy automático via GitHub Actions
```

## 📊 Métricas e Performance

- **Lighthouse Score:** 95+ Performance
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **Cumulative Layout Shift:** < 0.1
- **Mobile-First:** Design responsivo otimizado

## 🎨 Design System

### **Cores Principais**
- **Primary:** Bootstrap Blue (#0d6efd)
- **Secondary:** Dark Gray (#6c757d)
- **Success:** Green (#198754)
- **Accent:** Custom gradients

### **Tipografia**
- **Font Family:** System fonts + Web fonts
- **Sizes:** Escala responsiva (text-sm a text-4xl)
- **Weight:** 300, 400, 500, 600, 700

### **Espaçamento**
- **Padding:** Escala Tailwind (p-4, p-8, p-12)
- **Margin:** Sistema de espaçamento consistente
- **Line Height:** leading-relaxed para legibilidade

## 🔧 Configurações Técnicas

### **Vite Configuration**
- **Hot Module Replacement (HMR)** - Recarregamento instantâneo
- **Code Splitting** - Bundle otimizado
- **Asset Optimization** - Compressão automática

### **Firebase Configuration**
- **Hosting** - Deploy automático
- **Preview Channels** - Ambientes de teste
- **Custom Domain** - arkon-lab.web.app

### **GitHub Actions**
- **CI/CD Pipeline** - Deploy automático
- **Multi-Environment** - staging, develop, main
- **Automated Testing** - Build verification

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é propriedade da **Arkon - Soluções Digitais**. Todos os direitos reservados.

## 📞 Contato

- **Website:** https://arkon-lab.web.app
- **Email:** contato@arkon.com.br
- **GitHub:** @NathanielPereira
- **LinkedIn:** Nathaniel Pereira

---

**Desenvolvido com ❤️ pela equipe Arkon**