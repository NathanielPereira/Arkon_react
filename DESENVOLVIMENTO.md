# 🚀 Guia de Desenvolvimento - Arkon Portfolio

## 📋 Estrutura de Branches

### 🌿 **Organização das Branches**

| Branch | Ambiente | URL | Uso |
|--------|----------|-----|-----|
| **main** | 🚀 Produção | https://arkon-lab.web.app | Site oficial estável |
| **staging** | 🧪 Homologação | Preview Channel | Testes finais antes da produção |
| **develop** | 🔨 Desenvolvimento | Preview Channel | Integração contínua das features |
| **feature/** | 🌱 Features | Local/Dev | Desenvolvimento de funcionalidades |

### **Branch Atual: `feature/planos-e-projetos`**
- ✅ Implementa página de Planos de Serviços
- ✅ Implementa página de Portfolio/Projetos  
- ✅ Atualiza navegação e roteamento
- ✅ Adiciona documentação completa

---

## 🔄 Fluxo de Trabalho

### **1. Desenvolvendo Nova Feature:**
```bash
# Ir para develop e atualizar
git checkout develop
git pull origin develop

# Criar nova branch de feature
git checkout -b feature/nome-da-funcionalidade

# Desenvolver e fazer commits
git add .
git commit -m "feat: adiciona nova funcionalidade"

# Push da feature
git push origin feature/nome-da-funcionalidade
```

### **2. Testando Localmente:**
```powershell
# No PowerShell (Windows)
cd nathaniel-portfolio
npm run dev

# Acesse: http://localhost:5173
```

### **3. Integrando a Feature:**
```bash
# Voltar para develop
git checkout develop

# Fazer merge da feature
git merge feature/nome-da-funcionalidade

# Push para develop (ativa deploy automático)
git push origin develop
```

### **4. Deploy para Staging:**
```bash
# Após testes em develop
git checkout staging
git pull origin staging
git merge develop
git push origin staging
```

### **5. Deploy para Produção:**
```bash
# Após testes em staging
git checkout main
git pull origin main
git merge staging
git push origin main
```

---

## ⚡ Comandos Úteis

### **Git:**
```bash
# Ver todas as branches
git branch -a

# Ver status atual
git status

# Ver diferenças
git diff

# Desfazer alterações locais
git checkout .

# Voltar commit (soft)
git reset --soft HEAD~1
```

### **Desenvolvimento:**
```powershell
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

### **Firebase:**
```bash
# Login no Firebase
firebase login

# Deploy para produção
firebase deploy

# Deploy para canal específico
firebase hosting:channel:deploy NOME_CANAL
```

---

## 🧪 Testando Novas Funcionalidades

### **Checklist de Testes:**

#### **Página de Planos (`/planos`):**
- [ ] 4 planos carregam corretamente
- [ ] Badges "Mais Popular" e "Recomendado" aparecem
- [ ] Modal de contato abre ao clicar nos botões
- [ ] Formulário envia para WhatsApp
- [ ] Responsividade funciona no mobile
- [ ] Animações funcionam suavemente

#### **Página de Projetos (`/projetos`):**
- [ ] 6 projetos carregam na galeria
- [ ] Filtros por categoria funcionam
- [ ] Modal de detalhes abre corretamente
- [ ] Hover effects nos cards funcionam
- [ ] Badges de "Destaque" aparecem
- [ ] Links externos abrem em nova aba

#### **Navegação:**
- [ ] Menu inclui "Planos" e "Projetos"
- [ ] Navegação mobile funciona
- [ ] Menu fecha automaticamente no mobile
- [ ] URLs amigáveis funcionam

#### **Geral:**
- [ ] Carregamento rápido (< 3s)
- [ ] Sem erros no console
- [ ] Formulários validam corretamente
- [ ] Design consistente entre páginas

---

## 🚀 Deploy Automático

### **GitHub Actions Configuradas:**

1. **Main Branch** → Deploy automático para produção
2. **Staging Branch** → Deploy automático para staging  
3. **Develop Branch** → Deploy automático para desenvolvimento

### **URLs dos Ambientes:**
- **Produção:** https://arkon-lab.web.app
- **Staging:** https://arkon-lab.web.app/staging
- **Development:** https://arkon-lab.web.app/dev

---

## 💡 Tipos de Commit

Seguimos a convenção **Conventional Commits**:

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação, CSS
- `refactor:` Refatoração de código
- `test:` Testes
- `chore:` Tarefas de manutenção
- `perf:` Melhorias de performance

### **Exemplos:**
```bash
git commit -m "feat: adiciona página de planos de serviços"
git commit -m "fix: corrige erro de navegação mobile"
git commit -m "docs: atualiza documentação do projeto"
```

---

## 🔧 Troubleshooting

### **Problemas Comuns:**

#### **Erro de PowerShell com `&&`:**
```powershell
# ❌ Não funciona no PowerShell
cd pasta && npm run dev

# ✅ Funciona no PowerShell  
cd pasta
npm run dev
```

#### **Erro de Build:**
```bash
# Limpar cache e reinstalar
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

#### **Problemas de Git:**
```bash
# Resetar para estado limpo
git stash
git checkout develop
git pull origin develop
```

#### **Firebase Deploy Falha:**
```bash
# Relogar no Firebase
firebase logout
firebase login
firebase deploy
```

---

## 📊 Monitoramento

### **Métricas Importantes:**
- Build time < 2 minutos
- Site loading < 3 segundos  
- Lighthouse score > 90
- Zero erros JavaScript
- Mobile responsivo 100%

### **Logs e Debug:**
```bash
# Ver logs do build
npm run build --verbose

# Debug do Firebase
firebase debug

# Logs do servidor
npm run dev --debug
```

---

## 🎯 Próximos Passos

### **Implementações Pendentes:**
1. [ ] Coletar imagens reais dos projetos
2. [ ] Ajustar número do WhatsApp
3. [ ] Implementar Google Analytics
4. [ ] Configurar pixels de conversão
5. [ ] Criar lead magnets
6. [ ] Implementar blog corporativo

### **Melhorias Técnicas:**
1. [ ] Lazy loading de imagens
2. [ ] Service Worker para cache
3. [ ] Otimização de bundle
4. [ ] Testes automatizados
5. [ ] Monitoramento de erros

---

**🚀 Happy Coding! Sua estrutura está profissional e escalável!** 