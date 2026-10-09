import Image from "next/image";
import WaButton from "./WaButton";
import { InstagramLink, navLinks } from "./Links";
import { WhatsAppIcon } from "./Icons";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-in">
        <div className="foot-brand">
          <Image src={siteConfig.logo} alt="Logo da Vorxel Studios" width={56} height={56} />
          <p>Vorxel Studios — {siteConfig.tagline}</p>
        </div>
        <nav aria-label="Rodapé" className="foot-nav">
          {navLinks.map((l) => (<a key={l.href} href={l.href}>{l.label}</a>))}
        </nav>
        <div className="foot-icons">
          <InstagramLink />
          <WaButton className="icon-btn" label="Conversar no WhatsApp"><WhatsAppIcon /></WaButton>
          {siteConfig.email && <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>}
        </div>
      </div>
      <p className="wrap copy">© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</p>
    </footer>
  );
}
