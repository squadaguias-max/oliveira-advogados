import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { whatsappUrl } from "../../config/template.config";

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const contactUrl = whatsappUrl();
  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className="site-header"><div className="container header-inner">
      <a className="brand" href="#inicio" onClick={close} aria-label="Oliveira Advogados Associados, voltar ao início"><img className="brand-logo" src="/images/marca.png" width="550" height="548" alt="" /><span className="brand-name"><b>Oliveira</b><small>Advogados Associados</small></span></a>
      <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="site-nav">{open ? <X /> : <Menu />}</button>
      <nav className={open ? "nav open" : "nav"} id="site-nav" aria-label="Navegação principal"><a href="#situacoes" onClick={close}>Situações</a><a href="#analise" onClick={close}>O que analisar</a><a href="#processo" onClick={close}>Como funciona</a><a href="#escritorio" onClick={close}>O escritório</a><a href="#perguntas" onClick={close}>Dúvidas</a><a className="header-cta" href={contactUrl || "#contato"} onClick={close} {...(contactUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}>Analisar meu caso <ArrowUpRight aria-hidden="true" /></a></nav>
    </div></header>
  </>;
}
