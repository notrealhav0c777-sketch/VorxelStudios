"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Brand from "./Brand";
import WaButton from "./WaButton";
import { WhatsAppIcon } from "./Icons";
import { InstagramLink, navLinks } from "./Links";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header" id="top">
      <a href="#conteudo" className="skip">Pular para o conteúdo</a>
      <div className="wrap header-in">
        <Brand />
        <nav className={"nav" + (open ? " open" : "")} aria-label="Principal">
          {navLinks.map((l) => (<a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>))}
        </nav>
        <div className="header-actions">
          <InstagramLink />
          <WaButton className="icon-btn" label="Conversar no WhatsApp"><WhatsAppIcon /></WaButton>
          <button type="button" className="icon-btn menu-btn" aria-expanded={open} aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen((v) => !v)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
