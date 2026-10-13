# Oliveira Advogados Associados — perdas com jogos e apostas

Landing page personalizada sobre análise jurídica individualizada de prejuízos significativos com jogos e apostas. Base: **Template 6 — Advocacia clássica contemporânea**, com Vite, React e CSS próprio.

## Desenvolvimento

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

O build gera `dist/` e inclui o conteúdo principal no HTML inicial. A navegação e o FAQ continuam interativos após a hidratação.

## Dados oficiais pendentes

Preencher `src/config/template.config.js` com OAB, WhatsApp, telefone, e-mail, Instagram e endereço que devem ser exibidos. O nome **Oliveira Advogados Associados** foi confirmado pelo logo recebido. Enquanto não houver WhatsApp, os botões levam à seção de contato e nenhum número fictício é publicado.

O domínio oficial também está pendente. Depois de confirmado, configure `SITE_URL=https://dominio-oficial/` no ambiente de build e execute `npm run build`. Isso ativa canonical, URLs de Open Graph, sitemap e indexação. Sem `SITE_URL`, a página permanece `noindex` e não é gerado sitemap.

Veja `SEO.md` para detalhes e checklist de publicação.
# oliveira-advogados
