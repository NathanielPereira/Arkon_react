# Guia de Desenvolvimento - Arkon Portfolio

## Estrutura de Branches

### 🚀 **main** (Produção)
- URL: https://arkon-lab.web.app
- Deploy automático a cada push
- Código estável e testado

### 🧪 **staging** (Teste/Homologação)
- URL: https://arkon-lab.web.app/staging (Firebase Preview Channel)
- Deploy automático a cada push na branch staging
- Testes finais antes da produção

### 🔨 **develop** (Desenvolvimento)
- URL: https://arkon-lab.web.app/dev (Firebase Preview Channel)
- Deploy automático a cada push na branch develop
- Integração contínua das features

### 🌿 **feature/nome-da-feature** (Features)
- Branches temporárias para desenvolvimento de novas funcionalidades
- Criadas a partir da branch develop
- Merge via Pull Request para develop

## Fluxo de Trabalho

### 1. Criando uma nova feature:
```bash
# Ir para develop e atualizar
git checkout develop
git pull origin develop

# Criar nova branch de feature
git checkout -b feature/nova-funcionalidade

# Desenvolver e fazer commits
git add .
git commit -m "feat: adiciona nova funcionalidade"

# Push da feature
git push origin feature/nova-funcionalidade
```

### 2. Integrando a feature:
- Criar Pull Request da `feature/nova-funcionalidade` para `develop`
- Revisar código
- Testar no ambiente de desenvolvimento
- Fazer merge

### 3. Deploy para staging:
```bash
# Após merge na develop, integrar com staging
git checkout staging
git pull origin staging
git merge develop
git push origin staging
```

### 4. Deploy para produção:
```bash
# Após testes em staging, integrar com main
git checkout main
git pull origin main
git merge staging
git push origin main
```

## Comandos Úteis

### Ver todas as branches:
```bash
git branch -a
```

### Trocar de branch:
```bash
git checkout nome-da-branch
```

### Atualizar branch local:
```bash
git pull origin nome-da-branch
```

### Ver status do repositório:
```bash
git status
```

## Ambientes

| Branch | Ambiente | URL | Uso |
|--------|----------|-----|-----|
| main | Produção | https://arkon-lab.web.app | Site oficial |
| staging | Homologação | Preview Channel | Testes finais |
| develop | Desenvolvimento | Preview Channel | Integração de features |

## Tipos de Commit

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação, CSS
- `refactor:` Refatoração de código
- `test:` Testes
- `chore:` Tarefas de manutenção

## Exemplo de Desenvolvimento

Para adicionar uma nova página "Blog":

1. `git checkout develop`
2. `git checkout -b feature/pagina-blog`
3. Desenvolver a página Blog
4. `git commit -m "feat: adiciona página de blog com listagem de posts"`
5. `git push origin feature/pagina-blog`
6. Criar PR para develop
7. Testar em https://arkon-lab.web.app/dev
8. Após aprovação, merge para staging
9. Testar em https://arkon-lab.web.app/staging
10. Deploy final para produção 