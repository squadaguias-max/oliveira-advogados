import { ArrowRight, ArrowUpRight, ChevronDown, FileText, Landmark, MessageCircle, ShieldCheck, Wallet } from "lucide-react";
import { createElement } from "react";
import { templateConfig as site, whatsappUrl } from "../../../config/template.config";

const concerns = [
  { number: "01", icon: Landmark, title: "Perdeu mais de R$ 50 mil?", text: "Perdas expressivas com jogos e apostas podem representar um impacto relevante no patrimônio e precisam ser analisadas considerando as circunstâncias de cada caso.", action: "Analisar meu caso", image: "/images/apostas.webp" },
  { number: "02", icon: FileText, title: "Contraiu dívidas para continuar apostando?", text: "Empréstimos, cartões de crédito e outras operações financeiras podem ter sido utilizados para continuar jogando, aumentando o comprometimento financeiro.", action: "Quero orientação", image: "/images/celular.webp" },
  { number: "03", icon: Wallet, title: "Comprometeu seu patrimônio?", text: "Recursos, investimentos, bens ou reservas financeiras podem ter sido utilizados para cobrir perdas ou financiar novas apostas.", action: "Falar sobre meu caso", image: "/images/carteira.webp" },
  { number: "04", icon: ShieldCheck, title: "O prejuízo afetou sua vida financeira?", text: "Quando as perdas alcançam valores elevados, as consequências podem ultrapassar o dinheiro perdido e atingir outras áreas da vida financeira e familiar.", action: "Quero analisar", image: "/images/analise.webp" },
];

const faqs = [
  ["Perdi mais de R$ 50 mil com jogos. Meu caso pode ser analisado?", "Sim. A situação pode ser avaliada individualmente, considerando os valores envolvidos, as circunstâncias e os documentos disponíveis."],
  ["Também posso procurar orientação se fiz empréstimos para apostar?", "Sim. Contratos, operações financeiras e demais elementos relacionados podem ser considerados na análise."],
  ["E se eu tiver utilizado diferentes plataformas?", "As informações e documentos relacionados às operações podem ser apresentados para análise do caso concreto."],
  ["Existe garantia de recuperar os valores perdidos?", "Não. Qualquer possibilidade depende das circunstâncias específicas e da análise jurídica do caso."],
  ["Preciso ter todos os documentos?", "Não necessariamente. Você pode apresentar inicialmente as informações e documentos que possui."],
];

function CaseLink({ children, className = "button button-gold" }) {
  const url = whatsappUrl();
  return <a className={className} href={url || "#contato"} {...(url ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{children}<ArrowUpRight aria-hidden="true" /></a>;
}

export function HomePage() {
  return <>
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-noise" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow eyebrow-light">Orientação jurídica individualizada</span>
          <h1 id="hero-title">Perdeu <em>R$ 50 mil</em> ou mais com jogos e apostas?</h1>
          <p className="hero-lede">Seu prejuízo financeiro pode envolver questões que merecem uma análise jurídica individualizada.</p>
          <p className="hero-support">Se jogos ou apostas causaram perdas significativas, dívidas ou comprometimento do seu patrimônio, entenda quais aspectos da sua situação podem ser avaliados.</p>
          <div className="hero-actions"><CaseLink>Quero analisar meu caso</CaseLink><a className="button button-outline" href="#situacoes">Entenda as situações <ArrowRight aria-hidden="true" /></a></div>
          <div className="hero-note"><span className="note-line" /> Cada caso depende de seus próprios fatos e documentos.</div>
        </div>
        <div className="hero-visual"><img src="/images/hero.jpg" width="1100" height="1650" alt="Pessoa observando o celular em casa, em momento de preocupação" fetchpriority="high" /><div className="hero-visual-caption"><span>01 / 03</span><p>Informação clara para decisões conscientes.</p></div></div>
      </div>
      <div className="hero-index" aria-hidden="true">OLIVEIRA <span>•</span> ADVOGADOS ASSOCIADOS</div>
    </section>

    <section className="intro-strip" aria-label="Sobre a análise"><div className="container intro-strip-inner"><span className="eyebrow">Quando o impacto vai além da aposta</span><p>Perdas elevadas merecem atenção aos <strong>fatos, documentos e consequências financeiras</strong> de cada situação.</p><a href="#situacoes" aria-label="Ver situações que podem ser analisadas"><ArrowRight /></a></div></section>

    <section className="situations section-space" id="situacoes"><div className="container"><div className="section-top"><div><span className="eyebrow">01 / Situações</span><h2>Quando as apostas geram um <em>prejuízo significativo.</em></h2></div><p>Estas situações ajudam a identificar os pontos relevantes para uma primeira conversa. Nenhuma delas, isoladamente, define um resultado jurídico.</p></div><div className="concern-grid">{concerns.map(({ number, icon: Icon, title, text, action, image }) => <article className="concern-card" key={number}><div className="concern-image"><img src={image} width="760" height="510" alt="" loading="lazy" /><span>{number}</span></div><div className="concern-body">{createElement(Icon, { "aria-hidden": "true" })}<h3>{title}</h3><p>{text}</p><CaseLink className="text-link">{action}</CaseLink></div></article>)}</div></div></section>

    <section className="assessment section-space" id="analise"><div className="container assessment-grid"><div className="assessment-image"><img src="/images/analise.webp" width="1100" height="733" alt="Profissionais analisando documentos financeiros em uma mesa" loading="lazy" /><div className="image-label">Análise individual<br /><span>Fatos • Documentos • Contexto</span></div></div><div className="assessment-copy"><span className="eyebrow eyebrow-light">02 / O que pode ser analisado</span><h2>O contexto da sua situação importa.</h2><p className="assessment-lede">Cada situação possui características próprias.</p><p>A análise pode considerar os fatos, documentos, movimentações financeiras, contratos e demais elementos relacionados ao caso.</p><p>O objetivo é compreender a situação apresentada e identificar quais questões jurídicas podem ser avaliadas.</p><CaseLink>Solicitar orientação jurídica</CaseLink></div></div></section>

    <section className="process section-space" id="processo"><div className="container"><div className="section-top"><div><span className="eyebrow">03 / Como funciona</span><h2>Uma conversa. Uma análise. <em>Orientação clara.</em></h2></div><p>O atendimento parte do que você viveu e dos elementos disponíveis. Os caminhos possíveis são apresentados de acordo com o caso concreto.</p></div><div className="process-grid"><article><b>01</b><span>Apresentação</span><h3>Você apresenta sua situação</h3><p>Conte o que aconteceu e quais foram os impactos financeiros relacionados aos jogos ou apostas.</p></article><article><b>02</b><span>Avaliação</span><h3>O caso é analisado</h3><p>As informações e documentos disponíveis são avaliados individualmente.</p></article><article><b>03</b><span>Orientação</span><h3>Você recebe orientação</h3><p>São apresentados os caminhos jurídicos que podem ser considerados de acordo com as particularidades do caso.</p></article></div></div></section>

    <section className="office section-space" id="escritorio"><div className="container office-grid"><div><span className="eyebrow">04 / Sobre o escritório</span><h2>Atendimento individualizado, com atenção às particularidades de cada situação.</h2><div className="office-rule" /><p>O escritório atua na assessoria jurídica de pessoas e empresas, com atendimento individualizado e análise das particularidades de cada situação.</p><p>Em casos envolvendo questões financeiras e patrimoniais, são avaliados os fatos, documentos e circunstâncias relevantes para orientar o cliente sobre os caminhos jurídicos possíveis.</p><CaseLink className="text-link">Agendar atendimento</CaseLink></div><div className="office-panel"><img className="office-logo" src="/images/logo-completo.png" width="900" height="542" alt="Oliveira Advogados Associados" loading="lazy" /><p>Escuta, análise e orientação jurídica para entender os próximos passos.</p><span className="panel-bottom">Cada caso é único.</span></div></div></section>

    <section className="faq section-space" id="perguntas"><div className="container faq-grid"><div className="faq-intro"><span className="eyebrow">05 / Perguntas frequentes</span><h2>Dúvidas antes de dar o próximo passo?</h2><p>Reunimos respostas objetivas sobre a análise de situações envolvendo perdas com jogos e apostas.</p><CaseLink className="text-link">Falar sobre meu caso</CaseLink></div><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<ChevronDown aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="contact section-space" id="contato"><div className="container contact-grid"><div><span className="eyebrow eyebrow-light">Atendimento individual</span><h2>Perdeu R$ 50 mil ou mais com jogos ou apostas?</h2><p>Se o prejuízo financeiro foi significativo, sua situação pode ser analisada individualmente.</p><CaseLink>Quero analisar meu caso</CaseLink></div><div className="contact-card"><MessageCircle aria-hidden="true" /><h3>Fale com o escritório</h3>{site.contact.whatsapp || site.contact.phone || site.contact.email ? <div className="contact-options">{site.contact.whatsapp && <a href={whatsappUrl()}>WhatsApp <ArrowUpRight /></a>}{site.contact.phone && <a href={`tel:${site.contact.phone}`}>Telefone <ArrowUpRight /></a>}{site.contact.email && <a href={`mailto:${site.contact.email}`}>E-mail <ArrowUpRight /></a>}{site.contact.instagram && <a href={site.contact.instagram}>Instagram <ArrowUpRight /></a>}</div> : <p>Os canais oficiais de atendimento serão informados em breve.</p>}{site.office.address && <address>{site.office.address}</address>}</div></div></section>
  </>;
}
