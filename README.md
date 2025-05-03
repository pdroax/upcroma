# Croma Films Website
(Link para site já hospedado: https://www.cromafilms.com.br)

Site institucional da Croma Films, especialista em películas residenciais e empresariais em Curitiba.

## 🚀 Tecnologias

- [Next.js 14](https://nextjs.org/)
- [React 19](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📦 Pré-requisitos

- Node.js 18.17 ou superior
- npm ou yarn ou pnpm

## 🛠️ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/croma-films.git
cd croma-films
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

## 🚀 Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🔨 Build

Para gerar a versão de produção:

```bash
npm run build
# ou
yarn build
# ou
pnpm build
```

O resultado da build estará na pasta `out`. Este é um site estático que pode ser hospedado em qualquer servidor web.

## 🌐 Hospedagem

### Opção 1: Vercel (Recomendado)

1. Crie uma conta na [Vercel](https://vercel.com)
2. Conecte seu repositório GitHub
3. A Vercel detectará automaticamente que é um projeto Next.js
4. Deploy automático a cada push

### Opção 2: Hospedagem Estática

1. Após o build, todo o conteúdo da pasta `out` pode ser hospedado em:
   - Amazon S3
   - Netlify
   - GitHub Pages
   - Qualquer servidor web estático

#### Para GitHub Pages:

1. Renomeie a pasta `out` para `docs`
2. Configure o GitHub Pages para usar a pasta `docs`
3. Adicione um arquivo `.nojekyll` na raiz

#### Para hospedagem tradicional:

1. Faça upload de todo o conteúdo da pasta `out` para seu servidor
2. Configure o servidor web (Apache/Nginx) para servir os arquivos estáticos
3. Configure redirecionamento 404 para `404.html`

## 📝 Configurações Importantes

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_SITE_URL=https://www.cromafilms.com.br
```

### EmailJS

Para o formulário de contato funcionar, configure suas credenciais do EmailJS em:
`src/components/project/ProjectForm.tsx`

## 🧪 SEO e Performance

- Todas as páginas têm meta tags otimizadas
- Imagens otimizadas com Next.js Image
- Sitemap em `/public/sitemap.xml`
- robots.txt configurado
- Lighthouse score > 90 em todas as métricas

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Suporte

Para suporte, envie um email para croma@cromafilms.com.br ou abra uma issue no GitHub.
