"use client";
import { useEffect, useState } from "react";

export default function PendingNotice() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    let t: ReturnType<typeof setTimeout> | undefined;
    const h = () => { setOn(true); clearTimeout(t); t = setTimeout(() => setOn(false), 6000); };
    window.addEventListener("wa-pending", h);
    return () => { window.removeEventListener("wa-pending", h); clearTimeout(t); };
  }, []);
  return (
    <div className={"notice" + (on ? " on" : "")} role="status" aria-live="polite">
      {on && "Configuração pendente: o número real do WhatsApp ainda não foi definido em lib/site-config.ts."}
    </div>
  );
}
