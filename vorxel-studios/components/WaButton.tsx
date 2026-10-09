"use client";
import { whatsappHref, whatsappIsPlaceholder } from "@/lib/site-config";

export default function WaButton({ children, className, label }: { children: React.ReactNode; className?: string; label?: string }) {
  const onClick = (e: React.MouseEvent) => {
    if (whatsappIsPlaceholder) {
      e.preventDefault();
      window.dispatchEvent(new Event("wa-pending"));
    }
  };
  return (
    <a href={whatsappIsPlaceholder ? "#" : whatsappHref} className={className} onClick={onClick} aria-label={label}
       {...(whatsappIsPlaceholder ? {} : { target: "_blank", rel: "noopener noreferrer" })}>
      {children}
    </a>
  );
}
