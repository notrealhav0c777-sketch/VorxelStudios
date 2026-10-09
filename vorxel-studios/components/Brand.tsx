"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { siteConfig } from "@/lib/site-config";

export default function Brand() {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const flash = () => { setOpen(true); clearTimeout(timer.current); timer.current = setTimeout(() => setOpen(false), 5000); };
  return (
    <div className="brand" onMouseEnter={() => { clearTimeout(timer.current); setOpen(true); }} onMouseLeave={() => setOpen(false)}
         onKeyDown={(e) => e.key === "Escape" && setOpen(false)}>
      <a href="#top" className="brand-link" aria-label="Vorxel Studios — voltar ao início" onClick={flash}>
        <Image src={siteConfig.logo} alt="Logo da Vorxel Studios" width={52} height={52} priority />
      </a>
      <button type="button" className="brand-hint" aria-expanded={open} aria-controls="logo-msg"
              aria-label={open ? "Ocultar mensagem" : "Mostrar mensagem"} onClick={() => setOpen((v) => !v)}>
        <span aria-hidden="true" />
      </button>
      <div id="logo-msg" role="status" className={"bubble" + (open ? " on" : "")}>
        Tá vendo esse site? Imagina ter um igual pro seu negócio.
      </div>
    </div>
  );
}
