import { InstagramIcon } from "./Icons";
import { siteConfig } from "@/lib/site-config";

export const navLinks = [
  { href: "#sobre", label: "Sobre" }, { href: "#portfolio", label: "Projetos" },
  { href: "#servicos", label: "Serviços" }, { href: "#processo", label: "Processo" },
];

// Instagram PROVISÓRIO: sem URL em lib/site-config.ts, o ícone aparece desativado.
export function InstagramLink({ className = "" }: { className?: string }) {
  return siteConfig.instagramUrl ? (
    <a href={siteConfig.instagramUrl} className={`icon-btn ${className}`} target="_blank" rel="noopener noreferrer" aria-label="Instagram da Vorxel Studios"><InstagramIcon /></a>
  ) : (
    <span className={`icon-btn off ${className}`} role="img" aria-label="Instagram: perfil ainda não configurado" title="Instagram em breve"><InstagramIcon /></span>
  );
}
