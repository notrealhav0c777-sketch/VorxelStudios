import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import WaButton from "@/components/WaButton";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = projects.find((x) => x.slug === params.slug);
  return p ? { title: `${p.name} — conceito demonstrativo | Vorxel Studios`, description: p.sub } : {};
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) notFound();
  const style = { "--bg": p.bg, "--fg": p.fg, "--a": p.accent, fontFamily: p.font } as React.CSSProperties;
  return (
    <div className="demo" style={style}>
      <div className="demo-banner" role="note">
        <span>Conceito demonstrativo da Vorxel Studios. Todo o conteúdo é fictício.</span>
        <Link href="/#portfolio">Voltar ao portfólio</Link>
      </div>
      <header className="demo-head"><strong>{p.name}</strong><span>{p.segment}</span></header>
      <section className="demo-hero">
        <h1>{p.headline}</h1>
        <p>{p.sub}</p>
        <span className="demo-btn">Botão de ação do conceito</span>
      </section>
      <section className="demo-grid">
        {p.items.map(([t, d]) => (<article key={t}><h2>{t}</h2><p>{d}</p></article>))}
      </section>
      <section className="demo-cta">
        <h2>Quer um site assim para o seu negócio?</h2>
        <WaButton className="btn btn-gold">Falar com a Vorxel</WaButton>
      </section>
    </div>
  );
}
