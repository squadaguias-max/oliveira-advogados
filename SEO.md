# SEO e publicação

## Posicionamento

- Tema principal: análise jurídica individualizada de perdas significativas com jogos e apostas.
- Intenção de busca: pessoas que perderam R$ 50 mil ou mais, contraíram dívidas ou comprometeram patrimônio e procuram orientação jurídica.
- Termos secundários naturais: prejuízo com apostas, dívidas para apostar, perdas patrimoniais com jogos.
- Localidade: não informada; nenhum município ou abrangência foi inventado.

## Implementado

- Título, descrição, H1 único, hierarquia semântica, FAQ visível e JSON-LD correspondente.
- Conteúdo principal pré-renderizado em `dist/index.html`, mantendo hidratação para menu e FAQ.
- Metadados Open Graph e Twitter, idioma pt-BR, ícone da marca, imagem principal priorizada e fotos otimizadas.
- Imagem social preparada em `public/images/social.jpg` (1200 × 630).
- `robots.txt`; sem domínio confirmado, a página fica com `noindex` e não há sitemap nem canonical fictícios.
- Com `SITE_URL` HTTPS confirmado, o build acrescenta canonical, URLs sociais e sitemap e muda robots meta para indexação.

## Pendências antes de publicar

1. Inserir OAB do responsável e confirmar dados profissionais exibíveis.
2. Inserir WhatsApp, telefone, e-mail, Instagram e endereço oficial, conforme desejado; testar os links reais.
3. Confirmar domínio oficial e configurar `SITE_URL` no ambiente de build.
4. Revisar o texto e as imagens com o escritório antes da publicação.
5. Rodar `npm run lint` e `npm run build` novamente com os dados finais, verificar a versão em celular e desktop e testar canonical, imagem social, robots e sitemap.

Depois da publicação, verificar o domínio no Google Search Console, enviar o sitemap, testar os dados estruturados e manter o Perfil da Empresa no Google consistente com os dados oficiais.
